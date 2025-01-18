describe('TodoList', () => {
    it('should allow checking a task, deleting a task, and creating a new task', () => {
      cy.visit('http://localhost:8081/');
      cy.contains('Doctor Appointment').should('exist');
      cy.get('[id="task-input"]').should('exist').type("Task 1");

      //Add new task
      cy.get('[type="button"]').should('exist').click();
      cy.contains('Task 1').should('exist');

      //Check the task
      cy.get('input[type="checkbox"]').eq(2).should('exist');
      cy.get('input[type="checkbox"]').eq(2).check();
      cy.get('input[type="checkbox"]').eq(2).should('be.checked')
      cy.contains('Task 1').should('have.css', 'color','rgb(136, 136, 136)');

      //Delete the task
      cy.get('[data-testid="delete"]').eq(2).click();
      cy.contains('Task 1').should('not.exist');
    });
  });