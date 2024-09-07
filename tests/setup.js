import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/vue";
import { afterEach } from "vitest";
import * as matchers from "@testing-library/jest-dom/matchers";

afterEach(() => {
  cleanup();
});
