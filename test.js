import test from "node:test";
import assert from "node:assert";
import { JSDOM } from "jsdom";

test("app converts lowercase to uppercase", async () => {
  let { document } = await load("index.html");
  let input = document.querySelector("input");
  input.value = "hello world";
  let button = document.querySelector("button");
  button.click();
  let output = document.querySelector("output");
  assert.equal(output.textContent, "HELLO WORLD");
});

async function load(file) {
  let dom = await JSDOM.fromFile(file, {
    runScripts: "dangerously",
    resources: "usable",
  });
  return new Promise((resolve) => {
    dom.window.addEventListener("load", () => {
      resolve({
        window: dom.window,
        document: dom.window.document,
      });
    });
  });
}
