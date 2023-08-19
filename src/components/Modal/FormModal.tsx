import { HTMLAttributes } from "react";

interface IFormModal extends HTMLAttributes<HTMLFormElement> {
  action?: (formData: FormData) => void;
}

export function FormModal({ children, action, onSubmit }: IFormModal) {
  return (
    <form
      action={action}
      className="flex flex-col gap-4 mt-5 md:mt-10 w-full"
      onSubmit={onSubmit}
    >
      {children}
    </form>
  );
}
