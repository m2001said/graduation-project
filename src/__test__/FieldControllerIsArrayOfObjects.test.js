import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; // for additional matchers

import FieldControllerIsArrayOfObjects from "../components/dashboard/controllers/subControllers/FieldControllerIsArrayOfObjects";

// Mock the useDispatch and useSelector hooks
jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

describe("FieldControllerIsArrayOfObjects", () => {
  it("should render correctly", () => {
    // Mock necessary props
    const props = {
      targetSection: {
        // mock your targetSection data here
      },
      cardIndex: 0,
      sectionName: "mockSection",
      subName: "mockSubName",
      blockName: "mockBlockName",
      dispatchRef: {
        // mock your dispatchRef functions here
      },
      numOfFields: 3,
    };

    // Render the component
    const { getByText, getByLabelText } = render(<FieldControllerIsArrayOfObjects {...props} />);

    // Assert that the component renders correctly
    expect(getByText("mockSubName1")).toBeInTheDocument(); // Assuming you concatenate cardIndex + 1 somewhere
    expect(getByLabelText("Toggle Section")).toBeInTheDocument(); // Adjust this to match your label text
  });

  it("should toggle section visibility when label is clicked", () => {
    const props = {
      // mock props
    };
    const { getByLabelText } = render(<FieldControllerIsArrayOfObjects {...props} />);

    const label = getByLabelText("Toggle Section");
    fireEvent.click(label);

    expect(label).toHaveClass("controller-label"); // Assuming this class is added when section is expanded
  });

  // Add more test cases as needed for other functionalities
});
