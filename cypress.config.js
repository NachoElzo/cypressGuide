const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '7yp1qp',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    reporter: 'mochawesome',
    projectId: "hsw9ka",
  },
});
