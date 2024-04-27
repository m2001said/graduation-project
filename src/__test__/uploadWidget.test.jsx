import React from "react";
import { render, fireEvent } from "@testing-library/react";
import UploadWidget from "../components/dashboard/cloudinary/UploadWidget";

describe("UploadWidget", () => {
    it("should render children", () => {
        const ChildComponent = () => <div>Child Component</div>;
        const { getByText } = render(
            <UploadWidget>
                {() => <ChildComponent />}
            </UploadWidget>
        );
        expect(getByText("Child Component")).toBeInTheDocument();
    });

    it("should call onUpload when upload is successful", () => {
        const onUploadMock = jest.fn();
        window.cloudinary = {
            createUploadWidget: jest.fn().mockReturnValue({
                open: jest.fn(),
            }),
        };
        const { getByText } = render(
            <UploadWidget onUpload={onUploadMock}>
                {({ open }) => <button onClick={open}>Open</button>}
            </UploadWidget>
        );
        fireEvent.click(getByText("Open"));
        // Mocking a successful upload event
        const successResult = { event: "success" };
        window.cloudinary.createUploadWidget.mock.calls[0][1](null, successResult);
        expect(onUploadMock).toHaveBeenCalledWith(null, successResult, expect.any(Object));
    });

    it("should log a warning if cloudName or uploadPreset is not provided", () => {
        const consoleWarnSpy = jest.spyOn(console, "warn").mockImplementation(() => { });
        window.cloudinary = {
            createUploadWidget: jest.fn().mockReturnValue({
                open: jest.fn(),
            }),
        };
        const { unmount } = render(
            <UploadWidget>
                {({ open }) => <button onClick={open}>Open</button>}
            </UploadWidget>
        );
        unmount();
        expect(consoleWarnSpy).toHaveBeenCalled();
        consoleWarnSpy.mockRestore();
    });
});