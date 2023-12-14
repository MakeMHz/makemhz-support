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

  deploymentBranch: 'gh-pages', // The branch of the docs repo to deploy to
  trailingSlash: false, // Set this to true if you are using GitHub pages

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
      '@docusaurus/preset-classic',
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
          customCss: [
            require.resolve('./node_modules/modern-normalize/modern-normalize.css'),
            require.resolve('./node_modules/@ionic-internal/ionic-ds/dist/tokens/tokens.css'),
            require.resolve('./src/styles/custom.scss'),
          ]
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        { name: 'og:image', content: 'https://support.makemhz.com/img/social-card.jpg' },
        { name: 'twitter:image', content: 'https://support.makemhz.com/img/social-card.jpg' },
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          name: 'twitter:domain',
          content: 'ionicframework.com',
        },
        {
          name: 'twitter:site',
          content: '@makemhz',
        },
        {
          name: 'twitter:creator',
          content: 'makemhz',
        },
        {
          name: 'fb:page_id',
          content: '1375324939177729',
        },
        {
          name: 'og:type',
          content: 'website',
        },
        {
          name: 'og:site_name',
          content: 'MakeMHz - Support and Documentation',
        },
      ],

      // Replace with your project's social card
      image: 'img/social-card.jpg',
      navbar: {
        hideOnScroll: true,
        logo: {
          alt: 'MakeMHz Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'getting-started/overview',
            label: 'Documentation',
            position: 'left',
          },
          {
            type: 'search',
            position: 'right',
          },
          {
            label: 'Community',
            position: 'right',
            items: [
              {
                href: 'https://makemhz.com/blogs/news',
                label: 'Blog',
                target: '_blank',
                rel: null,
              },
              {
                href: 'https://twitter.com/makemhz',
                label: 'Twitter',
                target: '_blank',
                rel: null,
              },
              {
                href: 'https://discord.gg/9YcuDpY',
                label: 'Discord',
                target: '_blank',
                rel: null,
              },
            ],
            className: 'navbar__link--community',
          },
          {
            label: 'Support',
            position: 'right',
            items: [
              {
                href: 'https://makemhz.com/pages/contact-us',
                label: 'Customer Support',
                target: '_blank',
                rel: null,
              },
            ],
            className: 'navbar__link--support',
          },
          {
            type: 'html',
            position: 'right',
            value: '<div class="separator" aria-hidden></div>',
          },
          {
            type: 'localeDropdown',
            position: 'right',
            dropdownItemsBefore: [],
            dropdownItemsAfter: [
              {
                href: 'https://ionicframework.com/translate',
                label: 'Translate',
                target: '_blank',
                rel: null,
              },
            ],
            className: 'icon-link language navbar__item',
          },
          {
            href: 'https://twitter.com/makemhz',
            position: 'right',
            className: 'icon-link icon-link-mask icon-link-twitter',
            'aria-label': 'Twitter',
            target: '_blank',
          },
          {
            href: 'https://discord.gg/9YcuDpY',
            position: 'right',
            className: 'icon-link icon-link-mask icon-link-discord',
            'aria-label': 'Discord',
            target: '_blank',
          },
          {
            href: 'https://github.com/makemhz',
            position: 'right',
            className: 'icon-link icon-link-mask icon-link-github',
            'aria-label': 'GitHub repository',
            target: '_blank',
          },
        ],
      },

      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),

  plugins: [
    'docusaurus-plugin-sass',
  ],
};

module.exports = config;
