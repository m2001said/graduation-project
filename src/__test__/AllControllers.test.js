
import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useDispatch } from "react-redux";
import AllControllers from "../components/dashboard/controllers/AllControllers";

jest.mock("react-redux", () => ({
    useDispatch: jest.fn(),
}));

describe("AllControllers", () => {
    test("renders the component and checks initial state", () => {
        const updateAll = {
            updateTemplate: jest.fn(),
            addNewElement: jest.fn(),
            deleteSection: jest.fn(),
            reorderSection: jest.fn(),
        };

        // Render the component
        render(
            <AllControllers
                controllerSection="exampleSection"
                targetTemplate={{
                    exampleSection: {
                        field1: "value1",
                        field2: "value2",
                    },
                }}
                updateAll={updateAll}
                isFixed={false}
                isFirst={false}
                isLast={false}
            />
        );

        expect(screen.getByText("exampleSection section")).toBeInTheDocument();

        // Check the initial state of the "open" variable
        expect(screen.queryByText("Add field1")).not.toBeInTheDocument();
        expect(screen.queryByText("Add field2")).not.toBeInTheDocument();

        // Check if the "open" state changes when the section name is clicked
        userEvent.click(screen.getByText("exampleSection section"));
        expect(screen.getByText("Add field1")).toBeInTheDocument();
        expect(screen.getByText("Add field2")).toBeInTheDocument();
    });

    test("dispatches actions correctly", () => {
        // Mock the updateAll prop and useDispatch
        const updateAll = {
            updateTemplate: jest.fn(),
            addNewElement: jest.fn(),
            deleteSection: jest.fn(),
            reorderSection: jest.fn(),
        };
        useDispatch.mockReturnValue(jest.fn());

        // Render the component
        render(
            <AllControllers
                controllerSection="exampleSection"
                targetTemplate={{
                    exampleSection: {
                        field1: "value1",
                        field2: "value2",
                    },
                }}
                updateAll={updateAll}
                isFixed={false}
                isFirst={false}
                isLast={false}
            />
        );

        // Click the "Add field1" button and check if the addNewElement action is dispatched
        userEvent.click(screen.getByText("Add field1"));
        expect(updateAll.addNewElement).toHaveBeenCalledWith({ section: "exampleSection", blockName: "field1" });

        // Click the "Add field2" button and check if the addNewElement action is dispatched
        userEvent.click(screen.getByText("Add field2"));
        expect(updateAll.addNewElement).toHaveBeenCalledWith({ section: "exampleSection", blockName: "field2" });

        // Click the delete button and check if the deleteSection action is dispatched
        userEvent.click(screen.getByLabelText("Delete section"));
        expect(updateAll.deleteSection).toHaveBeenCalledWith({ section: "exampleSection" });

        // Click the up button and check if the reorderSection action is dispatched
        userEvent.click(screen.getByLabelText("Move section up"));
        expect(updateAll.reorderSection).toHaveBeenCalledWith({ section: "exampleSection", type: "up" });

        // Click the down button and check if the reorderSection action is dispatched
        userEvent.click(screen.getByLabelText("Move section down"));
        expect(updateAll.reorderSection).toHaveBeenCalledWith({ section: "exampleSection", type: "down" });
    });
});