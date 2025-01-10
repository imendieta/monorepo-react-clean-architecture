describe("Home Page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Button correctly render", () => {
    cy.contains("Create Notification");
  });

  it("create notification", () => {
    cy.contains("Create Notification").click();
    cy.contains("Hello, World!");
  });

  it("delete notification", () => {
    cy.contains("Create Notification").click();
    cy.contains("Hello, World!");

    //delte notification
    cy.contains("Delete").click();
    cy.contains("Hello, World!").should("not.exist");
  });
});
