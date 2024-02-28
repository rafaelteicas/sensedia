import { fireEvent, render, waitFor } from "@/test";
import { Header } from "..";

const mockedFn = vitest.fn(() => "navigate");

describe("Header", () => {
    vitest.mock("next/navigation", async (importOriginal) => {
        const mod = await importOriginal<typeof import("next/navigation")>();
        return {
            ...mod,
            useRouter: () => ({
                push: mockedFn,
            }),
            usePathname: () => "/",
        };
    });

    it("user should be push to login when press push", async () => {
        const { getByText, debug } = render(<Header />);
        const login = getByText(/login/i);
        await waitFor(() => fireEvent.click(login));
        expect(mockedFn()).toBeTruthy();
    });
});
