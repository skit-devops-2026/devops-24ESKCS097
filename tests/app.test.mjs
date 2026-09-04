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
