import { setupWorker } from "msw/browser";
import { userListMock } from "./handlers/user-list-mock";

export const worker = setupWorker(userListMock);

export async function enableMSW() {
    if (process.env.MODE !== "test") {
        return;
    }
    await worker.start();
}
