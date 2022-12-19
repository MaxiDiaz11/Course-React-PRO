import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../styles/styles.css";

export const FormikComponents = () => {
  return (
    <div>
      <h1>Formik Components</h1>

      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          terms: false,
          jobType: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Debe de tener 15 caracteres o menos.")
            .required("Requerido"),
          lastName: Yup.string()
            .max(15, "Debe de tener 15 caracteres o menos.")
            .required("Requerido"),
          email: Yup.string()
            .email("Debe ser un email con formato válido")
            .required("Requerido"),
          terms: Yup.boolean().oneOf([true], "Debe aceptar los TyC"),
          jobType: Yup.string()
            .required("Requerido")
            .notOneOf(["", "it-jr"], "Esta opción no es permitida"),
        })}
      >
        {(formik) => (
          <Form>
            <label htmlFor="firstName">First Name</label>
            <Field name="firstName" type="text"></Field>
            <ErrorMessage name="firstName" component="span"></ErrorMessage>

            <label htmlFor="lastName">Last Name</label>
            <Field name="lastName" type="text"></Field>
            <ErrorMessage name="lastName" component="span"></ErrorMessage>

            <label htmlFor="email">Email</label>
            <Field name="email" type="email"></Field>
            <ErrorMessage name="email" component="span"></ErrorMessage>

            <label htmlFor="jobType">Job Type</label>
            <Field name="jobType" as="select">
              <option value="">Pick something</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="it-senior">IT Senior</option>
              <option value="it-jr">IT Junior</option>
            </Field>
            <ErrorMessage name="jobType" component="span"></ErrorMessage>

            <label htmlFor="terms">
              {" "}
              <Field name="terms" type="checkbox"></Field> Terms and Conditions
            </label>
            <ErrorMessage name="terms" component="span"></ErrorMessage>

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
