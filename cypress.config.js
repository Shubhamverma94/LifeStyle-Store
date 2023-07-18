const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default
async function setupNodeEvents(on, config) {
  screenshotOnRunFailure=true; //FOR HTML REPORTS
  require('cypress-mochawesome-reporter/plugin')(on);  //FOR HTML REPORTS
  on('file:preprocessor', cucumber())
  // implement node event listeners here
  return config;
}
module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',     //FOR GENERATING HTML REPORT
  e2e: {
    setupNodeEvents,
    //you have to provide the path of the test script
    //will be stored as specPattern
    specPattern: 'cypress/integration/herokuapp/*.js',
    // specPattern: 'cypress/UAT/features/*.{js,feature}',
    baseUrl:"http://the-internet.herokuapp.com/",
    env:{
      broken_images: "http://the-internet.herokuapp.com/broken_images",
      upload: "https://the-internet.herokuapp.com/upload"
    }
  },
  chromeWebSecurity: false
});