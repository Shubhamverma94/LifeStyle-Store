// const { defineConfig } = require("cypress");
// const cucumber = require('cypress-cucumber-preprocessor').default;

// async function setupNodeEvents(on, config) {
//   on('file:preprocessor', cucumber())
//   // implement node event listeners here
//   //This is required for the preprocessor to be generate json, where my test files are, if it  want to run file, plugins
//   return config;
// }
// module.exports = defineConfig({
//   e2e: {
//     setupNodeEvents,
//     //you have to prpvide the path of the test script// will be  stored as specPattern
//    //have to use this when running normal file of "example"
//     // specPattern: "cypress/integration/example/*.js",
//     //have to use this  when using BDD
//     specPattern: "cypress/UAT/features/*.{js,feature}",
//     // baseUrl: "---enter url here---", //use cy.visit("/") in file instead of whole website link again and again
//     baseUrl: "https://rahulshettyacademy.com/",
//     env: {
//       OrangeHRM: "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
//       RahulShetty:"https://rahulshettyacademy.com/",
//     }
//   },
//   //multiple browser testing
//   chromeWebSecurity: false,
  
// });
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
    //you have to provide the path of the test script //will be stored as specPattern
    // specPattern: 'cypress/integration/example/*.js',
    specPattern: 'cypress/UAT/features/*.{js,feature}',
    baseUrl:"https://rahulshettyacademy.com/",
    env:{
      OrangeHRM:"https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
      RahulShetty:"https://rahulshettyacademy.com/"
    }
  },
  chromeWebSecurity: false
});