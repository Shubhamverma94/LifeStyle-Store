/// <reference types="Cypress"/>
/// <reference types="@cypress/xpath"/>

class BrokenImagesPage {
    visitPage() {
      cy.visit("broken_images");
    }
  
    getTotalImageCount() {
      return cy.get(".example img").its("length");
    }
  
    getImageUrl(index) {
      return cy.get(`.example img:eq(${index})`).invoke("prop", "src");
    }
  
    checkImageStatus(imageUrl) {
      return cy.request({
        url: imageUrl,
        failOnStatusCode: false,
      });
    }
  }
  
  export default BrokenImagesPage;
  