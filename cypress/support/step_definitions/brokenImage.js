import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import BrokenImagesPage from "../POM-BDD/hack2skill/BrokenImageBDD";

const brokenImagesPage = new BrokenImagesPage();
let totalImageCount = 0;
let brokenImageCount = 0;

Given("I am on the Broken Images page", function () {
  brokenImagesPage.visitPage();
});

When("I check for broken images", function () {
  brokenImagesPage.countBrokenImages().then((count) => {
    brokenImageCount = count;
  });
});

Then("the number of broken images should be counted correctly", function () {
  expect(brokenImageCount).to.be.greaterThan(0);
  cy.log(`Number of Broken Images: ${brokenImageCount}`);
});

Then("the details of each broken image should be logged", function () {
  return brokenImagesPage.logBrokenImages().then((brokenImageCounter) => {
    expect(brokenImageCounter).to.equal(brokenImageCount);
    cy.log(`Number of Broken Images: ${brokenImageCounter}`);
  });
});



Then("the total number of image links should be displayed correctly", function () {
  cy.get(".example img").then(($el) => {
    totalImageCount = $el.length;

    expect(totalImageCount).to.be.gte(brokenImageCount);
    cy.log(`Total Image Links: ${totalImageCount}`);
  });
});
