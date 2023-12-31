"use client";

import { MagnifyingGlass } from "phosphor-react";
import Select, { StylesConfig } from "react-select";

const customStyles: StylesConfig = {
  control: (defaultValue, state) => ({
    ...defaultValue,
    width: "100%",
    backgroundColor: "#121214",
    color: "white",
    borderColor: "#38A169",
    borderRadius: "6px",
    borderWidth: 0,
    "&:hover": {
      borderColor: "#38A169",
    },
    "&:activate": {
      borderColor: "#38A169",
    },
  }),
  option: (defaultValue, state) => ({
    ...defaultValue,
    backgroundColor: "#121214",
    padding: "6px",
    color: state.isSelected ? "white" : "white",
    "&:hover": {
      backgroundColor: "#2D3748",
    },
  }),
  singleValue: (defaultValue) => ({
    ...defaultValue,
    color: "white",
    display: "flex",
    alignItems: "center",
  }),
  menu: (defaultValue) => ({
    ...defaultValue,
    backgroundColor: "#121214",
    border: "none",
  }),
  placeholder: (provided) => ({
    ...provided,
    display: "flex",
    alignItems: "center",
  }),
};

export interface IOptions {
  value: string;
  label: string;
}

export interface ICustomSelectProps {
  id?: string
  placeholder: string;
  options: IOptions[];
  name: string;
}

export function CustomSelect({
  id,
  options,
  placeholder,
  name,
}: ICustomSelectProps) {
  return (
    <div>
      <Select
        id={id}
        options={options}
        styles={customStyles}
        components={{
          IndicatorSeparator: () => null,
        }}
        placeholder={
          <span className="flex items-center h-12">
            <MagnifyingGlass size={24} color="#7d7878" className="mr-2" />{" "}
            {placeholder}
          </span>
        }
        name={name}
      />
    </div>
  );
}
