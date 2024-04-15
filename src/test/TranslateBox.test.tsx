import { afterEach, describe, expect, test, vi } from "vitest";
import {
  render,
  screen,
  fireEvent,
  waitFor,
  cleanup,
} from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import Translatebox from "../components/translatebox/Translatebox";
import { LanguageProvider } from "../context/LanguageProvider";
import { TranslateProvider } from "../context/TranslateProvider";
import Resultbox from "../components/resultbox/Resultbox";

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


  // Simula el módulo antes de que se importe en cualquier otro lugar
  vi.mock("../api/translationApi", () => ({
    translateText: vi.fn(() => Promise.resolve("Texto traducido")),
  }));
  test("it should tranlate the text", async () => {
    render(
      <LanguageProvider>
        <TranslateProvider>
          <Translatebox />
          <Resultbox />
        </TranslateProvider>
      </LanguageProvider>
    );
    const textarea = screen.getByLabelText("text_area_translate");
    const translatebutton = screen.getByRole("button", { name: /Traducir/i });
    fireEvent.change(textarea, {target: { value: "hola" }});
    fireEvent.click(translatebutton);
    const loader = screen.getByLabelText("loader");
    expect(loader).toBeDefined();
    const resultbox = screen.getByLabelText("result_box");
    expect(resultbox.value)
    await waitFor(()=>{
    })
    // expect(translatebutton).toBeDefined();
  });
});
