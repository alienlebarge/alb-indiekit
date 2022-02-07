import {Indiekit} from '@indiekit/indiekit';
import {JekyllPreset} from '@indiekit/preset-jekyll';
import {GithubStore} from '@indiekit/store-github';
import {MastodonSyndicator} from '@indiekit/syndicator-mastodon';
import {TwitterSyndicator} from '@indiekit/syndicator-twitter';

// Create a new indiekit instance
const indiekit = new Indiekit();

// Configure content store
const github = new GithubStore({
  user: 'alienlebarge', // Your username on GitHub
  repo: 'alienlebargech-v3', // Repository files will be saved to
  branch: 'master', // Branch to publish to
  token: process.env.GITHUB_TOKEN // GitHub personal access token
});

// Configure Mastodon syndicator
const mastodon = new MastodonSyndicator({
  checked: true,
  forced: true,
  url: 'https://mastodon.alienlebarge.ch',
  user: 'alienlebarge'
});

// Configure Twitter syndicator
const twitter = new TwitterSyndicator({
  checked: true,
  forced: true,
  user: 'alienlebarge'
});

// Configure Jekyll publication preset
const jekyll = new JekyllPreset();

// Override presets
indiekit.set('publication.postTypes', [
  {
    type: 'article',
    name: 'Article',
    post: {
      path: 'src/_content/articles/{yyyy}-{MM}-{dd}-{slug}.md',
      url: '{yyyy}/{MM}/{slug}'
    },
    media: {
      path: 'src/media/articles/{yyyy}/{MM}/{dd}/{slug}/{filename}',
      url: 'media/articles/{yyyy}/{MM}/{dd}/{slug}/{filename}'
    }
  },
  {
    type: 'note',
    name: 'Note',
    post: {
      path: 'src/_content/notes/{yyyy}{MM}{dd}{HH}{mm}{ss}.md',
      url: 'notes/{yyyy}{MM}{dd}{HH}{mm}{ss}'
    }
  },
  {
      type: 'reply',
      name: 'Reply',
      post: {
        path: 'src/_content/replies/{yyyy}{MM}{dd}{HH}{mm}{ss}.md',
        url: 'replies/{yyyy}{MM}{dd}{HH}{mm}{ss}'
      }
    },
  {
    type: 'photo',
    name: 'Photo',
    post: {
      path: 'src/_content/photos/{yyyy}-{MM}-{dd}-{slug}.md',
      url: 'photos/{yyyy}/{MM}/{slug}'
    },
    media: {
      path: 'src/media/photos/{yyyy}/{MM}/{dd}/{filename}',
      url: 'media/photos/{yyyy}/{MM}/{dd}/{filename}'
    }
  },
  {
    type: 'bookmark',
    name: 'Bookmark',
    post: {
      path: 'src/_content/bookmarks/{yyyy}-{MM}-{dd}-{slug}.md',
      url: 'bookmarks/{yyyy}/{MM}/{slug}'
    }
  },
  {
    type: 'like',
    name: 'Like',
    post: {
      path: 'src/_content/likes/{yyyy}-{MM}-{dd}-{slug}.md',
      url: 'likes/{yyyy}/{MM}/{dd}/{slug}'
    }
  }
]);

// Application settings
indiekit.set('application.mongodbUrl', process.env.MONGODB_URL);

// Configure publication
indiekit.set('publication.categories', 'https://alienlebarge.ch/archives/categories.json');
indiekit.set('publication.me', 'https://alienlebarge.ch');
indiekit.set('publication.preset', jekyll);
indiekit.set('publication.store', github);
indiekit.set('publication.syndicationTargets', [
  mastodon,
  twitter
]);
indiekit.set('publication.timeZone', 'Europe/Zurich');

// Create a server
const server = indiekit.server();

// Export server
export default server;
