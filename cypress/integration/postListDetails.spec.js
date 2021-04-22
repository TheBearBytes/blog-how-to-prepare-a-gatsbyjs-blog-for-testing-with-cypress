describe("Blog post display every detail on list", async () => {
  let postFixture;

  before(() => {
    cy.fixture("blog/post").then((post) => {
      postFixture = post;
    });
  });

  beforeEach(() => {
    cy.visit("/");
  })

  it("Title is displayed", () => {
    const {title} = postFixture;
    cy.get(`*[data-cy="${title}-title"]`).should("contain.text", title);
  });

  it("Date is displayed", () => {
    const {title, date} = postFixture;
    cy.get(`*[data-cy="${title}-date"]`).should("contain.text", date);
  });
});
