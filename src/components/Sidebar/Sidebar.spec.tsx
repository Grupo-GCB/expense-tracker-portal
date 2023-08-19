import { useUser } from "@auth0/nextjs-auth0/client";
import { fireEvent, render, screen } from "@testing-library/react";
import nookies from "nookies";

import { Sidebar } from ".";

jest.mock("@auth0/nextjs-auth0/client");
jest.mock("nookies");
jest.mock("next/navigation", () => ({
  useRouter: jest.fn()
}));

const mockUseUser = useUser as jest.Mock;

const mockUserData = {
  name: "John Doe",
  picture:
    "https://e7.pngegg.com/pngimages/885/607/png-clipart-dynamics-365-computer-icons-user-profile-login-others-miscellaneous-angle.png",
};

describe("Sidebar", () => {
  beforeEach(() => {
    mockUseUser.mockReturnValue({ user: mockUserData });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should be able to toggle sidebar when the hamburguer menu is clicked", () => {
    render(<Sidebar />);
    const hamburguerMenu = screen.getByTestId("hamburguerMenu");

    fireEvent.click(hamburguerMenu);

    expect(screen.getByTestId("navMenu")).toHaveClass("sm:w-full");
  });

  it("should be able to close sidebar when the close icon is clicked", () => {
    render(<Sidebar />);
    const hamburguerMenu = screen.getByTestId("hamburguerMenu");
    const close = screen.getByTestId("close");

    fireEvent.click(hamburguerMenu);
    fireEvent.click(close);

    expect(screen.getByTestId("navMenu")).toHaveClass("sm:-left-full");
  });

  it("should be able to render the user's profile with a picture and name", () => {
    render(<Sidebar />);
    const userPicture = screen.getByAltText("Imagem do usuário.");
    const userName = screen.getByText("John Doe");

    expect(userPicture).toBeInTheDocument();
    expect(userName).toBeInTheDocument();
  });

  it("should be able to destroy the user token when the Sign Out button is clicked", () => {
    render(<Sidebar />);
    const signOutButton = screen.getByTestId("signOut");

    fireEvent.click(signOutButton);

    expect(nookies.destroy).toHaveBeenCalledWith(null, "@user_token", {
      path: "/",
    });
  });

  it("should be able to display a flex layout when the user is logged in", () => {
    render(<Sidebar />);

    const navMenu = screen.getByTestId("navMenu");

    expect(navMenu).toHaveClass("flex");
    expect(navMenu).not.toHaveClass("hidden");
  });

  it("should be able to render hidden layout when user is not logged in", () => {
    mockUseUser.mockReturnValue({ user: null });

    render(<Sidebar />);

    const navMenu = screen.getByTestId("navMenu");

    expect(navMenu).toHaveClass("hidden");
  });

  it("should be able to render all components correctly when the user is logged in", () => {
    render(<Sidebar />);

    const headerComponent = screen.findByTestId("header");
    expect(headerComponent).toBeCalled;

    const menuOptionsComponent = screen.findByTestId("menuOptions");
    expect(menuOptionsComponent).toBeCalled;

    const menuUserComponent = screen.findByTestId("menuUser");
    expect(menuUserComponent).toBeCalled;

    const userProfileComponent = screen.findByTestId("userProfile");
    expect(userProfileComponent).toBeCalled;
  });
});
