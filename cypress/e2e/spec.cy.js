describe('template spec', () => {
  beforeEach('passes', () => {
    cy.visit('https://demoqa.com/')
    cy.viewport(1280, 720);
  })

  it('Practice Form', () => {
    cy.get('.category-cards > :nth-child(2)').click()
    cy.get(':nth-child(2) > .element-list > .menu-list > #item-0').click()
    cy.get('#firstName').type('Christopher')
    cy.get('#lastName').type('Owusu')
    cy.get('#userEmail').type('chrOwn@gmail.com')
    cy.get('#genterWrapper > .col-md-9 > :nth-child(1) > .custom-control-label').click()
    cy.get('#userNumber').type('0503111449')
    cy.get('#dateOfBirthInput').click()
    cy.get('.react-datepicker__month-select').select(9).invoke("val").should("eq", "9")
    cy.get('.react-datepicker__year-select').select('2000').invoke("val").should("eq", "2000")
    cy.get('.react-datepicker__week').contains('div', '20').click()
    cy.get('#dateOfBirthInput').should('have.value', '20 Oct 2000')
    cy.get('.subjects-auto-complete__value-container').click().type('c')
    cy.contains('Chemistry').click()
    cy.get('.subjects-auto-complete__value-container').click().type('ci')
    cy.contains('Civics').click()
    cy.get('.subjects-auto-complete__value-container').click().type('c')
    cy.contains('Commerce').click()
    // cy.get('.subjects-auto-complete__value-container').click().type('m')
    // cy.contains('Maths').click()
    cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(1) > .custom-control-label').click()
    cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(3) > .custom-control-label').click()
    cy.get('#uploadPicture').attachFile('simpsons.webp')
    cy.get('#currentAddress').type('Ashiaman - Accra')
    // cy.get('#stateCity-wrapper > :nth-child(2)').click().contains('Haryana').click()
    // cy.get('#stateCity-wrapper > :nth-child(3)').click().contains('Panipat').click()
    // cy.get('#submit').click()
  })

  it.skip('Broken Image', () => {
    cy.get('.category-cards > :nth-child(1)').click()
    cy.get(':nth-child(1) > .element-list > .menu-list > #item-6').click()
    cy.get(':nth-child(2) > [src="/images/Toolsqa.jpg"]').should('be.visible').and('have.prop', 'naturalWidth').then(cy.log)
    cy.get('[src="/images/Toolsqa_1.jpg"]').should('not.be.visible').and('have.prop', 'naturalWidth').then(cy.log)
  })

  it.skip('Broken Link', () => {
    cy.get('.category-cards > :nth-child(1)').click()
    cy.get(':nth-child(1) > .element-list > .menu-list > #item-6').click()
    cy.get('[href="http://demoqa.com"]')
      .then((link) => {
        cy.request(link.prop('href'))
        .its('status')
        .should('eq', 200)
      })
      // cy.get('[href="http://the-internet.herokuapp.com/status_codes/500"]')
        // .then((link) => {
          // cy.request('http://the-internet.herokuapp.com/status_codes/500')
          // .its('status')
          // .should('gt', 200)
      // })
    
  })

  it.skip('Book Store', () => {
    cy.get('.category-cards > :nth-child(6)').click()
    cy.get(':nth-child(6) > .element-list > .menu-list > #item-0').click()
    cy.get('#newUser').click()
    cy.get('#firstname').type('Mark')
    cy.get('#lastname').type('Dan')
    cy.get('#userName').type('markdan20')
    cy.get('#password').type('Mkbh@12345')
    cy.wait(5000)
    cy.get('#g-recaptcha').click()
    // cy.get('[style="width: 304px; height: 78px;"] > div > iframe').then($iframe => {
    //     const $body = $iframe.contents().find('body')
    //     cy.wrap($body)
    //       .find('div[class="recaptcha-checkbox-border"]')
    //       .should('be.visible')
    //       .click()
    //   })
    cy.wait(5000)
    cy.get('#register').click()
  })

  it.skip('Book Store', () => {
    cy.get('.category-cards > :nth-child(6)').click()
    cy.get('#login').click()
    cy.get(':nth-child(6) > .element-list > .menu-list > #item-2').click()
    cy.get('#searchBox').type('designin')
      .should('href').click()
    cy.get('#userName').type('')
    cy.get('#password').type('')
    cy.get('#login').click()

  })

})