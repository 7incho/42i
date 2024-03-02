// Formulario "Non-Constructible Change":
// 1. Prueba de valores válidos:
describe("Non-Constructible Change Form", () => {
  it("should calculate the minimum unobtainable change", () => {
    cy.visit("http://localhost:4321");
    cy.get("#custom-form-values").within(() => {
      cy.get('[name="coins"]').type("5, 7, 1, 1, 2, 3, 22");
      cy.get("button").click();
    });
    cy.get("#result-values").should(
      "have.text",
      "The minimum amount of change that cannot be created is: 20"
    );
  });
});

// 2. Prueba de valores inválidos:
describe("Non-Constructible Change Form", () => {
  it("should handle invalid input", () => {
    cy.visit("http://localhost:4321");
    cy.get("#custom-form-values").within(() => {
      cy.get('[name="coins"]').type("abc, 123");
      cy.get("button").click();
    });
    cy.get("#result-values").should(
      "have.text",
      "Please enter valid numbers separated by commas"
    );
  });
});

// Formulario "Two Number Sum":
// 3. Prueba de valores válidos:
describe("Two Number Sum Form", () => {
  it("should find two numbers that sum up to the target", () => {
    cy.visit("http://localhost:4321");
    cy.get("#custom-form-numbers").within(() => {
      cy.get('[name="numbers"]').type("2, 7, 11, 15");
      cy.get('[name="targetSum"]').type("9");
      cy.get("button").click();
    });
    cy.get("#result-numbers").should(
      "have.text",
      "The two numbers that sum up to 9 are: 7 and 2"
    );
  });
});

// 4. Prueba de valores inválidos:
describe("Two Number Sum Form", () => {
  it("should handle invalid input and no matches", () => {
    cy.visit("http://localhost:4321");
    cy.get("#custom-form-numbers").within(() => {
      cy.get('[name="numbers"]').type("abc, 123");
      cy.get('[name="targetSum"]').type("xyz");
      cy.get("button").click();
    });
    cy.get("#result-numbers").should(
      "have.text",
      "Please enter valid numbers and a target sum"
    );
  });
});
