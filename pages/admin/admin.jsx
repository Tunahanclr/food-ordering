import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Title from '@/components/ui/Title';
import Link from 'next/link';

const Admin = () => {
  const initialValues = {
    username: '',
    password: '',
  };

  const validationSchema = Yup.object({
    username: Yup.string().required('Username is required'),
    password: Yup.string().min(6, 'Şifre en az 6 karakter olmalıdır.').required('Şifre alanı zorunludur.'),
  });

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className='container mx-auto'>
      <div className='flex flex-col items-center my-20'>
        <Title addClass='text-5xl'>Admin</Title>

        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
          {({ isSubmitting }) => (
            <Form className='mt-2 flex flex-col justify-center items-center'>
              <div className='mb-4'>
              <Field type='text' name='username' id='username' placeholder='Enter your username' className="h-12  w-[400px] sm:w-[500px] border  border-primary
                 outline-none px-4 peer pt-2"/>
                <ErrorMessage name='username'  component='div'className='text-yellow-500 text-sm mt-2'  />
              </div>
              <div className='mb-6'>
           
                <Field
                  type='password'
                  name='password'
                  id='password'
                  className="h-12 w-[350px] sm:w-[500px] border  border-primary outline-none px-4 peer pt-2"
                />
                <ErrorMessage name='password' component='div'className='text-yellow-500 text-sm mt-2'  />
              </div>

             
              <div className="flex flex-col w-full gap-y-3 mt-6">
          <button className="btn-primary"  disabled={isSubmitting}  >LOGIN</button>
          <button className="btn-primary !bg-secondary">
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

export default Admin;
