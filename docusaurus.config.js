// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
    future: {
    experimental_faster: false,
  },
  title: 'Ethernet IP Documentation Hub',
  tagline: 'Configure, Simulate, and Verify FPGA Ethernet IP',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://sujatha1402-star.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/docs-as-code-session/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'sujatha1402-star', // Usually your GitHub org/user name.
  projectName: 'docs-as-code-session', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/sujatha1402-star/docs-as-code-session/tree/main/',
        },
        
blog: false,

        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Ethernet IP Docs',
        logo: {
          alt: 'Ethernet IP Documentation Hub Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {
            href: 'https://github.com/sujatha1402-star/docs-as-code-session',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          
{
  title: 'Getting Started',
  items: [
    {
      label: 'Ethernet IP Overview',
      to: '/docs/intro',
    },
    {
      label: 'Device Support',
      to: '/docs/getting-started/device-support',
    },
    {
      label: 'Prerequisites',
      to: '/docs/getting-started/prerequisites',
    },
  ],
},


{
  title: 'User Guides',
  items: [
    {
      label: 'Configure Ethernet IP',
      to: '/docs/configuration/ip-configuration',
    },
    {
      label: 'Installation',
      to: '/docs/getting-started/installation',
    },
  ],
},

          
{
  title: 'Resources',
  items: [
    {
      label: 'Reference Documentation',
      to: '/docs/intro',
    },
    {
      label: 'GitHub Repository',
      href: 'https://github.com/sujatha1402-star/docs-as-code-session',
    },
  ],
},

        ],
        copyright: `Copyright © ${new Date().getFullYear()} Ethernet IP Documentation Hub. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
