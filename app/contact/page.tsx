import React from "react";



export const generateMetadata = () => {
  return {
    title: "Contact Page",
    description: "This is the contact page",
  };
};

const ContactPage = () => {
  return (
    <div className="p-4 bg-blue-100 flex flex-col items-center j h-screen">
      <h1 className="text-2xl font-bold text-blue-600">Contact Page</h1>
    </div>
  );
};

export default ContactPage;
