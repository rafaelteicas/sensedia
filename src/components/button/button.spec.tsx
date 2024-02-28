import { Button } from "@/components";
import { fireEvent, render } from "@testing-library/react";
describe("Button", () => {
    it("should be rendered", () => {
        const button = render(<Button />);
        expect(button).toBeTruthy();
    });
    it("should be not possible to press if disabled", () => {
        const mockedFn = vitest.fn();
        const { getByText } = render(
            <Button onClick={mockedFn} disabled={true}>
                disabled
            </Button>
        );
        expect(getByText("disabled").closest("button")).toBeDisabled();
    });
});
