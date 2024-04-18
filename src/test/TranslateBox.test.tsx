import { afterEach, describe, expect, test } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import Translatebox from "../components/translatebox/Translatebox";
import { LanguageProvider } from "../context/LanguageProvider";
describe("Testing TranslateBox Component", () => {
  afterEach(() => {
    cleanup();
  });
  test("it should render the Translatebox component", () => {
    render(
      <LanguageProvider>
        <Translatebox />
      </LanguageProvider>
    );
    const textarea = screen.getByLabelText("text_area_translate");
    const translatebutton = screen.getByRole("button", { name: /Traducir/i });
    expect(textarea).toBeDefined();
    expect(translatebutton).toBeDefined();
  });
});
