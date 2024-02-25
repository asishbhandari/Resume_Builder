import {describe, it, expect, test} from "vitest";
import {render, screen} from "@testing-library/react";
import Home from "../pages/homePage";

describe("Home", ()=>{
    it("Text to appear on loading", ()=>{
        render(<Home />);
        const text= screen.getByText("Select a template to get started");
        expect(text).toBeInTheDocument();
    })
})
