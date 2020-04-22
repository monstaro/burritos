import React from "react";
import App from "./App";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "../../reducers";

describe("App", () => {
  it("Can render", () => {
    const store = createStore(rootReducer);
    const { getByTestId, getByText } = render(
    <Provider store={store}>
    <App />
    </Provider>
    );
  });
  it('should  be able to submit a list of ingredients', () => {
    const store = createStore(rootReducer);
    const { getByTestId, getByText } = render(
    <Provider store={store}>
    <App />
    </Provider>
    )
    fireEvent.click(getByTestId("beans"))
    expect(getByText('Order: beans')).toBeInTheDocument()
    fireEvent.click(getByTestId("sour cream"))
    expect(getByText('Order: beans, sour cream')).toBeInTheDocument()
    fireEvent.click(getByTestId("submit-btn"))
    expect(getByText('Order: Nothing selected')).toBeInTheDocument()
  })
});
