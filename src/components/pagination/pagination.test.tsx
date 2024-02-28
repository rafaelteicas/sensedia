import { fireEvent, render } from "@/test";
import { Pagination } from "..";

describe("Pagination", () => {
    it("should pass to the next page on click next", () => {
        const mockedNext = vi.fn();
        const { getByText } = render(
            <Pagination
                onClick={{
                    first: vi.fn(),
                    last: vi.fn(),
                    next: mockedNext,
                    previous: vi.fn(),
                    midNext: vi.fn(),
                    midPrevious: vi.fn(),
                }}
                items={20}
                perPage={10}
                currentPage={1}
            />
        );
        const nextButton = getByText(/Próximo/i);
        fireEvent.click(nextButton);
        expect(mockedNext).toHaveBeenCalled();
        expect(getByText("2")).toBeTruthy();
    });
});
