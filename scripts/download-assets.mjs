import { createWriteStream, mkdirSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import https from 'https';
import http from 'http';
import { URL } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

const assets = [
  // Header / common
  { url: 'https://www.ricpro.com/images/rnwl/common/hd_title.jpg',       dest: 'public/images/rnwl/common/hd_title.jpg' },
  { url: 'https://www.ricpro.com/images/rnwl/hd_tel.jpg',                dest: 'public/images/rnwl/hd_tel.jpg' },
  { url: 'https://www.ricpro.com/images/rnwl/icon/instagram.svg',        dest: 'public/images/rnwl/icon/instagram.svg' },
  { url: 'https://www.ricpro.com/images/rnwl/icon/mail.svg',             dest: 'public/images/rnwl/icon/mail.svg' },
  { url: 'https://www.ricpro.com/images/rnwl/icon/line.svg',             dest: 'public/images/rnwl/icon/line.svg' },
  { url: 'https://www.ricpro.com/images/rnwl/icon/home.svg',             dest: 'public/images/rnwl/icon/home.svg' },
  // Mainvisual
  { url: 'https://www.ricpro.com/images/rnwl/main/mainvisual_pc.png',    dest: 'public/images/rnwl/main/mainvisual_pc.png' },
  { url: 'https://www.ricpro.com/images/rnwl/main/logo.png',             dest: 'public/images/rnwl/main/logo.png' },
  { url: 'https://www.ricpro.com/images/rnwl/main/reformcontractor.png', dest: 'public/images/rnwl/main/reformcontractor.png' },
  // Contact section images (both pc/sp variants)
  { url: 'https://www.ricpro.com/images/rnwl/naisou/cnt_contact01_pc.png', dest: 'public/images/rnwl/naisou/cnt_contact01_pc.png' },
  { url: 'https://www.ricpro.com/images/rnwl/naisou/cnt_contact01_sp.png', dest: 'public/images/rnwl/naisou/cnt_contact01_sp.png' },
  { url: 'https://www.ricpro.com/images/rnwl/naisou/cnt_contact02_pc.png', dest: 'public/images/rnwl/naisou/cnt_contact02_pc.png' },
  { url: 'https://www.ricpro.com/images/rnwl/naisou/cnt_contact02_sp.png', dest: 'public/images/rnwl/naisou/cnt_contact02_sp.png' },
  { url: 'https://www.ricpro.com/images/rnwl/naisou/cnt_contact03_pc.png', dest: 'public/images/rnwl/naisou/cnt_contact03_pc.png' },
  { url: 'https://www.ricpro.com/images/rnwl/naisou/cnt_contact03_sp.png', dest: 'public/images/rnwl/naisou/cnt_contact03_sp.png' },
  { url: 'https://www.ricpro.com/images/rnwl/naisou/cnt_contact04_pc.png', dest: 'public/images/rnwl/naisou/cnt_contact04_pc.png' },
  { url: 'https://www.ricpro.com/images/rnwl/naisou/cnt_contact04_sp.png', dest: 'public/images/rnwl/naisou/cnt_contact04_sp.png' },
  { url: 'https://www.ricpro.com/images/rnwl/naisou/cnt_contact05_pc.png', dest: 'public/images/rnwl/naisou/cnt_contact05_pc.png' },
  { url: 'https://www.ricpro.com/images/rnwl/naisou/cnt_contact05_sp.png', dest: 'public/images/rnwl/naisou/cnt_contact05_sp.png' },
  // Reasons section
  { url: 'https://www.ricpro.com/images/rnwl/main/ricproman.png',        dest: 'public/images/rnwl/main/ricproman.png' },
  { url: 'https://www.ricpro.com/images/rnwl/main/reason1.png',          dest: 'public/images/rnwl/main/reason1.png' },
  { url: 'https://www.ricpro.com/images/rnwl/main/reason2.png',          dest: 'public/images/rnwl/main/reason2.png' },
  { url: 'https://www.ricpro.com/images/rnwl/main/reason3.png',          dest: 'public/images/rnwl/main/reason3.png' },
  // Message section
  { url: 'https://www.ricpro.com/images/rnwl/main/section_img1.png',     dest: 'public/images/rnwl/main/section_img1.png' },
  { url: 'https://www.ricpro.com/images/rnwl/main/representative_sign.png', dest: 'public/images/rnwl/main/representative_sign.png' },
  // Voices
  { url: 'https://www.ricpro.com/images/rnwl/main/voice_img1.png',       dest: 'public/images/rnwl/main/voice_img1.png' },
  { url: 'https://www.ricpro.com/images/rnwl/main/voice_img2.png',       dest: 'public/images/rnwl/main/voice_img2.png' },
  { url: 'https://www.ricpro.com/images/rnwl/main/voice_img3.png',       dest: 'public/images/rnwl/main/voice_img3.png' },
  // Flow
  { url: 'https://www.ricpro.com/images/rnwl/main/plus.svg',             dest: 'public/images/rnwl/main/plus.svg' },
  // Recruit
  { url: 'https://www.ricpro.com/images/rnwl/main/recruitment.png',      dest: 'public/images/rnwl/main/recruitment.png' },
  // Company
  { url: 'https://www.ricpro.com/images/rnwl/main/ricpro_office.png',    dest: 'public/images/rnwl/main/ricpro_office.png' },
  // Footer
  { url: 'https://www.ricpro.com/images/rnwl/footer_ttl.png',            dest: 'public/images/rnwl/footer_ttl.png' },
  { url: 'https://www.ricpro.com/images/rnwl/footer_desc.png',           dest: 'public/images/rnwl/footer_desc.png' },
  { url: 'https://www.ricpro.com/images/rnwl/footer_tel_pc.png',         dest: 'public/images/rnwl/footer_tel_pc.png' },
  { url: 'https://www.ricpro.com/images/rnwl/footer_btn01.png',          dest: 'public/images/rnwl/footer_btn01.png' },
  { url: 'https://www.ricpro.com/images/rnwl/footer_btn02_pc.png',       dest: 'public/images/rnwl/footer_btn02_pc.png' },
  { url: 'https://www.ricpro.com/images/rnwl/footer_btn03_pc.png',       dest: 'public/images/rnwl/footer_btn03_pc.png' },
  // Float footer
  { url: 'https://www.ricpro.com/images/rnwl/float_footer01_pc.jpg',     dest: 'public/images/rnwl/float_footer01_pc.jpg' },
  { url: 'https://www.ricpro.com/images/rnwl/float_footer02_pc.jpg',     dest: 'public/images/rnwl/float_footer02_pc.jpg' },
  { url: 'https://www.ricpro.com/images/rnwl/float_footer03_pc.jpg',     dest: 'public/images/rnwl/float_footer03_pc.jpg' },
  // SP (mobile) drawer menu
  { url: 'https://www.ricpro.com/images/rnwl/footer_ttl.png',            dest: 'public/images/rnwl/footer_ttl.png' },
  { url: 'https://www.ricpro.com/images/rnwl/footer_desc.png',           dest: 'public/images/rnwl/footer_desc.png' },
  { url: 'https://www.ricpro.com/images/rnwl/footer_tel_pc.png',         dest: 'public/images/rnwl/footer_tel_pc.png' },
  { url: 'https://www.ricpro.com/images/rnwl/footer_btn02_pc.png',       dest: 'public/images/rnwl/footer_btn02_pc.png' },
  { url: 'https://www.ricpro.com/images/rnwl/footer_btn03_pc.png',       dest: 'public/images/rnwl/footer_btn03_pc.png' },
  // Favicon
  { url: 'https://www.ricpro.com/favicon1.png',                          dest: 'public/seo/favicon1.png' },
];

function download(url, destRel) {
  return new Promise((resolve, reject) => {
    const dest = join(ROOT, destRel);
    mkdirSync(dirname(dest), { recursive: true });
    const file = createWriteStream(dest);
    const proto = url.startsWith('https') ? https : http;
    const req = proto.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' }, rejectUnauthorized: false }, res => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        file.close();
        return download(res.headers.location, destRel).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        file.close();
        return reject(new Error(`${res.statusCode} for ${url}`));
      }
      res.pipe(file);
      file.on('finish', () => { file.close(); resolve(dest); });
    });
    req.on('error', err => { file.close(); reject(err); });
  });
}

async function downloadBatch(items, concurrency = 4) {
  const results = [];
  for (let i = 0; i < items.length; i += concurrency) {
    const batch = items.slice(i, i + concurrency);
    const settled = await Promise.allSettled(batch.map(({ url, dest }) => download(url, dest)));
    settled.forEach((r, j) => {
      if (r.status === 'fulfilled') console.log('✓', batch[j].dest);
      else console.error('✗', batch[j].dest, r.reason?.message);
    });
    results.push(...settled);
  }
  return results;
}

// Deduplicate by dest
const seen = new Set();
const unique = assets.filter(a => {
  if (seen.has(a.dest)) return false;
  seen.add(a.dest);
  return true;
});

console.log(`Downloading ${unique.length} assets...`);
downloadBatch(unique).then(() => console.log('Done.'));
