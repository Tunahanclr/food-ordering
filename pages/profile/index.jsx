import Title from "@/components/ui/Title";
import { Formik, Form, Field } from "formik";
import Image from "next/image";
import { useState } from "react";
import Password from "./password";
import Order from "./order";

const initialValues = {
  fullName: "",
  phoneNumber: "",
  emailAddress: "",
  address: ""
};

const Profile = () => {
    const [tabs,setTabs]=useState(0)
  return (
    <div className="flex px-10 min-h-[calc(100vh_-_433px)] lg:flex-row flex-col">
      <div className="lg:w-80 w-100 flex-shrink-0">
        <div className=" flex flex-col items-center px-10 py-5 border border-b-0">
          <Image
            src="/images/client2.jpg"
            alt=""
            width={100}
            height={100}
            className="rounded-full"
          />
          <b className="text-2xl mt-1">John Doe</b>
        </div>
        <ul className="text-center font-semibold">
        <li
            className={`border w-full p-3 cursor-pointer hover:bg-primary hover:text-white transition-all ${
              tabs === 0 && "bg-primary text-white"
            }`}
            onClick={() => setTabs(0)}
          >
            <i className="fa fa-home"></i>
            <button className="ml-1 ">Account</button>
          </li>
          <li
            className={`border w-full p-3 cursor-pointer hover:bg-primary hover:text-white transition-all ${
              tabs === 1 && "bg-primary text-white"
            }`}
            onClick={() => setTabs(1)}
          >
            <i className="fa fa-key"></i>
            <button className="ml-1">Password</button>
          </li>
          <li
            className={`border w-full p-3 cursor-pointer hover:bg-primary hover:text-white transition-all ${
              tabs === 2 && "bg-primary text-white"
            }`}
            onClick={() => setTabs(2)}
          >
            <i className="fa fa-motorcycle"></i>
            <button className="ml-1">Orders</button>
          </li>
          <li
            className={`border w-full p-3 cursor-pointer hover:bg-primary hover:text-white transition-all ${
              tabs === 3 && "bg-primary text-white"
            }`}
            onClick={() => setTabs(3)}
          >
            <i className="fa fa-sign-out"></i>
            <button className="ml-1">Exit</button>
          </li>
        </ul>
      </div>
      {tabs == 0 &&(
      <div className="flex justify-center container mx-auto items-center ">
      <div className="  mt-10">
        <Title addClass="text-center font-bold text-3xl md:text-5xl">Account Settings</Title>
        <Formik
          initialValues={initialValues}
          onSubmit={(values) => {
            console.log(values);
            // Your logic for handling form submission goes here
          }}
        >
          {({ isSubmitting }) => (
              <form className="lg:p-8 flex-1 lg:mt-0 mt-5">
              <div className="flex flex-col justify-center">
                <label htmlFor="fullName" className="block font-semibold mb-1">
                  Your Full Name
                </label>
                <Field
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="Enter your full name"
                  className="h-12 w-[300px] sm:w-[350px] md:w-[500px] border border-primary outline-none px-4 peer pt-2"
                />
              </div>
              <div>
                <label htmlFor="phoneNumber" className="block font-semibold mb-1">
                  Phone Number
                </label>
                <Field
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="Enter your phone number"
                  className="h-12 w-[300px] sm:w-[350px] md:w-[500px] border border-primary outline-none px-4 peer pt-2"
                />
              </div>

              <div>
                <label htmlFor="emailAddress" className="block font-semibold mb-1">
                  Email Address
                </label>
                <Field
                  type="email"
                  id="emailAddress"
                  name="emailAddress"
                  placeholder="Enter your email address"
                  className="h-12 w-[300px] sm:w-[350px] md:w-[500px] border border-primary outline-none px-4 peer pt-2"
                />
              </div>

              <div>
                <label htmlFor="address" className="block font-semibold mb-1">
                Adress
</label>
<Field
               type="text"
               id="address"
               name="address"
               placeholder="Enter your address"
               className="h-12 w-[300px] sm:w-[350px] md:w-[500px] border border-primary outline-none px-4 peer pt-2"
               />
</div>            <div className="text-center">
            <button
              type="submit"
              className="bg-primary mt-4 text-white py-2 px-4 rounded-lg w-full"
              disabled={isSubmitting}
            >
              Save Changes
            </button>
          </div>
        </form>
      )}
    </Formik>
  </div>
</div> )}
{tabs == 1 && <Password/>}
{tabs == 2 && <Order/>}

</div>
);
};
 
export default Profile;