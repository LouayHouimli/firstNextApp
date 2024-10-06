"use client";

import React from "react";

const ClientButton = () => {
  return <button className="bg-blue-500 text-white p-2 rounded-md" onClick={() => alert("This is from client")}>Client Click</button>;
};

export default ClientButton;
