import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();

const requiredPages = [
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

test("all required application pages exist", () => {
  for (const page of requiredPages) {
    assert.ok(
      fs.existsSync(path.join(root, page)),
      `Missing required page: ${page}`
    );
  }
});

test("index.html has basic HTML structure", () => {
  const html = fs.readFileSync(path.join(root, "index.html"), "utf8");

  assert.match(html, /<!DOCTYPE html>/i);
  assert.match(html, /<html/i);
  assert.match(html, /<head/i);
  assert.match(html, /<body/i);
  assert.match(html, /<title/i);
});

test("main stylesheet directory exists", () => {
  assert.ok(fs.existsSync(path.join(root, "css")));
});

test("main JavaScript directory exists", () => {
  assert.ok(fs.existsSync(path.join(root, "js")));
});

test("application contains JavaScript files", () => {
  const jsFiles = fs
    .readdirSync(path.join(root, "js"))
    .filter(file => file.endsWith(".js"));

  assert.ok(jsFiles.length > 0, "No JavaScript files found");
});

test("HTML pages contain no obvious placeholder markers", () => {
  for (const page of requiredPages) {
    const html = fs.readFileSync(path.join(root, page), "utf8");

    assert.doesNotMatch(
      html,
      /TODO|<Project Name>|<roll>|<name>|<username>/i,
      `${page} contains an obvious placeholder`
    );
  }
});

test("all application pages have basic HTML structure", () => {
  for (const page of requiredPages) {
    const html = fs.readFileSync(path.join(root, page), "utf8");

    assert.match(html, /<!DOCTYPE html>/i, `${page} is missing DOCTYPE`);
    assert.match(html, /<html/i, `${page} is missing html element`);
    assert.match(html, /<head/i, `${page} is missing head element`);
    assert.match(html, /<body/i, `${page} is missing body element`);
    assert.match(html, /<title/i, `${page} is missing title element`);
  }
});

test("all local HTML asset references point to existing files", () => {
  const assetPattern = /(?:href|src)=["']([^"']+)["']/gi;

  for (const page of requiredPages) {
    const html = fs.readFileSync(path.join(root, page), "utf8");
    let match;

    while ((match = assetPattern.exec(html)) !== null) {
      const reference = match[1];

      // Ignore external URLs, anchors, data URLs, and JavaScript URLs.
      if (
        reference.startsWith("http://") ||
        reference.startsWith("https://") ||
        reference.startsWith("#") ||
        reference.startsWith("data:") ||
        reference.startsWith("javascript:")
      ) {
        continue;
      }

      const cleanReference = reference.split("?")[0].split("#")[0];
      const referencedPath = path.join(root, cleanReference);

      assert.ok(
        fs.existsSync(referencedPath),
        `${page} references missing asset: ${reference}`
      );
    }
  }
});