import fs from "node:fs/promises";
import path from "node:path";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/sections/Footer";
import { ButtonLink } from "@/components/ui/Button";
import { portfolioYoutubeVideos } from "@/data/portfolioVideos";
import { PortfolioMediaSwitcher } from "@/components/portfolio/PortfolioMediaSwitcher";

type GalleryImage = {
  src: string;
  alt: string;
};

const imageExtensions = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif"]);

function normalizeLabel(fileName: string) {
  return fileName
    .replace(/\.[^/.]+$/, "")
    .replace(/[-_]+/g, " ")
    .trim();
}

function toYoutubeEmbedUrl(url: string) {
  try {
    const parsed = new URL(url);
    const host = parsed.hostname.replace(/^www\./, "");

    if (host === "youtu.be") {
      const id = parsed.pathname.replace("/", "").trim();
      return id ? `https://www.youtube.com/embed/${id}` : null;
    }

    if (host === "youtube.com" || host === "m.youtube.com") {
      if (parsed.pathname === "/watch") {
        const id = parsed.searchParams.get("v");
        return id ? `https://www.youtube.com/embed/${id}` : null;
      }

      if (parsed.pathname.startsWith("/shorts/")) {
        const id = parsed.pathname.split("/")[2];
        return id ? `https://www.youtube.com/embed/${id}` : null;
      }

      if (parsed.pathname.startsWith("/embed/")) {
        return `https://www.youtube.com${parsed.pathname}`;
      }
    }
  } catch {
    return null;
  }

  return null;
}

async function getGalleryImages(): Promise<GalleryImage[]> {
  const galleryDir = path.join(process.cwd(), "public", "photos", "galerie");

  try {
    const entries = await fs.readdir(galleryDir, { withFileTypes: true });

    return entries
      .filter((entry) => entry.isFile())
      .filter((entry) => imageExtensions.has(path.extname(entry.name).toLowerCase()))
      .sort((a, b) => a.name.localeCompare(b.name, "cs", { numeric: true }))
      .map((entry) => ({
        src: `/photos/galerie/${entry.name}`,
        alt: `Galerie - ${normalizeLabel(entry.name)}`,
      }));
  } catch {
    return [];
  }
}

export default async function PortfolioPage() {
  const images = await getGalleryImages();
  const youtubeEmbeds = portfolioYoutubeVideos
    .map((url) => ({ url, embed: toYoutubeEmbedUrl(url) }))
    .filter((item): item is { url: string; embed: string } => item.embed !== null);

  return (
    <main className="overflow-x-hidden bg-bg text-[#1a1a1a]">
      <Nav />

      <section className="section-shell bg-surface pt-28">
        <div className="site-container">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Celé portfolio</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-medium leading-tight tracking-tight text-[#1a1a1a] lg:text-6xl">
            Velká galerie realizací
          </h1>

          <div className="mt-8 flex flex-wrap gap-4">
            <ButtonLink href="/#kontakt" variant="primary">
              Nezávazná poptávka
            </ButtonLink>
            <ButtonLink href="/" variant="secondary">
              Zpět na hlavní stránku
            </ButtonLink>
          </div>
        </div>
      </section>

      <PortfolioMediaSwitcher images={images} youtubeEmbeds={youtubeEmbeds} />

      <Footer />
    </main>
  );
}
