// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: 'windmill.dev',
	url: 'https://windmill.dev',
	baseUrl: '/',
	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',
	favicon: 'img/logo.svg',
	organizationName: 'windmill', // Usually your GitHub org/user name.
	projectName: 'windmill',
	themes: [
		[
			require.resolve("@easyops-cn/docusaurus-search-local"),
			{
				hashed: true,
				docsDir: 'docs',
				docsRouteBasePath: '/docs',
				indexDocs: true,
				indexBlog: false,
				indexPages: false,
				highlightSearchTermsOnTargetPage: false
			},
		],
	],
	plugins: [
		async function myPlugin(context, options)
		{
			return {
				name: "docusaurus-tailwindcss",
				configurePostCss(postcssOptions)
				{
					postcssOptions.plugins.push(require("tailwindcss"));
					postcssOptions.plugins.push(require("autoprefixer"));
					return postcssOptions;
				},
			};
		},
	],
	presets: [
		[
			'classic',
			// ... other options
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					sidebarPath: require.resolve('./sidebars.js')
				},
				blog: {
					showReadingTime: true
				},
				theme: {
					customCss: require.resolve('./src/css/custom.css')
				}
			})
		]
	],
	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			navbar: {
				title: 'windmill.dev',
				logo: {
					alt: 'windmill.dev logo',
					src: 'img/windmill.svg'
				},
				items: [
					{
						type: 'doc',
						docId: 'intro',
						position: 'left',
						label: 'Docs'
					},
					{
						to: 'https://doc.deno.land/https://deno.land/x/windmill/index.ts',
						position: 'left',
						label: 'Typescript (Deno) Client',

					},
					{
						href: '/python',
						position: 'left',
						label: 'Python Client'
					},
					{
						href: '/docs/Blueprints',
						position: 'left',
						label: 'Blueprints & Examples'
					},
					{
						href: '/hiring',
						position: 'right',
						label: 'Join us - Hiring'
					},
					// { to: '/blog', label: 'Blog', position: 'left' },
					{
						href: 'https://github.com/windmill-labs/windmill',
						className: 'header-github-link',
						'aria-label': 'GitHub repository',
						position: 'right'
					}
				]
			},
			footer: {
				style: 'dark',
				links: [],
				copyright: `&copy; 2022 windmill-labs by @rubenfiszel`
			},
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme
			},
			colorMode: {
				defaultMode: 'light',
				disableSwitch: true,
				respectPrefersColorScheme: false,
			},
		})
};

module.exports = config;
