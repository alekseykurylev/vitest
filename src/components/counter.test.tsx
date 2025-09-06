import {fireEvent, render, screen} from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Counter } from "./counter";


describe("Counter component", () => {
    it("renders initial count", () => {
        render(<Counter />);
        expect(screen.getByText("Count: 0")).toBeInTheDocument();
    });

    it("increments count when button is clicked", () => {
        render(<Counter />);

        // находим кнопку
        const button = screen.getByRole("button", { name: "Increment" });

        // кликаем один раз
        fireEvent.click(button);
        expect(screen.getByText("Count: 1")).toBeInTheDocument();

        // кликаем ещё раз
        fireEvent.click(button);
        expect(screen.getByText("Count: 2")).toBeInTheDocument();

    })
});