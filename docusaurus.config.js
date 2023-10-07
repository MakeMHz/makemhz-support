// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'MakeMHz Support',
  tagline: 'The future of retro begins here...',
  favicon: 'img/favicon.png',

  // Set the production url of your site here
  url: 'https://support.makemhz.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'makemhz', // Usually your GitHub org/user name.
  projectName: 'makemhz-support', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/makemhz/makemhz-support/tree/main/',
          routeBasePath: '/', // Serve the docs at the site's root instead of /docs/
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/social-card.jpg',
      navbar: {
        title: 'MakeMHz',
        logo: {
          alt: 'MakeMHz Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            href: 'https://github.com/makemhz/makemhz-support',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/9YcuDpY',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/makemhz',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Store',
                to: 'https://makemhz.com',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/makemhz/makemhz-support',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} MakeMHz LLC. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
