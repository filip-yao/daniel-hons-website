import fs from "node:fs/promises";
import path from "node:path";

const projectRoot = process.cwd();
const galleryDir = path.join(projectRoot, "public", "photos", "galerie");
const outputFile = path.join(projectRoot, "src", "data", "galleryImages.ts");
const imageExtensions = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif"]);

function normalizeLabel(fileName) {
  return fileName
    .replace(/\.[^/.]+$/, "")
    .replace(/[-_]+/g, " ")
    .trim();
}

async function main() {
  const entries = await fs.readdir(galleryDir, { withFileTypes: true });

  const images = entries
    .filter((entry) => entry.isFile())
    .filter((entry) => imageExtensions.has(path.extname(entry.name).toLowerCase()))
    .sort((a, b) => a.name.localeCompare(b.name, "cs", { numeric: true }))
    .map((entry) => ({
      src: `/photos/galerie/${entry.name}`,
      alt: `Galerie - ${normalizeLabel(entry.name)}`,
    }));

  const fileContents = `export type GalleryImage = {
  src: string;
  alt: string;
};

export const portfolioGalleryImages: GalleryImage[] = ${JSON.stringify(images, null, 2)};
`;

  await fs.writeFile(outputFile, `${fileContents}\n`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});