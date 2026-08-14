import sharp from 'sharp'
import { readdir, mkdir, copyFile, unlink } from 'fs/promises'
import { join } from 'path'
import { existsSync } from 'fs'

const imagesDir = new URL('../public/images', import.meta.url).pathname.replace(/^\/([A-Z]:)/, '$1')
const outDir = join(imagesDir, '..', 'images_optimized')

await mkdir(outDir, { recursive: true })

const sizes = {
  'logo.webp':           { width: 340, height: 252 },
  'hero-bg.webp':        { width: 1440, height: 900 },
  'stump-grinding.webp': { width: 800, height: 600 },
  'tree-health.webp':    { width: 800, height: 600 },
  'land-clearing.webp':  { width: 800, height: 600 },
  'crown-pruning.webp':  { width: 800, height: 600 },
  'storm-cleanup.webp':  { width: 800, height: 600 },
  'tree-removal.webp':   { width: 800, height: 600 },
  'about-arborist.webp': { width: 800, height: 600 },
}

const files = await readdir(imagesDir)

for (const file of files) {
  if (!file.endsWith('.webp')) continue
  const target = sizes[file]
  if (!target) { continue }

  const inputPath = join(imagesDir, file)
  const outputPath = join(outDir, file)

  const info = await sharp(inputPath).metadata()
  console.log(`${file}: ${info.width}x${info.height} → ${target.width}x${target.height}`)

  await sharp(inputPath)
    .resize(target.width, target.height, { fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 75 })
    .toFile(outputPath)

  console.log(`  ✓ written to images_optimized/${file}`)
}

console.log('\nDone! Now replace public/images/*.webp with images_optimized/*.webp')
