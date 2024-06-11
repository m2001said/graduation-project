import React from "react";
import { Provider } from "react-redux";
import { render, fireEvent, cleanup, screen } from "@testing-library/react";
import { createStore } from "redux";
import { MemoryRouter } from "react-router-dom";
import BuildYourPage from "../pages/BuildYourPage";
import "@testing-library/jest-dom/extend-expect";

// Mock Redux store
const store = createStore(() => ({}));

afterEach(cleanup);

it("renders without crashing", () => {
  // Arrange: Create a div element to render the component into
  const div = document.createElement("div");

  // Act: Render the component with Redux Provider and MemoryRouter
  render(
    <Provider store={store}>
      <MemoryRouter>
        <BuildYourPage />
      </MemoryRouter>
    </Provider>,
    div
  );

  // Assert: Check if the component renders without errors
  expect(screen.getByText("Build Your Own Page")).toBeInTheDocument();
});

it("allows user interaction with checkboxes", () => {
  // Arrange: Render the component
  render(
    <Provider store={store}>
      <MemoryRouter>
        <BuildYourPage />
      </MemoryRouter>
    </Provider>
  );

  // Act: Simulate user interaction by clicking checkboxes
  const navbarCheckbox = screen.getByLabelText("navbar sections");
  const heroCheckbox = screen.getByLabelText("hero sections");
  fireEvent.click(navbarCheckbox);
  fireEvent.click(heroCheckbox);

  // Assert: Check if the state updates correctly
  expect(navbarCheckbox).toBeChecked();
  expect(heroCheckbox).toBeChecked();
});

it("handles form submission correctly", () => {
  // Arrange: Render the component
  render(
    <Provider store={store}>
      <MemoryRouter>
        <BuildYourPage />
      </MemoryRouter>
    </Provider>
  );

  // Act: Simulate form submission by clicking the button
  const generateButton = screen.getByText("Generate your website");
  fireEvent.click(generateButton);

  // Assert: Check if the correct actions are dispatched or navigation occurs
  // Add your specific assertions here based on the expected behavior after form submission
});
