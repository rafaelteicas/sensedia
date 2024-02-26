import { setupServer } from "msw/node";
import { userHandlers } from "./handlers/user/user-handlers";

export const server = setupServer(...userHandlers);
