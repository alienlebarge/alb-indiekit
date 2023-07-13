module.exports = {
  application: {
    url: "https://indiekit.alienlebarge.ch",
    mongodbUrl: process.env.MONGO_URL,
    timeZone: "Europe/Zurich",
  },
  plugins: [
    "@indiekit/preset-jekyll",
    "@indiekit/store-github",
    "@indiekit/syndicator-mastodon",
    "@indiekit/syndicator-twitter",
  ],
  publication: {
    categories: "https://alienlebarge.ch/archives/categories.json",
    locale: "fr-CH",
    me: "https://alienlebarge.ch",
    postTypes: [
      {
        type: "article",
        name: "Article",
        post: {
          path: "src/articles/{yyyy}/{MM}/{slug}/index.md",
          url: "articles/{yyyy}/{MM}/{slug}",
        },
        media: {
          path: "src/articles/{yyyy}/{MM}/{slug}/{filename}",
          url: "media/articles/{yyyy}/{MM}/{slug}/{filename}",
        },
      },
      {
        type: "note",
        name: "Note",
        post: {
          path: "src/notes/{yyyy}{MM}{dd}{HH}{mm}{ss}.md",
          url: "notes/{yyyy}{MM}{dd}{HH}{mm}{ss}",
        },
      },
      {
        type: "photo",
        name: "Photo",
        post: {
          path: "src/photos/{yyyy}-{MM}-{dd}-{slug}.md",
          url: "photos/{yyyy}/{MM}/{slug}",
        },
        media: {
          path: "src/media/photos/{yyyy}/{MM}/{dd}/{filename}",
          url: "media/photos/{yyyy}/{MM}/{dd}/{filename}",
        },
      },
      {
        type: "bookmark",
        name: "Bookmark",
        post: {
          path: "src/bookmarks/{yyyy}-{MM}-{dd}-{slug}.md",
          url: "bookmarks/{yyyy}/{MM}/{slug}",
        },
      },
      {
        type: "reply",
        name: "Reply",
        post: {
          path: "src/replies/{yyyy}{MM}{dd}{HH}{mm}{ss}.md",
          url: "replies/{yyyy}{MM}{dd}{HH}{mm}{ss}",
        },
      },
      {
        type: "like",
        name: "Like",
        post: {
          path: "src/likes/{yyyy}-{MM}-{dd}-{slug}.md",
          url: "likes/{slug}",
        },
      },
      {
        type: "repost",
        name: "Repost",
        post: {
          path: "src/reposts/{yyyy}-{MM}-{dd}-{slug}.md",
          url: "reposts/{slug}",
        },
      },
    ],
    slugSeparator: "-",
  },
  "@indiekit/store-github": {
    user: "alienlebarge",
    repo: "alienlebargech-v3",
  },
  "@indiekit/syndicator-mastodon": {
    checked: true,
    forced: true,
    url: "https://social.lol",
    user: "alienlebarge",
  },
  "@indiekit/syndicator-twitter": {
    checked: true,
    forced: true,
    user: "alienlebarge",
  },
};
