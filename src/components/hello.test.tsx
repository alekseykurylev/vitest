import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Hello } from "./hello";

describe("Hello component", () => {
    it("renders text with the given name", () => {
        render(<Hello name="Next.js" />);
        expect(screen.getByText("Hello, Next.js!")).toBeInTheDocument();
    });

    it("changes text when name changes", () => {
        render(<Hello name="Aleksey" />);
        expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Hello, Aleksey!");
    });
});