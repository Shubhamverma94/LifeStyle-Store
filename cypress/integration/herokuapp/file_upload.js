/// <reference types="Cypress"/>
import "cypress-file-upload";
import FileUploadPage from "../../support/POM/hack2skill/FileUploadPage";

describe("File Uploader", () => {
  const fileUploadPage = new FileUploadPage();

  beforeEach(() => {
    fileUploadPage.visitPage();
  });

  it("Uploading File", () => {
    const filePath = "H2S.jpg";

    fileUploadPage.uploadFile(filePath);
    cy.screenshot("FileUpload");

    fileUploadPage.submitFile();

    fileUploadPage.getSuccessMessage();
    cy.screenshot("SuccessMessage");
  });
});
