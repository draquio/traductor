/* eslint-disable @typescript-eslint/no-explicit-any */

import { MapLanguages } from "../utils/function";
import { describe, expect, test } from "vitest";
import LanguagesListMocks from "../mocks/languages.json";
describe("Testing MapLanguage Function", () => {
  test("it should has the correct properties when a correct data is provided", () => {
    const data = MapLanguages(LanguagesListMocks);
    data.forEach((language) => {
      expect(language).toHaveProperty("key");
      expect(language).toHaveProperty("text");
      expect(language).toHaveProperty("value");
    });
  });

  test("it should return an empty array if a empty data is provided", () => {
    const data = MapLanguages([]);
    expect(data).toEqual([])
  });

  test("it should return an empty array if a null is provided", () => {
    const data = MapLanguages(null as any);
    expect(data).toEqual([])
  });

});
