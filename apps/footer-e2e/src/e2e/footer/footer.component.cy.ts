describe('footer', () => {
  beforeEach(() => cy.visit('/iframe.html?id=footercomponent--primary'));
  it('should render the component', () => {
    cy.get('integrated1-footer').should('exist');
  });
});