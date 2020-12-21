/// <reference types="Cypress" />

before('Init method to test data before all', () => {
    cy.fixture('urls').as('urls');
    cy.get('@urls').then((url) => {
        cy.visit(url.home);
    });

});

describe('Wrap Test', function () {

    it('Cy wait commands', function () {
        cy.get("div[id='at-cv-lightbox-content']")
            .find('div[class="at-cv-lightbox-layout-content"]')
            .find('div[class="at-cv-goal-container"]')
            .contains('No, thanks!')
            .click();

        cy.contains('Progress Bars & Sliders')
            .click()
            .get("li[style='display: list-item;']")
            .contains('JQuery Download Progress bars')
            .click()
            .get("button[id='downloadButton']")
            .click()
            .get('div[class="progress-label"]',)
            .should('have.text', 'Current Progress: 31%')
            .get('button')
            .contains('Cancel Download')
            .click();

        cy.get("li[style='display: list-item;']")
            .contains('Others').click()
            .get("li[style='display: list-item;']")
            .contains('Dynamic Data Loading').click()
            .get("button[id='save']").click()
            .get('div[id="loading"]', { timeout: 60000 })
            .get('br')
            .as('text')
            .should('have.text', 'First');
    });

    it('Learn wrap command', function () {

        cy.get("div[class='collapse navbar-collapse']").contains('Progress Bars').click()
            .get("li[class='dropdown open']")
            .contains('JQuery Download Progress bars')
            .then(($x) => {
                cy.wrap($x).click();
            });
    });
});