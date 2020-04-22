import React from "react";
import OrderForm from "./OrderForm";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "../../reducers";

describe("Order Form", () => {
  it("Can be interacted with", () => {
    const store = createStore(rootReducer);
    const { getByTestId, getByPlaceholderText } = render(
        <Provider store={store}>
    <OrderForm />
    </Provider>
    );
    fireEvent.change(getByPlaceholderText("Name"), {
      target: { value: "userTest" },
    });
    expect(getByTestId("submit-btn").disabled).toBe(true)
    fireEvent.click(getByTestId("beans"))
    expect(getByTestId("submit-btn").disabled).toBe(false)
    fireEvent.click(getByTestId("submit-btn"))
    expect(getByPlaceholderText("Name").value).toBe('')
    expect(getByTestId("submit-btn").disabled).toBe(true)
  });
});
