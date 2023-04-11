import axios from "axios";
import Title from "@/components/ui/Title";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Link from "next/link";
const register = () => {
  const initialValues = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm password is required"),
  });

  const onSubmit = async (values, actions) => {
    // submit your form data here
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/users/register`,
        values
      );
      console.log(onSubmit)
    } catch (error) {
      console.log(error);
    }
 // reset form after successful submit
     actions.resetForm();
  };

  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center my-20">
        <Title addClass="text-5xl">Register</Title>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="my-4 flex flex-col w-full justify-center items-center">
                <label htmlFor="username"></label>
                <Field
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Enter your username"
                  className="h-12  w-[400px] sm:w-[500px] border  border-primary
                 outline-none px-4 peer pt-2"
                />
                <ErrorMessage
                  name="username"
                  component="div"
                  className="text-yellow-500 text-sm mt-2"
                />
              </div>
              <div className="my-4">
                <label htmlFor=""></label>
                <Field
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email address"
                  className="h-12   w-[400px] sm:w-[500px] border  border-primary outline-none px-4 peer pt-2"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-yellow-500 text-sm mt-2"
                />
              </div>
              <div className="my-4">
                <label htmlFor="password"></label>
                <Field
                  type="password"
                  name="password"
                  id="password"
                  className="h-12   w-[400px] sm:w-[500px] border  border-primary outline-none px-4 peer pt-2"
                  placeholder="Your Password"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-yellow-500 text-sm mt-2"
                />
              </div>
              <div className="my-4">
                <label htmlFor="confirmPassword"></label>
                <Field
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  className="h-12   w-[400px] sm:w-[500px] border  border-primary outline-none px-4 peer pt-2"
                  placeholder="Your Password Again"
                />
                <ErrorMessage
                  name="confirmPassword"
                  component="div"
                  className="text-yellow-500 text-sm mt-2"
                />
              </div>
              <div className="flex flex-col w-full gap-y-3 mt-6">
          <button className="btn-primary" type="submit">
            REGISTER
          </button>
          <Link href="/auth/login">
            <span className="text-sm underline cursor-pointer text-secondary">
                    Do you have a account?
                  </span>
                </Link>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default register;
