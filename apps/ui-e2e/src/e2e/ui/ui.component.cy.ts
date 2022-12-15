describe('ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=uicomponent--primary'));
  it('should render the component', () => {
    cy.get('integrated1-ui').should('exist');
  });
});