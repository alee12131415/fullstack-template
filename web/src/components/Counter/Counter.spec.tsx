import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import { Counter } from "./Counter";

describe("Counter", () => {
    it("should render initial value", async () => {
        const initialValue = 0;
        render(<Counter initialValue={initialValue} />);

        await screen.findByText(initialValue);
    });

    it("should increment with step value", async () => {
        const step = 1;
        render(<Counter step={step} />);

        const valueElement = await screen.findByText(0);
        const incrementButton = await screen.findByText(">");
        fireEvent.click(incrementButton);

        expect(valueElement.innerHTML).toContain("1");
    });

    it("should decrement with step value", async () => {
        const step = 1;
        render(<Counter step={step} />);

        const valueElement = await screen.findByText(0);
        const decrementButton = await screen.findByText("<");
        fireEvent.click(decrementButton);

        expect(valueElement.innerHTML).toContain("-1");
    });
});
