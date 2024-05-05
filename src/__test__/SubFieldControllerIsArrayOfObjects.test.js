import React from "react";
import { render, fireEvent } from "@testing-library/react";
import SubFieldControllerIsArrayOfObjects from "../components/dashboard/controllers/subControllers/SubFieldControllerIsArrayOfObjects";

test("renders component with showSection true and open false", () => {
  const mockTargetSection = {
    // Provide mock data for targetSection
  };
  const { getByText, queryByText } = render(
    <SubFieldControllerIsArrayOfObjects
      targetSection={mockTargetSection}
      showSection={true}
      open={false}
      // Add other required props here
    />
  );

  // Ensure that the component renders the label text
  expect(getByText("YourLabel")).toBeInTheDocument();

  // Ensure that the component does not render certain elements when open is false
  expect(queryByText("SomeElement")).toBeNull();

  // Simulate clicking on the label to toggle open state
  fireEvent.click(getByText("YourLabel"));

  // Ensure that the component renders certain elements when open is true
  expect(queryByText("SomeElement")).toBeInTheDocument();
});
