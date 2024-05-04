import React from "react";
import { render } from "@testing-library/react";
import SubFieldControllerIsArray from "../components/dashboard/controllers/subControllers/SubFieldControllerIsArray";

describe("SubFieldControllerIsArray", () => {
  it("renders correctly when showSection is true", () => {
    const props = {
      targetSection: {
        /* mock targetSection object */
      },
      cardIndex: 0,
      sectionName: "mockSectionName",
      blockName: "mockBlockName",
      subBlockName: "mockSubBlockName",
      dispatchRef: {
        /* mock dispatchRef object with required methods */
      },
      showSection: true,
      numOfFields: 3, // Mock value for numOfFields
    };

    const { getByText } = render(<SubFieldControllerIsArray {...props} />);

    // Write assertions to verify the rendered output
    expect(getByText("mockSubBlockName")).toBeInTheDocument();
    // Add more assertions as needed
  });

  // Add more test cases for different scenarios as needed
});
