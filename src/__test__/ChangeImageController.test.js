import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; // For DOM assertion methods

import ChangeImageController from "../components/dashboard/controllers/ChangeImageController";

describe("ChangeImageController component", () => {
  const mockSrc = "mock-image-url";
  const mockDispatchRef = jest.fn();
  const mockDispatch = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders with the correct image source and change button", () => {
    const { getByAltText, getByText } = render(<ChangeImageController field="imgUrl" src={mockSrc} dispatchRef={mockDispatchRef} />);

    const imgElement = getByAltText("img");
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute("src", mockSrc);

    const changeButton = getByText("Change");
    expect(changeButton).toBeInTheDocument();
  });

  it("dispatches the correct action on upload success", () => {
    const { getByText } = render(<ChangeImageController field="imgUrl" src={mockSrc} dispatchRef={mockDispatchRef} />);

    const changeButton = getByText("Change");
    fireEvent.click(changeButton);

    // Simulate upload success
    const mockResult = "mock-upload-result";
    const mockWidget = { close: jest.fn() };
    fireEvent.upload(mockWidget, { target: { files: [mockResult] } });

    expect(mockDispatch).toHaveBeenCalledWith(mockDispatchRef("imgUrl", mockResult));
  });

  it("closes the widget on upload error", () => {
    const { getByText } = render(<ChangeImageController field="imgUrl" src={mockSrc} dispatchRef={mockDispatchRef} />);

    const changeButton = getByText("Change");
    fireEvent.click(changeButton);

    // Simulate upload error
    const mockWidget = { close: jest.fn() };
    fireEvent.upload(mockWidget, { error: true });

    expect(mockWidget.close).toHaveBeenCalled();
    expect(mockDispatch).not.toHaveBeenCalled();
  });
});
