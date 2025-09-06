import { render, screen, waitFor } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { User } from "./user";

describe("User component with MSW", () => {
    it("renders user from mocked API", async () => {
        render(<User userId={1} />);

        // ждём, пока компонент "получит данные"
        await waitFor(() =>
            expect(screen.getByText("User: Aleksey")).toBeInTheDocument()
        );
    });
});