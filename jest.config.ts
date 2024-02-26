import type { Config } from "jest";
import nextJest from "next/jest.js";

const createJestConfig = nextJest({
    dir: "./",
});

const config: Config = {
    setupFilesAfterEnv: ["<rootDir>/src/test/setup.ts"],
    setupFiles: ["./jest.polyfills.js"],
    testEnvironment: "jsdom",
    preset: "ts-jest",
    verbose: true,
    testEnvironmentOptions: {
        customExportConditions: [""],
    },
};
export default createJestConfig(config);
