import React from "react";
import { render, screen } from "@testing-library/react";

import { UserMenu } from ".";

describe("User Menu", () => {
  it("should be able to render the user menu with the correct icons when the open prop is true", () => {
    render(<UserMenu open={true} />);

    const notificationsIcon = screen.getByTestId("notificationsIcon");
    const notificacoesLabelText = screen.getByText("Notificações");

    expect(notificationsIcon).toBeInTheDocument();
    expect(notificacoesLabelText).toBeInTheDocument();

    const configurationsIcon = screen.getByTestId("configurationsIcon");
    const configuracoesLabelText = screen.getByText("Configurações");

    expect(configurationsIcon).toBeInTheDocument();
    expect(configuracoesLabelText).toBeInTheDocument();
  });

  it("should be able to render the user menu with the correct icons when the open prop is false", () => {
    render(<UserMenu open={false} />);

    const notificationsIcon = screen.getByTestId("notificationsIcon");
    expect(notificationsIcon).toBeInTheDocument();

    const configurationsIcon = screen.getByTestId("configurationsIcon");
    expect(configurationsIcon).toBeInTheDocument();
  });
});
