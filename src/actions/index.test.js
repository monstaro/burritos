import * as actions from "../actions";

describe("Action Creators", () => {
  it("should have a type of SET_ORDERS and a correct payload", () => {
    const expectedAction = {
      type: "SET_ORDERS",
      orders: [
        {
          id: 1,
          name: "Pat",
          ingredients: [
            "beans",
            "lettuce",
            "carnitas",
            "queso fresco",
            "jalapeno",
          ],
        },
        {
          id: 2,
          name: "Sam",
          ingredients: [
            "steak",
            "pico de gallo",
            "lettuce",
            "carnitas",
            "queso fresco",
            "jalapeno",
          ],
        },
      ],
    };
    const result = actions.setOrders([
      {
        id: 1,
        name: "Pat",
        ingredients: [
          "beans",
          "lettuce",
          "carnitas",
          "queso fresco",
          "jalapeno",
        ],
      },
      {
        id: 2,
        name: "Sam",
        ingredients: [
          "steak",
          "pico de gallo",
          "lettuce",
          "carnitas",
          "queso fresco",
          "jalapeno",
        ],
      },
    ]);
    expect(result).toEqual(expectedAction);
  });
  it("should have a type ADD_ORDER and correct payload", () => {
    const expectedAction = {
      type: "ADD_ORDER",
      order: [
        {
          id: 3,
          name: "Samuel",
          ingredients: ["steak", "water", "ham", "expired mushrooms"],
        },
      ],
    };
    const result = actions.addOrder(expectedAction.order);
    console.log(result, expectedAction)
    expect(result).toEqual(expectedAction);
  });
});
