/// <reference types="Cypress" />

before('Init method to test data before all', () => {
    cy.fixture('urls').as('urls');
    cy.fixture('user').as('user');

    cy.get('@urls').then((url) => {
        cy.visit(url.ea);
    });
});


describe('Wrap Test', function () {

    it('Learn wrap command', function () {

        cy.get('@user').then((user) => {
            login(user.user, user.password);

        });
        cy.contains('Employee List').click();
        cy.get('table').get('tr').find('td').then(($x) => {
            cy.wrap($x).contains('pritam').parent().contains('Benefits').click();
        });
    })
});


function login(username, password) {
    cy.contains('Login').click();
    cy.get('#UserName').type(String(username));
    cy.get('#Password').type(String(password));
    cy.get('.btn').click();
}