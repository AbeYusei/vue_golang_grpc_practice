import { Clusters } from ".";

const host = "https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue";

export const clusters: Clusters = {
  CliPlugins: {
    title: "Installed CLI Plugins!",
    links: [
      {
        value: "babel",
        href: `${host}/cli-plugin-babel`
      },
      {
        value: "typescript",
        href: `${host}/cli-plugin-typescript`
      },
      {
        value: "pwa",
        href: `${host}/cli-plugin-pwa`
      },
      {
        value: "unit-jest",
        href: `${host}/cli-plugin-unit-jest`
      },
      {
        value: "e2e-cypress",
        href: `${host}/cli-plugin-e2e-cypress`
      }
    ]
  },

  EssentialLinks: {
    title: "Essential Links",
    links: [
      { value: "Core Docs", href: "https://vuejs.org" },
      { value: "Forum", href: "https://forum.vuejs.org" },
      { value: "Community Chat", href: "https://chat.vuejs.org" },
      { value: "Twitter", href: "https://twitter.com/vuejs" },
      { value: "News", href: "https://news.vuejs.org" }
    ]
  },

  Ecosystem: {
    title: "Ecosystem",
    links: [
      { href: "https://router.vuejs.org", value: "vue-router" },
      { href: "https://vuex.vuejs.org", value: "vuex" },
      {
        href: "https://github.com/vuejs/vue-devtools#vue-devtools",
        value: "vue-devtools"
      },
      { href: "https://vue-loader.vuejs.org", value: "vue-loader" },
      { href: "https://github.com/vuejs/awesome-vue", value: "awesome-vue" }
    ]
  }
};
