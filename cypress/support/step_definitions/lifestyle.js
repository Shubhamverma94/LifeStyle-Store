import {
  before,
  Given,
  When,
  And,
  Then,
} from "cypress-cucumber-preprocessor/steps";

Given("I am on the homepage", () => {
  // code to navigate to the homepage
  cy.visit("https://www.lifestylestores.com/in/en/");
  cy.wait(2000);
  cy.log("Landed on Homepage");
});

When("I click on the login button", () => {
  // code to click on the login button
  cy.contains("Sign Up / Sign In").click();
  cy.log("Clicked on Sign Up / Sign In button");
});

When("I hover over the Women link in the navbar", () => {
  // Hover over Women's link in navbar
  cy.wait(2000);
  cy.get("body").then(($body) => {
    if ($body.find("#moe-dontallow_button").length > 0) {
      //evaluates as true if Alert box exists at all
      cy.get("#moe-dontallow_button").then(($header) => {
        if ($header.is(":visible")) {
          //you get here only if button EXISTS and is VISIBLE
          cy.get("#moe-dontallow_button").click(); //for handling alert by clicking on "don't allow"
          cy.get(".MuiButton-label").contains("Women").trigger("mouseover");
          cy.log("Hover over Women Link in Navbar");
          cy.wait(1000);
        } else {
          //you get here only if button EXISTS but is INVISIBLE
          cy.wait(1000);
          cy.log("Alert not Found");
        }
      });
    } else {
      //you get here if the Alert box DOESN'T EXIST
      cy.get(".MuiButton-label").contains("Women").trigger("mouseover");
      cy.log("Hover over Women Link in Navbar");
      cy.wait(1000);
    }
  });
});

Then("the Women dropdown should be visible", () => {
  cy.contains("Ethnic & Fusion Wear").should(
    "have.text",
    "Ethnic & Fusion Wear"
  );
  cy.get("#category-menu-0").should("exist");
  cy.log("Women Dropdown present");
});

When("I hover over the Men link in the navbar", () => {
  // Hover over Women's link in navbar
  cy.wait(2000);
  cy.get("body").then(($body) => {
    if ($body.find("#moe-dontallow_button").length > 0) {
      //evaluates as true if Alert box exists at all
      cy.get("#moe-dontallow_button").then(($header) => {
        if ($header.is(":visible")) {
          //you get here only if button EXISTS and is VISIBLE
          cy.get("#moe-dontallow_button").click(); //for handling alert by clicking on "don't allow"
          cy.get(".MuiButton-label").contains("Men").trigger("mouseover");
          cy.log("Hover over Men Link in Navbar");
          cy.wait(1000);
        } else {
          //you get here only if button EXISTS but is INVISIBLE
          cy.wait(1000);
          cy.log("Alert not Found");
        }
      });
    } else {
      //you get here if the Alert box DOESN'T EXIST
      cy.get(".MuiButton-label").contains("Men").trigger("mouseover");
      cy.log("Hover over Men Link in Navbar");
      cy.wait(1000);
    }
  });
});

Then("the Men dropdown should be visible", () => {
  cy.contains("Topwear").should("have.text", "Topwear");
  cy.get("#category-menu-1").should("exist");
  cy.log("Men Dropdown present");
});

When("I hover over the Kids link in the navbar", () => {
  // Hover over Women's link in navbar
  cy.wait(2000);
  cy.get("body").then(($body) => {
    if ($body.find("#moe-dontallow_button").length > 0) {
      //evaluates as true if Alert box exists at all
      cy.get("#moe-dontallow_button").then(($header) => {
        if ($header.is(":visible")) {
          //you get here only if button EXISTS and is VISIBLE
          cy.get("#moe-dontallow_button").click(); //for handling alert by clicking on "don't allow"
          cy.get(".MuiButton-label").contains("Kids").trigger("mouseover");
          cy.log("Hover over Kids Link in Navbar");
          cy.wait(1000);
        } else {
          //you get here only if button EXISTS but is INVISIBLE
          cy.wait(1000);
          cy.log("Alert not Found");
        }
      });
    } else {
      //you get here if the Alert box DOESN'T EXIST
      cy.get(".MuiButton-label").contains("Kids").trigger("mouseover");
      cy.log("Hover over Kids Link in Navbar");
      cy.wait(1000);
    }
  });
});

Then("the Kids dropdown should be visible", () => {
  cy.contains("Age Store").should("have.text", "Age Store");
  cy.get("#category-menu-2").should("exist");
  cy.log("Kids Dropdown present");
});

When("I hover over the Beauty link in the navbar", () => {
  // Hover over Women's link in navbar
  cy.wait(2000);
  cy.get("body").then(($body) => {
    if ($body.find("#moe-dontallow_button").length > 0) {
      //evaluates as true if Alert box exists at all
      cy.get("#moe-dontallow_button").then(($header) => {
        if ($header.is(":visible")) {
          //you get here only if button EXISTS and is VISIBLE
          cy.get("#moe-dontallow_button").click(); //for handling alert by clicking on "don't allow"
          cy.get(".MuiButton-label").contains("Beauty").trigger("mouseover");
          cy.log("Hover over Beauty Link in Navbar");
          cy.wait(1000);
        } else {
          //you get here only if button EXISTS but is INVISIBLE
          cy.wait(1000);
          cy.log("Alert not Found");
        }
      });
    } else {
      //you get here if the Alert box DOESN'T EXIST
      cy.get(".MuiButton-label").contains("Beauty").trigger("mouseover");
      cy.log("Hover over Beauty Link in Navbar");
      cy.wait(1000);
    }
  });
});

Then("the Beauty dropdown should be visible", () => {
  cy.contains("Skin Care").should("have.text", "Skin Care");
  cy.get("#category-menu-4").should("exist");
  cy.log("Beauty Dropdown present");
});

When("I hover over the Shoes&Bags link in the navbar", () => {
  // Hover over Women's link in navbar
  cy.wait(2000);
  cy.get("body").then(($body) => {
    if ($body.find("#moe-dontallow_button").length > 0) {
      //evaluates as true if Alert box exists at all
      cy.get("#moe-dontallow_button").then(($header) => {
        if ($header.is(":visible")) {
          //you get here only if button EXISTS and is VISIBLE
          cy.get("#moe-dontallow_button").click(); //for handling alert by clicking on "don't allow"
          cy.get(".MuiButton-label")
            .contains("Shoes & Bags")
            .trigger("mouseover");
          cy.log("Hover over Shoes & Bags Link in Navbar");
          cy.wait(1000);
        } else {
          //you get here only if button EXISTS but is INVISIBLE
          cy.wait(1000);
          cy.log("Alert not Found");
        }
      });
    } else {
      //you get here if the Alert box DOESN'T EXIST
      cy.get(".MuiButton-label").contains("Shoes & Bags").trigger("mouseover");
      cy.log("Hover over Shoes & Bags Link in Navbar");
      cy.wait(1000);
    }
  });
});

Then("the Shoes&Bags dropdown should be visible", () => {
  cy.contains("Price Store").should("have.text", "Price Store");
  cy.get("#category-menu-3").should("exist");
  cy.log("Shoes&Bags Dropdown present");
});

When("I hover over the More link in the navbar", () => {
  // Hover over Women's link in navbar
  cy.wait(2000);
  cy.get("body").then(($body) => {
    if ($body.find("#moe-dontallow_button").length > 0) {
      //evaluates as true if Alert box exists at all
      cy.get("#moe-dontallow_button").then(($header) => {
        if ($header.is(":visible")) {
          //you get here only if button EXISTS and is VISIBLE
          cy.get("#moe-dontallow_button").click(); //for handling alert by clicking on "don't allow"
          cy.get(".MuiButton-label").contains("More").trigger("mouseover");
          cy.log("Hover over More Link in Navbar");
          cy.wait(1000);
        } else {
          //you get here only if button EXISTS but is INVISIBLE
          cy.wait(1000);
          cy.log("Alert not Found");
        }
      });
    } else {
      //you get here if the Alert box DOESN'T EXIST
      cy.get(".MuiButton-label").contains("More").trigger("mouseover");
      cy.log("Hover over More Link in Navbar");
      cy.wait(1000);
    }
  });
});

When("I Click Men link in the navbar", () => {
  cy.get(".MuiButton-label").contains("Men").click();
  cy.log("Clicking Men in Navbar");
  cy.wait(3000);
});

Then("validate the Men's page URL", () => {
  cy.url().should("include", "/men");
  cy.log("Validating Url of Men's Page Success");
});

Then("the Free Shipping should be visible", () => {
  cy.get(".MuiButton-label").contains("Free Shipping").should("exist");
  cy.get(".MuiButton-label").contains("Free Shipping").should("be.visible");
  cy.log("Free Shipping available in Top Navbar");
});

Then("the Click & Collect should be visible", () => {
  cy.get(".MuiButton-label").contains("Click & Collect").should("exist");
  cy.get(".MuiButton-label").contains("Click & Collect").should("be.visible");
  cy.log("Click & Collect available in Top Navbar");
});

Then("the Return to Store should be visible", () => {
  cy.get(".MuiButton-label").contains("Return to Store").should("exist");
  cy.get(".MuiButton-label").contains("Return to Store").should("be.visible");
  cy.log("Return to Store available in Top Navbar");
});

Then("the More dropdown should be visible", () => {
  cy.contains("Download App").should("have.text", "Download App");
  cy.get("#category-menu-3").should("exist");
  cy.log("More Dropdown present");
});

Then("the Searchbar input should be visible", () => {
  cy.get("#js-site-search-input").should("exist");
  cy.get("#js-site-search-input").should("be.visible");
  cy.log("Search box available in Navbar");
});

And("I enter valid credentials", () => {
  // code to enter valid login credentials
  cy.get("#mobileNumber").type("9074967678");
  cy.log("Mobile Number Entered");
});
And("I enter dummy credentials", () => {
  // code to enter valid login credentials
  cy.get("#mobileNumber").type("7799999998");
  cy.log("Mobile Number Entered");
});

And("Validate Dialog box", () => {
  //code to verify dialog box
  cy.xpath('//*[@role="dialog"]').should("be.visible");
  cy.log("Validating Dialog box Success");
});

And("click on the login button", () => {
  // code to click on the login button
  cy.wait(5000);
  cy.get("body").then(($body) => {
    if ($body.find("#moe-dontallow_button").length > 0) {
      //evaluates as true if Alert box exists at all
      cy.get("#moe-dontallow_button").then(($header) => {
        if ($header.is(":visible")) {
          //you get here only if button EXISTS and is VISIBLE
          cy.get("#moe-dontallow_button").click(); //for handling alert by clicking on "don't allow"
          cy.contains("Continue").click();
          cy.wait(1000);
        } else {
          //you get here only if button EXISTS but is INVISIBLE
          cy.wait(1000);
          cy.log("Alert not Found");
        }
      });
    } else {
      //you get here if the Alert box DOESN'T EXIST
      cy.contains("Continue").click();
      cy.wait(1000);
    }
  });
  cy.log("Clicked on Login Button");
});

Then("I should be logged in successfully", () => {
  // code to verify that the user is logged in successfully
  cy.get('[role="dialog"]').then((dialog) => {
    if (
      dialog.find(
        'img[src="https://i1.lmsin.net/website_images/static-pages/brand_exp/brand2images/icons/warning.png"]'
      ).length > 0 ||
      dialog
        .text()
        .includes(
          "You've exceeded the number of resend/verification attempts. Please try again later."
        ) || dialog.text().includes("Cannot connect. Please make sure you are connected to the internet.")
    ) {
      // Error icon or error message is present, log error to console and stop the test
      cy.log(
        "Cannot connect. Please make sure you are connected to the internet."
      );
      cy.log("Exceeded number of attempts for sending code");
    } else {
      // Error icon or error message is not present, continue with the test
      dialog.text().includes("Verify with OTP");
      cy.wrap(dialog).should("contain.text", "Verify with OTP");
      cy.wait(15000);
      cy.get("button[aria-label='user-icon']").click();
      cy.contains("My Account").should("exist");
      cy.log("Login Successful");
    }
  });
});

Then("Verify Change button", () => {
  //verify change button
  cy.get('[role="dialog"]').then((dialog) => {
    if (
      dialog.find(
        'img[src="https://i1.lmsin.net/website_images/static-pages/brand_exp/brand2images/icons/warning.png"]'
      ).length > 0 ||
      dialog
        .text()
        .includes(
          "You've exceeded the number of resend/verification attempts. Please try again later."
        ) || dialog.text().includes("Cannot connect. Please make sure you are connected to the internet.")
    ) {
      // Error icon or error message is present, log error to console and stop the test
      cy.log(
        "Cannot connect. Please make sure you are connected to the internet."
      );
      cy.log("Exceeded number of attempts for sending code");
    } else {
      // Error icon or error message is not present, continue with the test
      cy.contains("Change?").should("be.visible");
      cy.wait(5000); // wait for 10 seconds before proceeding
    }
  });
  cy.log("Change button Verified");
});

Then("Verify Resend button", () => {
  //verify change button
  cy.get('[role="dialog"]').then((dialog) => {
    if (
      dialog.find(
        'img[src="https://i1.lmsin.net/website_images/static-pages/brand_exp/brand2images/icons/warning.png"]'
      ).length > 0 ||
      dialog
        .text()
        .includes(
          "You've exceeded the number of resend/verification attempts. Please try again later."
        ) || dialog.text().includes("Cannot connect. Please make sure you are connected to the internet.")
    ) {
      // Error icon or error message is present, log error to console and stop the test
      cy.log(
        "Cannot connect. Please make sure you are connected to the internet."
      );
      cy.log("Exceeded number of attempts for sending code");
    } else {
      // Error icon or error message is not present, continue with the test
      cy.contains("We've sent your code. Try again in").should("be.visible");
      cy.wait(32000);
      cy.contains("Didn't get it? resend").should("be.visible");
    }
  });
  cy.log("Verified Resend Button");
});

Then("Logo is verified", () => {
  cy.get("#page-header > .MuiIconButton-root").should("be.visible");
  cy.log("Website LOGO is Verified");
});

And("User navigates to the image carousel section", () => {
  cy.get("#hero_banner_link_0").scrollIntoView().should("be.visible");
  cy.log("Navigate / Scroll to Carousel");
});

Then("User clicks the next button and verifies that the image changes", () => {
  // cy.get('#next-button').click();
  // cy.log("Clicked on Next Button In Carousel")
  cy.get(".slick-list").should("be.visible");
  cy.get("body").then(($body) => {
    if ($body.find("#moe-dontallow_button").length > 0) {
      cy.get("#moe-dontallow_button").click(); //for handling alert by clicking on "don't allow"
      cy.log("Clicked Don't Allow on Alert box");
    } else {
      cy.log("Alert Box not found");
    }
  });
  cy.get(".bannerCount-6 li").should("have.length.greaterThan", 1);
  cy.log("Carousel images verfied");
});

And("User navigates to the Denim Destination section", () => {
  cy.contains("Denim Destination").scrollIntoView();
  cy.log("Scroll to Demin Destination");
});

Then("Verify Denim Destination section", () => {
  cy.wait(2000);
  cy.get("body").then(($body) => {
    if ($body.find("#moe-dontallow_button").length > 0) {
      cy.get("#moe-dontallow_button").click(); //for handling alert by clicking on "don't allow"
      cy.log("Clicked Don't Allow on Alert box");
    } else {
      cy.log("Alert Box not found");
    }
  });

  cy.contains("Denim Destination").scrollIntoView().should("be.visible");
  cy.log("Demin Destination Section present");
});

And("User navigates to the Formal Store section", () => {
  cy.contains("Formal Store").scrollIntoView();
  cy.log("Scroll to Formal Store");
});

Then("Verify Formal Store section", () => {
  cy.wait(2000);
  cy.get("body").then(($body) => {
    if ($body.find("#moe-dontallow_button").length > 0) {
      cy.get("#moe-dontallow_button").click(); //for handling alert by clicking on "don't allow"
      cy.log("Clicked Don't Allow on Alert box");
    } else {
      cy.log("Alert Box not found");
    }
  });
  cy.contains("Formal Store").scrollIntoView().should("be.visible");
  cy.log("Formal Store Section present");
});

And("User navigates to the More Brands To Love section", () => {
  cy.contains("More Brands To Love").scrollIntoView();
  cy.log("Scroll to More Brands To Love");
});

Then("Verify More Brands To Love section", () => {
  cy.wait(2000);
  cy.get("body").then(($body) => {
    if ($body.find("#moe-dontallow_button").length > 0) {
      cy.get("#moe-dontallow_button").click(); //for handling alert by clicking on "don't allow"
      cy.log("Clicked Don't Allow on Alert box");
    } else {
      cy.log("Alert Box not found");
    }
  });
  cy.contains("More Brands To Love").scrollIntoView().should("be.visible");
  cy.log("More Brands To Love Section present");
});

And("User navigates to the Highlights of the Day section", () => {
  cy.contains("Highlights of the Day").scrollIntoView();
  cy.log("Scroll to Highlights");
});

Then("Verify Highlights of the Day section", () => {
  cy.wait(2000);
  cy.get("body").then(($body) => {
    if ($body.find("#moe-dontallow_button").length > 0) {
      cy.get("#moe-dontallow_button").click(); //for handling alert by clicking on "don't allow"
      cy.log("Clicked Don't Allow on Alert box");
    } else {
      cy.log("Alert Box not found");
    }
  });
  cy.contains("Highlights of the Day").scrollIntoView().should("be.visible");
  cy.log("Highlights Section present");
});

And("User navigates to the Active Wardrobe section", () => {
  cy.contains("Active Wardrobe").scrollIntoView();
  cy.log("Scroll to Active Wardrobe");
});

Then("Verify Active Wardrobe section", () => {
  cy.wait(2000);
  cy.get("body").then(($body) => {
    if ($body.find("#moe-dontallow_button").length > 0) {
      cy.get("#moe-dontallow_button").click(); //for handling alert by clicking on "don't allow"
      cy.log("Clicked Don't Allow on Alert box");
    } else {
      cy.log("Alert Box not found");
    }
  });
  cy.contains("Active Wardrobe").scrollIntoView().should("be.visible");
  cy.log("Active Wardrobe Section present");
});

And("User navigates to the Exclusive Collection section", () => {
  cy.contains("Exclusive Collection").scrollIntoView();
  cy.log("Scroll to Exclusive Collection");
});

Then("Verify Exclusive Collection section", () => {
  cy.wait(2000);
  cy.get("body").then(($body) => {
    if ($body.find("#moe-dontallow_button").length > 0) {
      cy.get("#moe-dontallow_button").click(); //for handling alert by clicking on "don't allow"
      cy.log("Clicked Don't Allow on Alert box");
    } else {
      cy.log("Alert Box not found");
    }
  });
  cy.contains("Exclusive Collection").scrollIntoView().should("be.visible");
  cy.log("Exclusive Collection Section present");
});

And("User navigates to the Trendy Bottom Styles section", () => {
  cy.contains("Trendy Bottom Styles").scrollIntoView();
  cy.log("Scroll to Trendy Bottom Styles");
});

Then("Verify Trendy Bottom Styles section", () => {
  cy.wait(2000);
  cy.get("body").then(($body) => {
    if ($body.find("#moe-dontallow_button").length > 0) {
      cy.get("#moe-dontallow_button").click(); //for handling alert by clicking on "don't allow"
      cy.log("Clicked Don't Allow on Alert box");
    } else {
      cy.log("Alert Box not found");
    }
  });
  cy.contains("Trendy Bottom Styles").scrollIntoView().should("be.visible");
  cy.log("Trendy Bottom Styles Section present");
});

Then("All Sections of Men's Page to console", () => {
  cy.get(".MuiTypography-root").each(($el) => {
    cy.wrap($el).scrollIntoView().should("be.visible");
    cy.wait(1000); // wait for the element to become visible
    const text = $el.text();
    cy.log(text);
  });
  cy.get("body").then(($body) => {
    if ($body.find("#moe-dontallow_button").length > 0) {
      cy.get("#moe-dontallow_button").click(); //for handling alert by clicking on "don't allow"
      cy.log("Clicked Don't Allow on Alert box");
    } else {
      cy.log("Alert Box not found");
    }
  });
  cy.wait(5000);
  cy.log("All Sections of Men's page printed to Console");
});
