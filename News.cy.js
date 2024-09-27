const { should } = require("chai");

describe('Extract and Print 5 Tribune News', () => {
    it('Should visit the Tribune website and print the first news from h2 and next 4 from h3', () => {
      cy.visit('https://tribune.com.pk/');
  
      // Get the first news headline from h2
      cy.get('a > h2').first().then(($el) => {
        cy.log('News 1: ' + $el.text());
      });
  
      // Get the next 4 news headlines from h3
      cy.get('a > h3').each(($el, index) => {
        if (index < 4) {
          cy.log(`News ${index + 2}: ` + $el.text());
        }
        // cy.get('img.header-logo-bx').should('have.attr', 'alt', 'Tribune.com.pk');
       
      });
      cy.get('.logo-links > :nth-child(1) > a').should('have.text',"Today's Paper |")
    });
  });
  