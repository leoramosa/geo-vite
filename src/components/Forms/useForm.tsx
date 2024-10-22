import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import {
  FormValues,
  FormErrors,
  ValidateFunction,
  CallbackFunction,
} from "../../types";

const useForm = (callback: CallbackFunction, validate: ValidateFunction) => {
  const frmContact: FormValues = {
    username: "",
    email: "",
    asunto: "",
    message: "",
  };
  const [values, setValues] = useState<FormValues>(frmContact);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .send(
        "service_02qojlj",
        "template_nedl4z9",
        values,
        "user_aTS1qTMZtfPMABT0DsDFw"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setErrors(validate(values));
          setIsSubmitting(true);
        },
        (err) => {
          console.log("FAILED...", err);
        }
      );
    e.currentTarget.reset();
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors, callback, isSubmitting]);

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;
