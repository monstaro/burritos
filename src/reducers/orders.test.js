import { orders } from "./orders";
import { setOrders, addOrder } from "../actions";

describe("Orders", () => {
  it("should return an initial state", () => {
    const expected = { orders: [], type: "SET_ORDERS" };
    const result = setOrders([], []);
    expect(result).toEqual(expected);
  });
  it("should return an array of orders when recieving SET_ORDERS", () => {
    const mockAction = {
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
    const mockOrders = [
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
    ];
    const result = orders(mockOrders, mockAction);
    expect(result).toEqual(mockOrders);
  });
  it("should return an array of orders plus one when recieving ADD_ORDER", () => {
    const mockAction = {
      type: "ADD_ORDERS",
      orders: [
        {
          id: 3,
          name: "Samuel",
          ingredients: [
            "steak",
            "water",
            "ham",
            "expired mushrooms"
          ],
        },
      ],
    };
    const mockOrders = [
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
      {
        id: 3,
        name: "Samuel",
        ingredients: [
          "steak",
          "water",
          "ham",
          "expired mushrooms"
        ],
      }
    ];
    const result = orders(mockOrders, mockAction);
    expect(result).toEqual(mockOrders);
  });
});
