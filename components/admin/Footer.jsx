import React from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Link from "next/link"
import Title from '../ui/Title';
const Footer = () => {

        const initialValues = {
            location: "",
            email: "",
            phoneNumber: "",
            desc: "",
            day: "",
            time: "",
          
        };
      
        const validationSchema = Yup.object({
      
        });
      
        const onSubmit = (values, { setSubmitting }) => {
          console.log(values);
          setSubmitting(false);
        };
      
  return (
    <div className="container  mx-auto">
      <div className="flex flex-col items-center my-20">
        <Title addClass="text-5xl">Footer</Title>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
            <Form className=''>
                 <div className="my-4">
                <label htmlFor="password"></label>
                <Field
                  type="text"
                  name="location"
                  id="location"
                  className="h-12  w-[320px] sm:w-[500px] border  border-primary outline-none px-4 peer pt-2"
                  placeholder="Your location"
                />
                <ErrorMessage
                  name="confirmPassword"
                  component="div"
                  className="text-yellow-500 text-sm mt-2"
                />
              </div>
             
              <div className="my-4 ">
                <label htmlFor="Email"></label>
                <Field
                  type="email"
                  name="email"
                  id="email"
                  className="h-12 w-[320px]  sm:w-[500px] border  border-primary outline-none px-4 peer pt-2"
                  placeholder="Your E mail"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-yellow-500 text-sm mt-2"
                />
              </div>
              <div className="my-4">
                <label htmlFor="phoneNumber"></label>
                <Field
                  type="number"
                  name="phoneNumber"
                  id="number"
                  className="h-12  w-[320px] sm:w-[500px] border  border-primary outline-none px-4 peer pt-2"
                  placeholder="Your Phone Number"

                />
                <ErrorMessage
                  name="phoneNumber"
                  component="div"
                  className="text-yellow-500 text-sm mt-2"
                />
              </div>
              <div className="my-4">
                <label htmlFor="desc"></label>
                <Field
                  type="text"
                  name="desc"
                  id="number"
                  className="h-12  w-[320px] sm:w-[500px] border  border-primary outline-none px-4 peer pt-2"
                  placeholder="Your Description"
                />
                <ErrorMessage
                  name="desc"
                  component="div"
                  className="text-yellow-500 text-sm mt-2"
                />
              </div>
              <div className="my-4">
                <label htmlFor="desc"></label>
                <Field
                  type="text"
                  name="day"
                  id="number"
                  className="h-12  w-[320px] sm:w-[500px] border  border-primary outline-none px-4 peer pt-2"
                  placeholder="Update Day"
                />
                <ErrorMessage
                  name="day"
                  component="div"
                  className="text-yellow-500 text-sm mt-2"
                />
              </div>
              <div className="my-4">
                <label htmlFor="desc"></label>
                <Field
                  type="text"
                  name="time"
                  id="number"
                  className="h-12  w-[320px] sm:w-[500px] border  border-primary outline-none px-4 peer pt-2"
                  placeholder="Update Time"
                />
                <ErrorMessage
                  name="time"
                  component="div"
                  className="text-yellow-500 text-sm mt-2"
                />
              </div>
              <button
                type="submit"
                className=" md:ml-0 btn-primary"
                disabled={isSubmitting}
              >
                Update
              </button>
              <div>
    
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};  

export default Footer