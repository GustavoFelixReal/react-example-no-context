import { HTMLAttributes, ReactNode } from "react";

interface IFormButton extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  isValid: boolean;
}

function FormButton({ children, isValid, ...props }: IFormButton) {
  return (
    <button type="button" disabled={!isValid} {...props}>
      {children}
    </button>
  )
}

export default FormButton;