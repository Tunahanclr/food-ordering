import React from "react";
import Title from "./ui/Title";

const Reservation = () => {
  return (
    <div className="container mx-auto py-12">
      <Title addClass="text-[70px] text-center mb-10">Location</Title>
      <div className="flex justify-between flex-wrap-reverse gap-10">
        </div>
        <div className="lg:flex-1  w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48348.66924008447!2d-74.24927437205034!3d40.766603131286395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c254b5958982c3%3A0xb6ab3931055a2612!2sEast%20Orange%2C%20New%20Jersey%2C%20Amerika%20Birle%C5%9Fik%20Devletleri!5e0!3m2!1str!2str!4v1661853137161!5m2!1str!2str"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="md:h-[500px] h-[300px]  w-full"
          ></iframe>
        </div>  
    </div>
  );
};
export default Reservation;