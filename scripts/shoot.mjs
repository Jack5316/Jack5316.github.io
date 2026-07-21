import puppeteer from "puppeteer-core";

const browser = await puppeteer.launch({
  executablePath: "/Applications/Brave Browser.app/Contents/MacOS/Brave Browser",
  headless: "new",
  args: ["--hide-scrollbars"],
});
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });
page.on("console", (m) => {
  if (m.type() === "error" || m.type() === "warning") console.log(`[console.${m.type()}]`, m.text());
});
page.on("pageerror", (e) => console.log("[pageerror]", e.message));

await page.goto("http://localhost:4173/", { waitUntil: "networkidle0" });
await new Promise((r) => setTimeout(r, 3000));
await page.screenshot({ path: "shots/pp-hero.png" });

for (const [name, selector] of [
  ["about", "#about"],
  ["projects", "#projects"],
  ["experience", "#experience"],
  ["contact", "#contact"],
]) {
  await page.evaluate((sel) => {
    document.querySelector(sel)?.scrollIntoView({ behavior: "instant", block: "start" });
    window.scrollBy(0, -40);
  }, selector);
  await new Promise((r) => setTimeout(r, 2000));
  await page.screenshot({ path: `shots/pp-${name}.png` });
}

await browser.close();
console.log("done");
