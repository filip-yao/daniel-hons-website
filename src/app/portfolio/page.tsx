import { Nav } from "@/components/Nav";
import { Footer } from "@/components/sections/Footer";
import { ButtonLink } from "@/components/ui/Button";
import { portfolioYoutubeVideos } from "@/data/portfolioVideos";
import { portfolioGalleryImages } from "@/data/galleryImages";
import { PortfolioMediaSwitcher } from "@/components/portfolio/PortfolioMediaSwitcher";

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

export default function PortfolioPage() {
  const images = portfolioGalleryImages;
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
