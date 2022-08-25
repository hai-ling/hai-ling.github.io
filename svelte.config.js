// svelte.config.js
import adapter from 'svelte-adapter-github';

export default {
	kit: {
		adapter: adapter({
			// default options are shown
			pages: 'docs',
			assets: 'docs',
			domain: null,
			jekyll: false,
			fallback: null,
			precompress: false
		})
	}
};