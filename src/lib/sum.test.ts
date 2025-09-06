import { describe, it, expect } from "vitest";
import { sum } from "./sum";

describe("sum function", () => {
    it("adds two positive numbers", () => {
        expect(sum(2, 3)).toBe(5);
    });

    it("adds negative numbers", () => {
        expect(sum(-2, -3)).toBe(-5);
    });

    it("handles mix of positive and negative", () => {
        expect(sum(5, -3)).toBe(2);
    });
});