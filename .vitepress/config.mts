import { defineConfig } from "vitepress"

// https://vitepress.dev/reference/site-config
export default defineConfig({
	srcDir: "src",

	title: "H",
	description: "A VitePress Site",
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		nav: [
			{ text: "Home", link: "/" },
			{ text: "HasiLang", link: "http://localhost:5174/" },
		],

		sidebar: [
			//   {
			//     text: 'Examples',
			//     items: [
			//       { text: 'Markdown Examples', link: '/markdown-examples' },
			//       { text: 'Runtime API Examples', link: '/api-examples' }
			//     ]
			//   }
		],

		socialLinks: [{ icon: "github", link: "https://github.com/Hasibix" }],
	},
})
