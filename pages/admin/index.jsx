import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Title from "@/components/ui/Title";
import Link from "next/link";

const Index = () => {
  const initialValues = {
    username: "",
    password: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string()
      .required("Username is required.")
      .min(3, "Username must be at least 3 characters."),
    password: Yup.string()
      .required("Password is required.")
      .min(8, "Password must be at least 8 characters.")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Password must contain at least one uppercase, one lowercase, one number and one special character."
      ),
  });

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center my-20">
        <Title addClass="text-5xl">Admin Login</Title>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="mt-2">
              <div className="mb-6 md:block flex justify-center items-center flex-col">
                <label
                  htmlFor="username"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Username
                </label>
                <Field
                  type="text"
                  name="username"
                  id="username"
                  className="h-12 w-[300px] md:w-[500px] border  border-primary outline-none px-4 peer pt-2"
                />
                <ErrorMessage
                  name="username"
                  component="div"
                  className="text-yellow-500 text-sm mt-2"
                />
              </div>

              <div className="mb-6 md:block flex justify-center items-center flex-col">
                <label
                  htmlFor="password"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Password
                </label>
                <Field
                  type="password"
                  name="password"
                  id="password"
                  className="h-12 w-[300px] md:w-[500px] border  border-primary outline-none px-4 peer pt-2"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-yellow-500 text-sm mt-2"
                />
              </div>

              <div className="flex flex-col w-full gap-y-3 mt-6">
                <button className="btn-primary" disabled={isSubmitting}>
                  LOGIN
                </button>
                <Link href="/">
                  <span className="text-sm underline cursor-pointer text-secondary">
                    Home Page
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

export default Index;
