import fs from "node:fs";
import path from "node:path";

const root = process.cwd();

const requiredFiles = [
  "index.html",
  "home.html",
  "login.html",
  "register.html",
  "listing.html",
  "sell.html",
  "bought.html",
  "sold.html",
  "wishlist.html"
];

const requiredDirectories = [
  "css",
  "js",
  "images"
];

let failed = false;

for (const file of requiredFiles) {
  const filePath = path.join(root, file);

  if (!fs.existsSync(filePath)) {
    console.error(`FAIL: Missing file: ${file}`);
    failed = true;
  } else {
    console.log(`OK: ${file}`);
  }
}

for (const directory of requiredDirectories) {
  const directoryPath = path.join(root, directory);

  if (!fs.existsSync(directoryPath)) {
    console.error(`FAIL: Missing directory: ${directory}`);
    failed = true;
  } else {
    console.log(`OK: ${directory}/`);
  }
}

if (failed) {
  console.error("Build check failed.");
  process.exit(1);
}

console.log("Build check passed.");
