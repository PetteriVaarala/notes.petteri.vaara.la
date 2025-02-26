// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://petterivaarala.github.io',
	base: 'notes.petteri.vaara.la',
	integrations: [
		starlight({
			title: 'notes.petteri.vaara.la',
			social: {
				github: 'https://github.com/PetteriVaarala/Notes',
			},
			sidebar: [
				{
					label: 'Notes',
					// Autogenerate a group of links for the 'constellations' directory.
					autogenerate: { directory: 'Notes' },
				},
			],
			components: {
				PageTitle: './src/components/PageTitle.astro',
			},
		}),
	],
});
