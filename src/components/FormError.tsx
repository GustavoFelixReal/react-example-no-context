import Error from "./Error";

interface IFormError {
  isValid: boolean;
}

function FormError({ isValid }: IFormError) {
  return !isValid ? <Error message='O formulário tem um erro!!' /> : null;
}

export default FormError;
