import BrokenImagesPage from "../../support/POM/hack2skill/BrokenImagePage";

describe("Broken Images", () => {
  const brokenImagesPage = new BrokenImagesPage();
  let totalImageCount = 0;
  let brokenImageCount = 0;

  beforeEach(() => {
    brokenImagesPage.visitPage();

    cy.get(".example img").then(($el) => {
      totalImageCount = $el.length;
    });
  });

  it("Should display total image count", () => {
    cy.log(`Total Image Links: ${totalImageCount}`);
    expect(totalImageCount).to.be.greaterThan(0);
  });

  it("Should check for broken images", () => {
    cy.get(".example img")
      .each(($el) => {
        cy.wrap($el)
          .should("have.attr", "src")
          .then((imageUrl) => {
            brokenImagesPage.checkImageStatus(imageUrl).then((response) => {
              if (![200, 304].includes(response.status)) {
                brokenImageCount++;
                cy.log(
                  `Broken Image Link: ${imageUrl} - ${response.statusText}`
                );
              }
            });
          });
      })
      .then(() => {
        cy.log(`Number of Broken Images: ${brokenImageCount}`);
      });
  });

  it("Should count broken images", () => {
    cy.log(`Number of Broken Images: ${brokenImageCount}`);
    expect(brokenImageCount).to.be.lte(totalImageCount);
  });

  it("Should log broken image details", () => {
    cy.get(".example img").each(($el) => {
      cy.wrap($el)
        .should("have.attr", "src")
        .then((imageUrl) => {
          brokenImagesPage.checkImageStatus(imageUrl).then((response) => {
            if (![200, 304].includes(response.status)) {
              cy.log(`Broken Image Link: ${imageUrl} - ${response.statusText}`);
            }
          });
        });
    });
  });
});
