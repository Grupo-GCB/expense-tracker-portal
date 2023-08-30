import { FormEvent, HTMLAttributes } from "react";

interface IFormModal extends HTMLAttributes<HTMLFormElement> {
  action?: (formData: FormData) => void;
}

export function FormModal({ children, action }: IFormModal) {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (action) {
      const formData = new FormData(e.target as HTMLFormElement);
      action(formData);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 mt-5 md:mt-10 w-full"
    >
      {children}
    </form>
  );
}
