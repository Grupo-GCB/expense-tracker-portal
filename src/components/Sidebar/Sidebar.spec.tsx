import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { useUser } from "@auth0/nextjs-auth0/client";
import nookies from "nookies";

import { Sidebar } from ".";

jest.mock("@auth0/nextjs-auth0/client");
jest.mock("nookies");

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

  it("should be able to toggle sidebar when List icon is clicked", () => {
    render(<Sidebar />);
    const menuHamburguer = screen.getByTestId("menuHamburguer");

    fireEvent.click(menuHamburguer);

    expect(screen.getByTestId("menuNav")).toHaveClass("sm:w-full");
  });

  it("should be able to close sidebar when X icon is clicked", () => {
    render(<Sidebar />);
    const menuHamburguer = screen.getByTestId("menuHamburguer");
    const closeX = screen.getByTestId("closeX");

    fireEvent.click(menuHamburguer);
    fireEvent.click(closeX);

    expect(screen.getByTestId("menuNav")).toHaveClass("sm:-left-full");
  });

  it("should be able to render user profile with picture and name", () => {
    render(<Sidebar />);
    const userPicture = screen.getByAltText("Imagem do usuário.");
    const userName = screen.getByText("John Doe");

    expect(userPicture).toBeInTheDocument();
    expect(userName).toBeInTheDocument();
  });

  it("should be able to destroy user token when SignOut button is clicked", () => {
    render(<Sidebar />);
    const signOutButton = screen.getByTestId("singOut");

    fireEvent.click(signOutButton);

    expect(nookies.destroy).toHaveBeenCalledWith(null, "@user_token", {
      path: "/",
    });
  });

  it("should be able to render flex layout when user is logged in", () => {
    render(<Sidebar />);

    const menuNav = screen.getByTestId("menuNav");

    expect(menuNav).toHaveClass("flex");
    expect(menuNav).not.toHaveClass("hidden");
  });

  it("should be able to render hidden layout when user is not logged in", () => {
    mockUseUser.mockReturnValue({ user: null });

    render(<Sidebar />);

    const menuNav = screen.getByTestId("menuNav");

    expect(menuNav).toHaveClass("hidden");
  });

  it("should be able to render all components correctly when user is logged in", () => {
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
