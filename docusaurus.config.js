module.exports = {
  title: 'Durham Foodbank Stock Take',
  tagline: 'Group 12',
  url: 'https://se-docs.now.sh',
  baseUrl: '/',
  favicon: 'https://durham.foodbank.org.uk/wp-content/uploads/sites/153/2016/05/Durham-Three-Colour-logo.png',
  organizationName: 'samrobbins85', // Usually your GitHub org/user name.
  projectName: 'se-docs', // Usually your repo name.
  themeConfig: {
          algolia: {
      apiKey: '215f825d24e083814163683edcef6754',
      indexName: 'durham-foodbank-stock-take',
      algoliaOptions: {}, // Optional, if provided by Algolia
    },
    navbar: {
      title: '',
      logo: {
        alt: 'Foodbank',
        src: 'https://durham.foodbank.org.uk/wp-content/uploads/sites/153/2016/05/Durham-Three-Colour-logo.png',
      },
      links: [
        {to: 'docs/gettingstarted', label: 'Docs', position: 'left'},
        // {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/samrobbins85/se-docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      // links: [
      //   {
      //     title: 'Docs',
      //     items: [
      //       {
      //         label: 'Style Guide',
      //         to: 'docs/doc1',
      //       },
      //       {
      //         label: 'Second Doc',
      //         to: 'docs/doc2',
      //       },
      //     ],
      //   },
      //   {
      //     title: 'Community',
      //     items: [
      //       {
      //         label: 'Stack Overflow',
      //         href: 'https://stackoverflow.com/questions/tagged/docusaurus',
      //       },
      //       {
      //         label: 'Discord',
      //         href: 'https://discordapp.com/invite/docusaurus',
      //       },
      //     ],
      //   },
      //   {
      //     title: 'Social',
      //     items: [
      //       {
      //         label: 'Blog',
      //         to: 'blog',
      //       },
      //       {
      //         label: 'GitHub',
      //         href: 'https://github.com/facebook/docusaurus',
      //       },
      //       {
      //         label: 'Twitter',
      //         href: 'https://twitter.com/docusaurus',
      //       },
      //     ],
      //   },
      // ],
      copyright: `Copyright © ${new Date().getFullYear()} SE Group 12. Built with Docusaurus.`,
    },
  },
  scripts: ["https://identity.netlify.com/v1/netlify-identity-widget.js"],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/samrobbins85/se-docs/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
