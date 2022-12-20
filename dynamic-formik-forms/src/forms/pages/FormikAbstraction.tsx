import { Formik, Form } from "formik";
import { MyCheckbox, MySelect, MyTextInput } from "../components";
import * as Yup from "yup";
import "../styles/styles.css";

export const FormikAbstraction = () => {
  return (
    <div>
      <h1>Formik Abstractations</h1>

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
            <MyTextInput
              label={"First Name"}
              name={"firstName"}
              type={"text"}
              placeholder={"First Name"}
            ></MyTextInput>

            <MyTextInput
              label={"Last Name"}
              name={"lastName"}
              type={"text"}
              placeholder={"Last Name"}
            ></MyTextInput>

            <MyTextInput
              label={"Email"}
              name={"email"}
              type={"email"}
              placeholder={"maxi.diaz66@gmail.com"}
            ></MyTextInput>

            <MySelect label={"Job Type"} name={"jobType"}>
              <option value="">Pick something</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="it-senior">IT Senior</option>
              <option value="it-jr">IT Junior</option>
            </MySelect>

            <MyCheckbox
              label={"Terms and Conditions"}
              name={"terms"}
            ></MyCheckbox>

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
