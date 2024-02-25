import {describe, it, expect, test} from "vitest";
import {render, screen} from "@testing-library/react";
import PersonalInfo from "../components/PersonalInfo";

describe("From Components", ()=>{
    it("Loading of form component", ()=>{
        const component= render(<PersonalInfo />);
        const childElement = component.getByLabelText("email");
        expect(childElement).toBeInTheDocument();
    })
})
