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
    moduleDirectories: ["node_modules", "<rootDir>/"],
    rootDir: __dirname,
    moduleNameMapper: {
        "#(.*)": "<rootDir>/node_modules/$1",
    },
};
export default createJestConfig(config);
