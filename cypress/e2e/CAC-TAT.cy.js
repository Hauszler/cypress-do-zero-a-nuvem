describe('Central de Atendimento ao Cliente TAT', () => {
  beforeEach(() =>{
    cy.visit('./src/index.html')
    cy.title().should('be.eq', 'Central de Atendimento ao Cliente TAT')
  })

  //exercicio 1
  it('preenche os campos obrigatórios e envia o formulário', () => {
    const longText = Cypress._.repeat('asfhagsyasusaasbassahasiaskasnsab', 10)
    cy.get("[name='firstName']").as('nome').should('be.visible').type('André')
    cy.get("[name='lastName']").as('sobrenome').should('be.visible').type('Hauszler')
    cy.get("[type='email']").as('email').should('be.visible').type('meuemail@teste.com')
    cy.get("[name='open-text-area']").as('feedback').should('be.visible').type(longText, {delay: 0})
    cy.contains('button', 'Enviar').click()

    cy.get(".success").should('be.visible')
  })
//exercicio 2
  it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', () =>{
    cy.get("[name='firstName']").as('nome').should('be.visible').type('André')
    cy.get("[name='lastName']").as('sobrenome').should('be.visible').type('Hauszler')
    cy.get("[type='email']").as('email').should('be.visible').type('meuemai')
    cy.get("[name='open-text-area']").as('feedback').should('be.visible').type('teste', {delay: 0})
    cy.contains('button', 'Enviar').click()

    cy.get('.error').should('be.visible')
  })
//exercicio 3
  it('campo de telefone continua vazio quando digitado um valor não numerico',()=>{
    cy.get('#phone').type('teste')
    cy.get('#phone').should('be.empty')
  })
//exercicio 4
  it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', () =>{
    
    
    cy.get("[name='firstName']").as('nome').should('be.visible').type('André')
    cy.get("[name='lastName']").as('sobrenome').should('be.visible').type('Hauszler')
    cy.get("[type='email']").as('email').should('be.visible').type('meuemail@teste.com')
    cy.get("[name='open-text-area']").as('feedback').should('be.visible').type('teste')
    cy.get('#phone-checkbox').click()
    cy.contains('button', 'Enviar').click()

    cy.get('.phone-label-span').should('be.visible')
    cy.get('.error').should('be.visible')
  })
  //exercicio 5
  it('preenche e limpa os campos nome, sobrenome, email e telefone',() =>{
    cy.get("[name='firstName']").as('nome').should('be.visible').type('André')
    
    cy.get("[name='lastName']").as('sobrenome').should('be.visible').type('Hauszler')
    cy.get("[type='email']").as('email').should('be.visible').type('meuemail@teste.com')
    cy.get("[name='open-text-area']").as('feedback').should('be.visible').type('teste')


    cy.get("@nome").should('have.value', 'André')
    cy.get('@sobrenome').should('have.value', 'Hauszler')
    cy.get('@email').should('have.value', 'meuemail@teste.com')
    cy.get('@feedback').should('have.value', 'teste')

    cy.get("@nome").clear()
    cy.get('@sobrenome').clear()
    cy.get('@email').clear()
    cy.get('@feedback').clear()

    cy.get("@nome").should('be.empty')
    cy.get('@sobrenome').should('be.empty')
    cy.get('@email').should('be.empty')
    cy.get('@feedback').should('be.empty')
  })
  //exercicio 6
  it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', ()=> {
    cy.contains('button', 'Enviar').click()
    cy.get('.error').should('be.visible')
  })

  //exercico 7
  it('envia o formuário com sucesso usando um comando customizado', () => {
    cy.fillMandatoryFieldsAndSubmit()
    cy.get(".success").should('be.visible')
  })
  
  it('envia o formuário com sucesso usando um comando customizado', () => {
    const data = {
      nome: 'André',
      sobrenome: 'Hauszler',
      email: 'email@gmail.com',
      feedback: 'Teste teste'
    }
    cy.fillMandatoryFieldsAndSubmit_valor(data)
    cy.get(".success").should('be.visible')
  })

  it('envia o formuário com sucesso usando um comando customizado', () => {
    cy.fillMandatoryFieldsAndSubmit_valor2()
    cy.get(".success").should('be.visible')
  })
  //exercicio 8
  it('preenche os campos obrigatórios e envia o formulário', () => {
    const longText = Cypress._.repeat('asfhagsyasusaasbassahasiaskasnsab', 10)
    cy.get("[name='firstName']").as('nome').should('be.visible').type('André')
    cy.get("[name='lastName']").as('sobrenome').should('be.visible').type('Hauszler')
    cy.get("[type='email']").as('email').should('be.visible').type('meuemail@teste.com')
    cy.get("[name='open-text-area']").as('feedback').should('be.visible').type('teste')
    cy.contains('button', 'Enviar').click()
    cy.get(".success").should('be.visible')
  })

  //section 4

  it('seleciona um produto (YouTube) por seu texto', ()=>{
    cy.get('#product').select('YouTube')

    cy.get('#product').should('have.value', 'youtube')
  })
  it('seleciona um produto (Mentoria) por seu valor (value)', ()=>{
    cy.get('#product').select('mentoria')

    cy.get('#product').should('have.value', 'mentoria')
  })

  it('seleciona um produto (Blog) por seu índice', ()=>{
    cy.get('#product').select(1)

    cy.get('#product').should('have.value', 'blog')
  })
//section 5
  it('marca o tipo de atendimento "Feedback"', ()=>{
    cy.get("input[type='radio'][value='feedback']").check()
    .should('be.checked')
  })

  it('marca cada tipo de atendimento', ()=>{
    // cy.get("input[type='radio'][value='ajuda']").check()
    // .should('be.checked')
    // cy.get("input[type='radio'][value='elogio']").check()
    // .should('be.checked')
    // cy.get("input[type='radio'][value='feedback']").check()
    // .should('be.checked')
    cy.get('input[type="radio"]')
      .each(typeOfService =>{
          cy.wrap(typeOfService)
          .check()
          .should("be.checked")
      })
  })

  //section 6

  it('marca ambos checkboxes, depois desmarca o último', ()=>{
    // cy.get('input[type="checkbox"]')
    // .each(typeOfContact => {
    //   cy.wrap(typeOfContact)
    //   .check()
    //   .should("be.checked")
    // })
    // cy.get('input[type="checkbox"]').last().uncheck()
    // .should('not.be.checked')
    cy.get('input[type="checkbox"]')
      .check()
      .should('be.checked')
      .last()
      .uncheck()
      .should('not.be.checked')
  })


  it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', () =>{
    
    
    cy.get("[name='firstName']").as('nome').should('be.visible').type('André')
    cy.get("[name='lastName']").as('sobrenome').should('be.visible').type('Hauszler')
    cy.get("[type='email']").as('email').should('be.visible').type('meuemail@teste.com')
    cy.get("[name='open-text-area']").as('feedback').should('be.visible').type('teste')
    cy.get('#phone-checkbox').check().should('be.checked')
    cy.contains('button', 'Enviar').click()

    cy.get('.phone-label-span').should('be.visible')
    cy.get('.error').should('be.visible')
  })


  //Section 7 - Upload de arquivos

  it('seleciona um arquivo da pasta fixtures', ()=>{
    cy.get('#file-upload')
      .selectFile('cypress/fixtures/example.json')
      .should(input =>{
        expect(input[0].files[0].name).to.equal('example.json')
      })
  })
  
  it('seleciona um arquivo simulando um drag-and-drop', ()=>{
    cy.get('#file-upload')
      .selectFile('cypress/fixtures/example.json',{action: 'drag-drop'})
      .should(input =>{
        expect(input[0].files[0].name).to.equal('example.json')
      })
  })

  it('eleciona um arquivo utilizando uma fixture para a qual foi dada um alias', ()=>{
    cy.fixture("example.json").as('sampleFile')
    cy.get('#file-upload')
      .selectFile('@sampleFile')
      .should(input =>{
        expect(input[0].files[0].name).to.equal('example.json')
      })
  })

//section 8
  it('verifica que a política de privacidade abre em outra aba sem a necessidade de um clique',()=>{
    cy.contains('a', 'Política de Privacidade')
      .should('have.attr', 'href', 'privacy.html')
      .and('have.attr', 'target', '_blank')
  })

  it('acessa a página da política de privacidade removendo o target e então clicando no link',()=>{
    cy.contains('a', 'Política de Privacidade')
      .invoke('removeAttr', 'target')
      .click()

    cy.contains('h1', 'CAC TAT - Política de Privacidade').should('be.visible')
  })

  it('testa a página da política de privacidade de forma independente', ()=>{
    cy.visit('./src/privacy.html')
    cy.contains('h1', 'CAC TAT - Política de Privacidade').should('be.visible')
  })
  
})


