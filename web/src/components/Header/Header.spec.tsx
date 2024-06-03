import React from "react";
import { render, screen } from "@testing-library/react";

import { Header } from "./Header";

describe("Header", () => {
    it("should render", async () => {
        const childrenValue = "test";
        render(<Header>{childrenValue}</Header>);

        await screen.findByText(childrenValue);
    });
});
