const path = require("path");

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
            @import "@/scss/toolbox/_variables.scss";
            @import "@/scss/mixins/_responsive-breakpoints.scss";
            @import "@/scss/mixins/_prefixes.scss";
            @import "@/scss/mixins/_fluid-props.scss";
            @import "@/scss/mixins/_flex-props.scss";
            @import "@/scss/mixins/_font-sizes.scss";
            @import "@/scss/mixins/_layout.scss";
          `
      }
    }
  },
  outputDir: path.resolve(__dirname, "./dist/"),
};
