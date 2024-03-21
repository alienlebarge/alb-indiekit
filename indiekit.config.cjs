module.exports = {
  application: {
    url: "https://indiekit.alienlebarge.ch",
    mongodbUrl: process.env.MONGO_URL,
    timeZone: "Europe/Zurich",
  },
  plugins: [
    "@indiekit/preset-jekyll",
    "@indiekit/store-github",
    "@indiekit/syndicator-internet-archive",
    "@indiekit/syndicator-mastodon",
  ],
  publication: {
    categories: "https://alienlebarge.ch/archives/categories.json",
    locale: "fr-CH",
    me: "https://alienlebarge.ch",
    postTypes: {
      article: {
        post: {
          name: "Article",
          path: "src/articles/{yyyy}/{MM}/{slug}/index.md",
          url: "articles/{yyyy}/{MM}/{slug}",
        },
        media: {
          path: "src/articles/{yyyy}/{MM}/{slug}/{filename}",
          url: "media/articles/{yyyy}/{MM}/{slug}/{filename}",
        },
      },
      note: {
        post: {
          name: "Note",
          path: "src/notes/{yyyy}{MM}{dd}{HH}{mm}{ss}.md",
          url: "notes/{yyyy}{MM}{dd}{HH}{mm}{ss}",
        },
      },
      photo: {
        post: {
          name: "Photo",
          path: "src/photos/{yyyy}-{MM}-{dd}-{slug}.md",
          url: "photos/{yyyy}/{MM}/{slug}",
        },
        media: {
          path: "src/media/photos/{yyyy}/{MM}/{dd}/{filename}",
          url: "media/photos/{yyyy}/{MM}/{dd}/{filename}",
        },
      },
      bookmark: {
        post: {
          name: "Bookmark",
          path: "src/bookmarks/{yyyy}-{MM}-{dd}-{slug}.md",
          url: "bookmarks/{yyyy}/{MM}/{slug}",
        },
      },
      reply: {
        post: {
          name: "Reply",
          path: "src/replies/{yyyy}{MM}{dd}{HH}{mm}{ss}.md",
          url: "replies/{yyyy}{MM}{dd}{HH}{mm}{ss}",
        },
      },
      like: {
        post: {
          name: "Like",
          path: "src/likes/{yyyy}-{MM}-{dd}-{slug}.md",
          url: "likes/{slug}",
        },
      },
      repost: {
        post: {
          name: "Repost",
          path: "src/reposts/{yyyy}-{MM}-{dd}-{slug}.md",
          url: "reposts/{slug}",
        },
      },
    },
    slugSeparator: "-",
  },
  "@indiekit/store-github": {
    user: "alienlebarge",
    repo: "alienlebargech-v3",
  },
  "@indiekit/syndicator-mastodon": {
    checked: true,
    forced: false,
    url: "https://social.lol",
    user: "alienlebarge",
  },
};
