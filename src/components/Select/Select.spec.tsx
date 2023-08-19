import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { CustomSelect } from "@/components/Select";

const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

describe("Select", () => {
  it("should be able to render correctly", () => {
    render(
      <CustomSelect
        options={options}
        placeholder="Select an option"
        name="mySelect"
      />
    );
    const placeholderText = screen.getByText("Select an option");
    expect(placeholderText).toBeInTheDocument();
  });

  it("should be able to display options when clicked and selects an option", async () => {
    render(
      <CustomSelect
        options={options}
        placeholder="Select an option"
        name="mySelect"
      />
    );

    const selectInput = screen.getByText("Select an option");
    userEvent.click(selectInput);

    const option1 = await screen.findByText("Option 1");
    userEvent.click(option1);

    const selectedValue = screen.getByText("Option 1");
    expect(selectedValue).toBeInTheDocument();
  });
});
