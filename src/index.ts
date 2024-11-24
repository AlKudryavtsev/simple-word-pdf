import * as libre from 'libreoffice-convert';
import { promisify } from 'util';
import path from 'path';
import fs, { promises as asyncFs } from 'fs';

const convert = promisify(libre.convert);

export async function convertWordToPdf(src: string) {
  if (!fs.existsSync(src)) return null;
  const ext = path.extname(src);
  if (ext === '.pdf') return src;

  const out = src + '.pdf';
  const pdfBuffer = await convert(fs.readFileSync(out), 'pdf', undefined);
  await asyncFs.writeFile(out, pdfBuffer);
  return out;
}
