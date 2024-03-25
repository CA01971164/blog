// init-mongo.js
db = db.getSiblingDB("blog");
db.blogs.insertMany([
  {
    title: "Blog Post 1",
    summary: "This is the summary of the first post.",
    fullText: "backend.md",
  },
  {
    title: "Blog Post 2",
    summary: "This is the summary of the second post.",
    fullText: "cors.md",
  },
  {
    title: "Blog Post 3",
    summary: "This is the summary of the third post.",
    fullText: "基本設計.md",
  },
]);
