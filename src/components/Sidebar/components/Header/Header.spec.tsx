import React from "react";
import { render, screen } from "@testing-library/react";

import { Header } from ".";

jest.mock("next/image", () => {
  return ({ src, alt }: any) => <img src={src} alt={alt} />;
});

describe("Header", () => {
  it("should be able to render an open header with the correct image", () => {
    render(<Header open={true} />);

    const image = screen.getByRole("img", { name: "Logo do Grupo GCB." });

    expect(image).toBeInTheDocument();
    expect(image.getAttribute("alt")).toBe("Logo do Grupo GCB.");
  });

  it("should be able to render a closed header with the correct image", () => {
    render(<Header open={false} />);

    const image = screen.getByRole("img", {
      name: "Ícone do touro do Grupo GCB.",
    });

    expect(image).toBeInTheDocument();
    expect(image.getAttribute("alt")).toBe("Ícone do touro do Grupo GCB.");
  });
});
