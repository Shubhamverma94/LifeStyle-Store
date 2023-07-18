import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import FileUploadPage from "../../support/POM-BDD/hack2skill/FileUploadBDD";

const fileUploadPage = new FileUploadPage();

Given("I am on the file upload page", () => {
  fileUploadPage.visitPage();
});

When("I upload the file {string}", (filePath) => {
  fileUploadPage.uploadFile(filePath);
});

And("I submit the file", () => {
  fileUploadPage.submitFile();
});

Then("the file should be uploaded successfully", () => {
    fileUploadPage.getSuccessMessage();
  });
  
    
    
    

