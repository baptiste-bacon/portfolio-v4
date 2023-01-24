export default defineNuxtConfig({
  modules: ["@nuxtjs/prismic"],
  css: ["~/assets/css/main.scss"],
  prismic: {
    endpoint: "https://baptiste-bacon-portfolio-v3.cdn.prismic.io/api/v2",
  },
});
