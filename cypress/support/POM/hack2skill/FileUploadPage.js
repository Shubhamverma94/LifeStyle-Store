class FileUploadPage {
  visitPage() {
    cy.visit("upload");
  }

  uploadFile(filePath) {
    cy.fixture(filePath).then((fileContent) => {
      cy.get("#file-upload").attachFile({
        fileContent: fileContent.toString(),
        fileName: filePath,
        mimeType: "image/jpeg",
      });
    });
  }

  submitFile() {
    cy.get("#file-submit").click();
  }

  getSuccessMessage() {
    cy.get(".example h3").should("include.text", "File Uploaded!");
  }
}

export default FileUploadPage;
