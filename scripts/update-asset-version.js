const fs = require("fs");
const path = require("path");

const indexPath = path.join(__dirname, "..", "index.html");
const version = new Date().toISOString().replace(/[-:TZ.]/g, "").slice(0, 14);

const source = fs.readFileSync(indexPath, "utf8");

const updated = source
  .replace(/styles\.css\?v=[^"]*/g, `styles.css?v=${version}`)
  .replace(/script\.js\?v=[^"]*/g, `script.js?v=${version}`);

if (updated !== source) {
  fs.writeFileSync(indexPath, updated, "utf8");
  process.stdout.write(`Updated asset version to ${version}\n`);
}
