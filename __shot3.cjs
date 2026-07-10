const { chromium } = require('playwright');
const path = require('path');
const outDir = 'C:/Users/HP/AppData/Local/Temp/claude/c--Users-HP-OneDrive-Attachments-Desktop-kidneyClinic/298834b2-b2f3-4164-aac8-d96c1c36aadf/scratchpad';

(async () => {
  const browser = await chromium.launch();
  let page = await (await browser.newContext({ viewport: { width: 1440, height: 900 } })).newPage();
  await page.goto('http://localhost:5174/', { waitUntil: 'networkidle' });
  await page.getByText('Patient Satisfaction').first().scrollIntoViewIfNeeded();
  await page.waitForTimeout(1200);
  await page.screenshot({ path: path.join(outDir, 'stats-pill-desktop.png') });
  await page.close();

  page = await (await browser.newContext({ viewport: { width: 390, height: 844 } })).newPage();
  await page.goto('http://localhost:5174/', { waitUntil: 'networkidle' });
  await page.getByText('Patient Satisfaction').first().scrollIntoViewIfNeeded();
  await page.waitForTimeout(1200);
  await page.screenshot({ path: path.join(outDir, 'stats-pill-mobile.png') });
  await page.close();
  await browser.close();
  console.log('done');
})();
