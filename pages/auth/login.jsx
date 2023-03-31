import Title from '@/components/ui/Title'
import { Input } from 'postcss'
import { useFormik } from 'formik';

const Login = () => {
  return (
    <div className='container mx-auto'>
        <div className='flex flex-col items-center my-20'>
        <Title addClass='text-[40px]'>Login</Title>

        </div>
        </div>
  )
}

export default Login