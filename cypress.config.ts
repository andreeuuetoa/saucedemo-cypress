import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    experimentalRunAllSpecs: true,
    specPattern: "cypress/ui-tests/**/*.cy.{ts,tsx}",
    baseUrl: "https://www.saucedemo.com/"
  },
});
