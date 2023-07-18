class BrokenImagesPage {
  visitPage() {
    cy.visit("http://the-internet.herokuapp.com/broken_images");
  }

  checkImageStatus(imageUrl) {
    return cy.request({
      url: imageUrl,
      failOnStatusCode: false,
    });
  }

  countBrokenImages() {
    let brokenImageCount = 0;

    return cy.get(".example img").each(($el) => {
      const imageUrl = $el.prop("src");

      return this.checkImageStatus(imageUrl).then((response) => {
        if (![200, 304].includes(response.status)) {
          brokenImageCount++;
          cy.log(`Broken Image Link: ${imageUrl} - Status: ${response.status} - ${response.statusText}`);
        }
      });
    }).then(() => {
      return brokenImageCount;
    });
  }

  logBrokenImages() {
    let brokenImageCounter = 0;

    return cy.get(".example img").each(($el) => {
      const imageUrl = $el.prop("src");

      return cy.request({
        url: imageUrl,
        failOnStatusCode: false,
      }).then((response) => {
        if (![200, 304].includes(response.status)) {
          const statusText = response.statusText;
          cy.log(`Broken Image Link: ${imageUrl} - Status: ${response.status} - ${statusText}`);
          brokenImageCounter++;
        }
      });
    }).then(() => {
      return brokenImageCounter;
    });
  }
}

export default BrokenImagesPage;
