export interface Service {
  id: number;
  name: string;
  buttontype: string;
  mensaje: string;
}

export interface Project {
  id: number;
  name: string;
  image: string;
  buttonstyle: string;
  mensaje: string;
}

export interface InitialState {
  services: Service[];
  projects: Project[];
}

export interface FormErrors {
  username?: string;
  asunto?: string;
  message?: string;
  email?: string;
}

export interface FormValues {
  [key: string]: string; // Add this index signature

  username: string;
  email: string;
  asunto: string;
  message: string;
}

export type ValidateFunction = (values: FormValues) => FormErrors;
export type CallbackFunction = () => void;

export interface FormSignupProps {
  submitForm: CallbackFunction;
}
