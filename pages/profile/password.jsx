import Title from "@/components/ui/Title";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Link from "next/link";

const password = () => {
  const initialValues = {
    username: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object({});

  const onSubmit = (values, { setSubmitting }) => {
    console.log(values);
    setSubmitting(false);
  };

  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center my-20">
        <Title addClass="text-5xl">Password</Title>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
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
                <label htmlFor="newPassword"></label>
                <Field
                  type="password"
                  name="newPassword"
                  id="newPassword"
                  className="h-12   w-[400px] sm:w-[500px] border  border-primary outline-none px-4 peer pt-2"
                  placeholder="Your confirm password"
                />
                <ErrorMessage
                  name="confirmPassword"
                  component="div"
                  className="text-yellow-500 text-sm mt-2"
                />
              </div>
              <button
                type="submit"
                className=" md:ml-0 btn-primary"
                disabled={isSubmitting}
              >
                Register
              </button>
              <div>
                <Link href="/auth/login">
                  <span className="text-sm m underline cursor-pointer text-secondary">
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

export default password;
