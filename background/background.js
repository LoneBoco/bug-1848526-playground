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

  await browser.bookmarks.create({
    parentId: folder.id,
    title: "⚫  Assassin's Creed Nexus comes out tomorrow and I see nothing about it? No reviews. No gamplay. No nothing. For a big release like this it feels very weird.",
    url: "https://mozilla.org"
  });

  let children = [];

  for (let i = 0; i < 20; ++i) {
    children[i] = await browser.bookmarks.create({
      parentId: folder.id,
      title: "Example child",
      url: "https://mozilla.org",
    });
  }

  console.log(folder);
  //console.log(node);

  setInterval(function() {
    children.forEach((c) => {
      let length = Math.floor(Math.random() * 80);
      let title = "a".repeat(length);
      browser.bookmarks.update(c.id, { title });
    });
  }, 10000);
})();
