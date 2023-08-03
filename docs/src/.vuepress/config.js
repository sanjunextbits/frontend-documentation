const { description } = require("../../package");

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: "Frontend Documentation",
  base: "/frontend-documentation/",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [

    ['meta', { name: 'theme-color', content: '#454444' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'icon', href: '/favicon.png' }],
    ["script",{src: "/scroll-fix.js", type: "text/javascript"}] 
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    logo: "/logo.png",
    editLinks: true,
    editLinkText: 'Help us improve this page!',
    docsDir: "docs/src",
    lastUpdated: true,
    nav: [
      {
        text: "Design Tools",
        link: "/design-tools/",
      },
      {
        text: "Web Design",
        link: "/web/",
      },
      {
        text: "Platforms",
        link: "/platforms/",
      },
      {
        text: "Best Practices",
        link: "/best-practices/",
      },
      {
        text: "Related Topics",
        link: "/related-topics/",
      },
      {
        text: "Certifications",
        link: "/certifications",
      },
    ],
    sidebar: {
      "/design-tools/": [
        {
          title: "Design Tools",
          collapsable: false,
          children: [
            'photoshop',
            'figma'
          ]
        },
      ],
      "/web/": [
        {
          title: "Web Design",
          collapsable: false,
          children: [
            '',
            'html',
            'css',
            'javaScript'
          ]
        },
      ],
      "/platforms/": [
        {
          title: "Platforms",
          collapsable: false,
        }
      ],
      "/best-practices/": [
        {
          title: "Best Practices",
          collapsable: false
        }
      ],
      "/related-topics/": [
        {
          title: "Related Topics",
          collapsable: false
        }
      ],
      "/certifications/": [
        {
          title: "Certifications",
          collapsable: false,
        }
      ],
    },
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: ["@vuepress/plugin-back-to-top", "@vuepress/plugin-medium-zoom", ['vuepress-plugin-code-copy', {align: 'top', color: '#fff'}]]
};


