describe('Example Test Suite', () => {
  beforeEach(() => {
    cy.visit('https://www.example.com/')
  })

  it('Example Test Case 1', () => {
    cy.get('selector').should('be.visible')
    cy.contains('text').click()
    cy.url().should('include', 'example')
    cy.get('input').type('text')
    cy.get('button').click()
    cy.contains('result').should('be.visible')
  })

  it('Example Test Case 2', () => {
    cy.get('selector').click({ force: true })
    cy.get('input').clear().type('new text')
    cy.wait(1000)
    cy.get('button').trigger('mouseover')
    cy.get('form').submit()
    cy.contains('success').should('be.visible')
  })

  it('Example Test Case 3', () => {
    cy.get('selector').should('have.length', 3)
    cy.get('selector').should('have.class', 'active')
    cy.get('selector').should('have.attr', 'data-id', '123')
    cy.get('selector').should('have.css', 'color', 'red')
    cy.fixture('data.json').then((data) => {
      cy.get('selector').type(data.username)
      cy.get('input').type(data.password)
    })
  })
})
