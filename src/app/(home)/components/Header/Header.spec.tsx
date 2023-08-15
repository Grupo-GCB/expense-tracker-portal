import React from "react";
import { render, screen } from "@testing-library/react";

import { Header } from "./index";

describe("Header", () => {
  it("should be able to render correctly", () => {
    render(<Header />);

    const image = screen.getByRole("img", { name: "Logo do Grupo GCB" });
    expect(image).toBeInTheDocument();

    const span = screen.getByText("Expensive Tracker");
    expect(span).toBeInTheDocument();
  });
});
