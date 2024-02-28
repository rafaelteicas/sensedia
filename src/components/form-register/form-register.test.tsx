import { FormRegister } from "@/components";
import { fireEvent, render } from "@/test";

describe("FormRegister", () => {
    it("should button be disabled", () => {
        const { getByText } = render(<FormRegister />);
        expect(getByText(/registrar/i).closest("button")).toBeDisabled();
    });
});
