import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import "../styles/styles.css";

export const RegisterFormikPage = () => {
  return (
    <div>
      <h1>Register Formik Page</h1>

      <Formik
        initialValues={{
          name: "",
          email: "",
          password1: "",
          password2: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .max(15, "Debe de tener 15 caracteres o menos.")
            .min(2, "Debe tener al menos 2 caracteres")
            .required("Requerido"),
          email: Yup.string()
            .email("Debe ser un email con formato válido")
            .min(6, "Debe tener al menos 6 caracteres")
            .required("Requerido"),
          password1: Yup.string()
            .min(6, "Debe tener al menos 6 caracteres")
            .required("Requerido"),
          password2: Yup.string()
            .min(6, "Debe tener al menos 6 caracteres")
            .oneOf([Yup.ref("password1")], "Las contraseñas deben ser iguales.")
            .required("Requerido"),
        })}
      >
        {({ handleReset }) => (
          <Form>
            <label htmlFor="name">Name</label>
            <Field name="name" type="text" placeholder="Maxi"></Field>
            <ErrorMessage name="name" component="span"></ErrorMessage>

            <label htmlFor="email">Email</label>
            <Field
              name="email"
              type="email"
              placeholder="maxi.diaz66@gmail.com"
            ></Field>
            <ErrorMessage name="email" component="span"></ErrorMessage>

            <label htmlFor="password1">Password 1</label>
            <Field name="password1" type="password" placeholder="****"></Field>
            <ErrorMessage name="password1" component="span"></ErrorMessage>

            <label htmlFor="password2">Password 2</label>
            <Field name="password2" type="password" placeholder="****"></Field>
            <ErrorMessage name="password2" component="span"></ErrorMessage>

            <button type="submit">Submit</button>
            <button type="reset" onClick={handleReset}>
              Reset
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
