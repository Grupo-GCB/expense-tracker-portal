import mockRouter from "next-router-mock";

 import { render, screen, fireEvent } from "@/tests/providers";
import { Introducao } from "./page";
 
jest.mock("next/navigation", () => require("next-router-mock"));

export const mockUseUser = jest.fn(() => ({
  user: {
    id: 123,
    name: 'Usuário de Exemplo',
  },
  error: null,
  isLoading: false,
}));

describe("Landing Page", () => {
  it("should be able to render correctly", () => {
    render(<Introducao />);

    const logo = screen.getByRole("img", { name: "Logo do Grupo GCB" });
    expect(logo).toBeInTheDocument();

    const spanHeader = screen.getByText("Expensive Tracker");
    expect(spanHeader).toBeInTheDocument();

    const title = screen.getByText(
      "Trilhe o caminho da estabilidade financeira"
    );
    expect(title).toBeInTheDocument();

    const button = screen.getByRole("button", { name: "Experimentar!" });
    expect(button).toBeInTheDocument();

    const image = screen.getByRole("img", { name: "preview-of-home" });
    expect(image).toBeInTheDocument();
  });

  it("should be able render loading icon when button is clicked", async () => {
   render(<Introducao />);

    const button = screen.getByTestId("login-page-button");
    expect(button).toBeInTheDocument();
    expect(button).toBeEnabled();

    fireEvent.click(button);

    const loadingIcon = screen.getByTestId("loading-icon");
    expect(loadingIcon).toBeInTheDocument();
    expect(button).toBeDisabled();
  });

  it("should be able to redirect to login page when button is clicked", () => {
   render(<Introducao />);

    const button = screen.getByTestId("login-page-button");
    expect(button).toBeInTheDocument();

    fireEvent.click(button);

    expect(mockRouter).toMatchObject({
      asPath: "/api/auth/login",
      pathname: "/api/auth/login",
    });
  });
});
