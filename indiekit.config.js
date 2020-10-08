import {Indiekit} from '@indiekit/indiekit';
import {JekyllPreset} from '@indiekit/preset-jekyll';
import {GithubStore} from '@indiekit/store-github';

// Create a new indiekit instance
const indiekit = new Indiekit();

// Configure GitHub content store
const github = new GithubStore({
  user: 'alienlebarge', // Your username on GitHub
  repo: 'alienlebargech-v3', // Repository files will be saved to
  branch: 'main', // Branch to publish to
  token: process.env.GITHUB_TOKEN // GitHub personal access token
});

// Configure Jekyll publication preset
const jekyll = new JekyllPreset();

// Configure publication
indiekit.set('publication.me', 'https://alienlebarge.ch');
indiekit.set('publication.preset', jekyll);
indiekit.set('publication.store', github);
indiekit.set('publication.timeZone', 'Europe/Zurich');

// Create a server
const server = indiekit.server();

// Export server
export default server;
