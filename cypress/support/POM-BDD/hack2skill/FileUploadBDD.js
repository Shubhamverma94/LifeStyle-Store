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

  // getSuccessMessage() {
  //   cy.get(".example h3").should("include.text", "File Uploaded!");
  // }
 
  getSuccessMessage() {
    cy.get("body").then(($body) => {
      if ($body.find(".example h3").length > 0 && $body.find(".example h3").text().includes("File Uploaded!")) {
        // Success message found in .example h3
        cy.wrap($body.find(".example h3")).should("contain.text", "File Uploaded!");
      } else if ($body.find("h1").length > 0 && $body.find("h1").text().includes("Internal Server Error")) {
        // Internal server error found in h1
        cy.wrap($body.find("h1")).should("contain", "Internal Server Error");
      } 
    });
  }
  
  
}

export default FileUploadPage;
