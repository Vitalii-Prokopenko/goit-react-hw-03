import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import PropTypes from "prop-types";
import css from "./contactform.module.css";

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too short!")
    .max(50, "Too long!")
    .required("Required!"),
  number: Yup.string()
    .min(3, "Too short!")
    .max(50, "Too long!")
    .required("Required!"),
});

const ContactForm = ({ onAdd }) => {
  const handleSubmit = (values, actions) => {
    onAdd(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={ContactSchema}
    >
      {() => {
        return (
          <Form className={css.form}>
            <div className={css.formGroup}>
              <label className={css.formLabel}>Name</label>
              <Field className={css.formInput} type="text" name="name" />
              <ErrorMessage
                className={css.errorMessage}
                name="name"
                component="span"
              />
            </div>
            <div className={css.formGroup}>
              <label className={css.formLabel}>Number</label>
              <Field className={css.formInput} type="text" name="number" />
              <ErrorMessage
                className={css.errorMessage}
                name="number"
                component="span"
              />
            </div>
            <button className={css.formBtn} type="submit">
              Add contact
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

ContactForm.PropTypes = {
  onAdd: PropTypes.func.isRequired,
};

export default ContactForm;
