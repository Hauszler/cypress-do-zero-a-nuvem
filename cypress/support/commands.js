// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('fillMandatoryFieldsAndSubmit', ()=>{
    cy.get("[name='firstName']").as('nome').should('be.visible').type('André')
    cy.get("[name='lastName']").as('sobrenome').should('be.visible').type('Hauszler')
    cy.get("[type='email']").as('email').should('be.visible').type('meuemail@teste.com')
    cy.get("[name='open-text-area']").as('feedback').should('be.visible').type('teste', {delay: 0})
    cy.contains('button', 'Enviar').click()
})
Cypress.Commands.add('fillMandatoryFieldsAndSubmit_valor', data =>{
    cy.get("[name='firstName']").as('nome').should('be.visible').type(data.nome)
    cy.get("[name='lastName']").as('sobrenome').should('be.visible').type(data.sobrenome)
    cy.get("[type='email']").as('email').should('be.visible').type(data.email)
    cy.get("[name='open-text-area']").as('feedback').should('be.visible').type(data.feedback, {delay: 0})
    cy.contains('button', 'Enviar').click()
})
Cypress.Commands.add('fillMandatoryFieldsAndSubmit_valor2', (data = {
    nome: 'Jhon',
    sobrenome:'Doe',
    email: 'jhondoe@teste.com',
    feedback:'teste'
}) =>{
    cy.get("[name='firstName']").as('nome').should('be.visible').type(data.nome)
    cy.get("[name='lastName']").as('sobrenome').should('be.visible').type(data.sobrenome)
    cy.get("[type='email']").as('email').should('be.visible').type(data.email)
    cy.get("[name='open-text-area']").as('feedback').should('be.visible').type(data.feedback, {delay: 0})
    cy.contains('button', 'Enviar').click()
})