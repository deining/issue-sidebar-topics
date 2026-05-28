// @ts-check
import starlight from '@astrojs/starlight'
import { defineConfig } from 'astro/config';
import starlightSidebarTopics from 'starlight-sidebar-topics'

// https://astro.build/config
export default defineConfig({
	  integrations: [
    starlight({
      plugins: [
        starlightSidebarTopics(
          [
            {
              label: 'Documentation',
              link: '/docs/getting-started/',
              icon: 'open-book',
              items: [
                { label: 'Guides', autogenerate: { directory: 'docs/guides' } },
              ],
            },
          ],
        ),
      ],
      title: 'Starlight Sidebar Topics',
    }),
  ],
});
