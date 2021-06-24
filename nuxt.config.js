export default {
  /*
   ** Headers of the page
   ** Doc: https://vue-meta.nuxtjs.org/api/#metainfo-properties
   */
  head: {
    titleTemplate: (chunk) => {
      return chunk ? `${chunk} on When Flag Clicked` : "When Flag Clicked";
    },
    script: [
      {
        src: "https://scratchblocks.github.io/js/scratchblocks-v3.5.2-min.js",
      },
    ],
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Tutorials by scratchers, for scratchers",
      },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "apple-touch-icon",
        sizes: "144x144",
        href: "/assets/apple-touch-icon-ipad-retina-152x152.png",
      },
      {
        rel: "apple-touch-icon",
        sizes: "114x114",
        href: "/assets/apple-touch-icon-iphone-retina-120x120.png",
      },
      {
        rel: "apple-touch-icon",
        sizes: "60x60",
        href: "/assets/apple-touch-icon-ipad-76x76.png",
      },
    ],
  },

  components: true,

  /*
   ** Nuxt.js modules
   ** Doc: https://modules.nuxtjs.org
   */
  modules: ["@nuxtjs/markdownit"],

  /*
   ** Global CSS
   ** Doc: https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-css
   */
  css: [],

  /*
   ** Plugins to load before mounting the App
   ** Doc: https://nuxtjs.org/docs/2.x/directory-structure/plugins
   */
  plugins: ["~/plugins/auth.js"],

  env: {
    backendURL: process.env.backendURL || "https://api.whenflagclicked.org",
  },

  loading: {
    color: "white",
    height: "4px",
  },
  buildModules: ["@nuxtjs/color-mode"],
  markdownit: {
    preset: "default",
    linkify: true,
    breaks: true,
    use: [],
    runtime: true,
  },
};