import "cypress-localstorage-commands";
import data from "../../submissionData.json";
// let data = [{ submission_link: "http://localhost:8080", id: 67890 }];

/// <reference types="cypress" />

// let baseServerURL = Cypress.env("serverUrl");

import todos from "../fixtures/todos.json";
import todosAsc from "../fixtures/todosAsc.json";
import todosDesc from "../fixtures/todosDesc.json";
import hal from "../fixtures/hal_kihn.json";

let t = hal;

data.map(({ submission_link: url, id }) => {
  describe("Test", () => {
    let acc_score = 1;

    beforeEach(() => {
      Cypress.on("uncaught:exception", (err, runnable) => {
        return false;
      });
    });

    before(() => {
      cy.setLocalStorage("userId", null);
      cy.setLocalStorage("localAccessToken", null);
    });

    beforeEach(() => {
      cy.restoreLocalStorage();
    });

    afterEach(() => {
      cy.saveLocalStorage();
    });

    let numOfTodos = todos.length;

    it("Able to login", () => {
      cy.intercept("POST", `**/login`, (req) => {
        req.reply({
          body: t,
        });
      }).as("login");

      cy.visit(url);

      cy.get("#login-user-username").clear().type("Hal_Kihn71");
      cy.get("#login-user-password").clear().type("Hal_Kihn71");
      cy.get("#login-user").click();

      cy.wait("@login").then((data) => {
        expect(data.response.statusCode).to.eq(200);
        cy.saveLocalStorage();    
        acc_score += 1;    
      });
    });

    it(`Able to render notification after logging in`, () => {
      cy.get("#notifications-wrapper")
        .contains(`hey Hal_Kihn71, welcome back!`)
        .then(() => {
          acc_score += 1;
        });
    });

    it("Able to display todos after login", () => {
      cy.get("#fetch-todos").click();

      const cards = ".todo-item-label";

      cy.get(cards).first().should("contain", todos[0].title);

      cy.get(cards)
        .eq(Math.ceil(numOfTodos / 2))
        .should("contain", todos[Math.ceil(numOfTodos / 2)].title);

      cy.get(cards)
        .last()
        .should("contain", todos[numOfTodos - 1].title);

      cy.then(() => {
        acc_score += 1;
      });
    });

    it("Ability to sort Ascending", () => {
      cy.get("#fetch-todos").click();

      const cards = ".todo-item-label";

      cy.get("#sort-low-to-high").click();

      cy.get(cards).first().as('c1');
      
      cy.get('@c1').should("contain", todosAsc[0].title);

      cy.get(cards)
        .eq(Math.ceil(numOfTodos / 2))
        .as('c2');

      cy.get('@c2').should("contain", todosAsc[Math.ceil(numOfTodos / 2)].title);

      cy.get(cards)
        .last()
        .as('c3');

      cy.get('@c3').should("contain", todosAsc[numOfTodos - 1].title);

      cy.then(() => {
        acc_score += 1;
      });
    });

    it("Ability to sort descending", () => {
      cy.get("#fetch-todos").click();

      const cards = ".todo-item-label";

      cy.get("#sort-high-to-low").click();

      cy.get(cards).first().as('c4')
      cy.get('@c4').should("contain", todosDesc[0].title);

      cy.wait(1000);

      cy.get(cards)
        .eq(Math.ceil(numOfTodos / 2)).as('c5')
        cy.get('@c5').should("contain", todosDesc[Math.ceil(numOfTodos / 2)].title);

      cy.get(cards)
        .last().as('c6')
        cy.get('@c6').should("contain", todosDesc[numOfTodos - 1].title);

      cy.then(() => {
        acc_score += 1;
      });
    });

    it("Able to filter completed", () => {
      cy.get("#fetch-todos").click();

      const cards = ".todo-item-label";

      cy.get("#filter-completed").click();

      cy.wait(1000);

      cy.get(cards).eq(1).find(".todo-item-checkbox").should("be.checked");
      cy.get(cards).eq(2).find(".todo-item-checkbox").should("be.checked");
      cy.get(cards).eq(3).find(".todo-item-checkbox").should("be.checked");
      cy.get(cards).eq(4).find(".todo-item-checkbox").should("be.checked");
      cy.get(cards).eq(5).find(".todo-item-checkbox").should("be.checked");

      cy.then(() => {
        acc_score += 1;
      });
    });

    it("Able to filter pending", () => {
      cy.get("#fetch-todos").click();

      const cards = ".todo-item-label";

      cy.get("#filter-pending").click();

      cy.wait(1000);

      cy.get(cards).eq(0).find(".todo-item-checkbox").should("not.be.checked");
      cy.get(cards).eq(1).find(".todo-item-checkbox").should("not.be.checked");
      cy.get(cards).eq(2).find(".todo-item-checkbox").should("not.be.checked");
      cy.get(cards).eq(3).find(".todo-item-checkbox").should("not.be.checked");
      cy.get(cards).eq(4).find(".todo-item-checkbox").should("not.be.checked");
      cy.get(cards).eq(5).find(".todo-item-checkbox").should("not.be.checked");

      cy.then(() => {
        acc_score += 1;
      });
    });

    it("Able to patch completed todo item on click", () => {
      cy.get("#fetch-todos").click();
      const cards = ".todo-item-label";
      let isCheckedOriginally;
      let isCheckedAfterReload;

      cy.get(cards)
        .first()
        .find(".todo-item-checkbox")
        .then(($checkbox) => {
          isCheckedOriginally = $checkbox.prop("checked");

          cy.get(cards).first().click();
          cy.get("#fetch-todos").click();

          cy.get(cards)
            .first()
            .find(".todo-item-checkbox")
            .then(($checkbox) => {
              isCheckedAfterReload = $checkbox.prop("checked");
            });

          console.log(isCheckedOriginally, isCheckedAfterReload);
          cy.log(isCheckedOriginally, isCheckedAfterReload);

          expect(isCheckedOriginally).not.to.equal(isCheckedAfterReload);
        });

      cy.then(() => {
        acc_score += 2;
      });
    });

    it(`generate score`, () => {
      //////////////
      console.log(acc_score);
      let result = {
        id,
        marks: Math.floor(acc_score),
      };
      result = JSON.stringify(result);
      cy.writeFile("results.json", `\n${result},`, { flag: "a+" }, (err) => {
        if (err) {
          console.error(err);
        }
      });
      //////////////////
    });
  }); // describe
});
