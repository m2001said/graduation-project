import React from "react";
import { render, fireEvent } from "@testing-library/react";
import FieldControllerIsArray from "../components/dashboard/controllers/subControllers/FieldControllerIsArray";

describe("FieldControllerIsArray component", () => {
  test("renders correctly", () => {
    const mockDispatch = jest.fn();
    const mockDispatchRef = {
      addElementToArray: jest.fn(),
      deleteElement: jest.fn(),
      reorder: jest.fn(),
      updateTemplate: jest.fn(),
    };
    const targetSection = {
      blockName: ["element1", "element2"],
    };
    const { getByText, queryByText } = render(
      <FieldControllerIsArray
        targetSection={targetSection}
        sectionName="sectionName"
        subName="subName"
        blockName="blockName"
        dispatchRef={mockDispatchRef}
        numOfFields={2}
      />
    );

    // Check if blockName is rendered
    expect(getByText("blockName")).toBeInTheDocument();

    // Check if elements are rendered
    expect(getByText("element1")).toBeInTheDocument();
    expect(getByText("element2")).toBeInTheDocument();

    // Check if "Add" button is rendered
    expect(queryByText("Add element")).toBeNull(); // Button should not be visible initially

    // Click on label to expand the section
    fireEvent.click(getByText("blockName"));

    // Check if "Add" button is rendered after expanding the section
    expect(getByText("Add Block")).toBeInTheDocument();

    // Click on "Add" button
    fireEvent.click(getByText("Add Block"));

    // Check if the addNewElement function is called
    expect(mockDispatchRef.addElementToArray).toHaveBeenCalled();
  });
});
