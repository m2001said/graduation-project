import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; // For DOM assertion methods
import { useDispatch } from "react-redux";
import ChangeImageController from "../components/dashboard/controllers/ChangeImageController";

// Mock the useDispatch hook
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: jest.fn(),
}));

describe("ChangeImageController component", () => {
  const mockSrc = "mock-image-url";
  const mockDispatchRef = jest.fn();
  const mockDispatch = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    useDispatch.mockReturnValue(mockDispatch);
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
    fireEvent.change(changeButton, { target: { files: [mockResult] } });

    expect(mockDispatch).toHaveBeenCalledWith(mockDispatchRef("imgUrl", mockResult));
  });

  it("closes the widget on upload error", () => {
    const { getByText } = render(<ChangeImageController field="imgUrl" src={mockSrc} dispatchRef={mockDispatchRef} />);

    const changeButton = getByText("Change");
    fireEvent.click(changeButton);

    // Simulate upload error
    const mockWidget = { close: jest.fn() };
    fireEvent.change(changeButton, { target: { error: true } });

    expect(mockWidget.close).toHaveBeenCalled();
    expect(mockDispatch).not.toHaveBeenCalled();
  });
});
