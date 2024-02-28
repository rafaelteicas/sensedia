import { render } from "@/test";
import { Avatar } from "..";

describe("Avatar", () => {
    it("should get initials to display avatar", () => {
        const { getByText } = render(<Avatar name="User Name" size="lg" />);
        expect(getByText("UN")).toBeTruthy();
    });
});
