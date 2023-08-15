import React from "react";
import { render, screen } from "@testing-library/react";

import { Header } from ".";

jest.mock("next/image", () => {
  return ({ src, alt }: any) => <img src={src} alt={alt} />;
});

describe("Header", () => {
  it("should be able to render an open header with the correct image", () => {
    render(<Header open={true} />);

    const image = screen.getByRole("img", { name: "Logo da GCB." });

    expect(image).toBeInTheDocument();
    expect(image.getAttribute("alt")).toBe("Logo da GCB.");
  });

  it("should be able to render a closed header with the correct image", () => {
    render(<Header open={false} />);

    const image = screen.getByRole("img", {
      name: "Metade da cabeça do touro da GCB.",
    });

    expect(image).toBeInTheDocument();
    expect(image.getAttribute("alt")).toBe("Metade da cabeça do touro da GCB.");
  });
});
