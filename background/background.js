"use strict";

// See: https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Work_with_the_Bookmarks_API
(async function() {
  let folder = await browser.bookmarks.create({
    title: "Example",
  });

  /*
  let _node1 = await browser.bookmarks.create({
    parentId: folder.id,
    title: "a".repeat(200),
    url: "https://mozilla.org",
  });
  */

  let node = await browser.bookmarks.create({
    parentId: folder.id,
    title: "Example child",
    url: "https://mozilla.org",
  });

  console.log(folder);
  console.log(node);

  setInterval(function() {
    let length = Math.floor(Math.random() * 200);
    let title = "a".repeat(length);
    browser.bookmarks.update(node.id, { title });
  }, 1000);
})();
