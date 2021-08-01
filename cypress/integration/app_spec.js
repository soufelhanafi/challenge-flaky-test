describe('Sign Up', () => {
  it('Adds person to course', () => {
    cy.visit('/')

    cy.get('input[name="name"]')
      .click()
      .type('Some Name')
      .should('have.value', 'Some Name')

    cy.get('input[name="email"]')
      .click()
      .type('some@email.com')

    cy.get('select[name="department"]')
      .select('core')
      .should('have.value', 'core')

    cy.get('select[name="course"]')
      .select('git-it')
      .should('have.value', 'git-it')

    cy.get('input[type="submit"]')
      .click();
      // the function between is random between 4500 and 3500
    cy.wait(4600, { log: false })

    cy.get('li')
      .should('contain', 'Some Name - some@email.com - core - git-it')
  })
})
