import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Title from "@/components/ui/Title";
import Link from "next/link";
import { useSession, signIn } from "next-auth/react";

const Login = () => {
  const { data: session } = useSession();
  console.log(session)
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Geçerli bir email adresi giriniz.")
      .required("Email alanı zorunludur."),
    password: Yup.string()
      .min(6, "Şifre en az 6 karakter olmalıdır.")
      .required("Şifre alanı zorunludur."),
  });

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center my-20">
        <Title addClass="text-5xl">Login</Title>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="mt-2">
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Email
                </label>
                <Field
                  type="email"
                  name="email"
                  id="email"
                  className="h-12 w-full border border-primary outline-none px-4 peer pt-2"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-yellow-500 text-sm mt-2"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="password"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Şifre
                </label>
                <Field
                  type="password"
                  name="password"
                  id="password"
                  className="h-12 w-[500px] border  border-primary outline-none px-4 peer pt-2"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-yellow-500 text-sm mt-2"
                />
              </div>

              <div className="flex flex-col w-full gap-y-3 mt-6">
                <button
                  className="btn-primary"
                  type="submit"
                  disabled={isSubmitting}
                >
                  LOGIN
                </button>
                <button type="button" onClick={()=>signIn("github")} className="btn-primary !bg-secondary">
                  <i className="fa fa-github mr-2 text-lg"></i>
                  GITHUB
                </button>
                <Link href="/auth/register">
                  <span className="text-sm underline cursor-pointer text-secondary">
                    Do you no have a account?
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

export default Login;
