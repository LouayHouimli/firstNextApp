import React from "react";
import { BitcoinPrice } from "@/types/types";
import ClientButton from "@/components/buttons/clientButton";
const getBitcoinPrice = async (): Promise<BitcoinPrice> => {
  const response = await fetch(
    "https://api.coindesk.com/v1/bpi/currentprice.json",
    { cache: "no-store" }
  );
  const data = await response.json();
  return data;
};

const handleSubmit = async () => {
  "use server";
  console.log("Server Click");
};

const BitcoinPage = async () => {
  const bitcoinPrice = await getBitcoinPrice();
  return (
    <div className="p-4 bg-blue-100 flex flex-col items-center justify-center h-screen font-bold">
      <h1 className="text-4xl font-bold">Bitcoin Page</h1>
      <div className="flex flex-col items-center">
        <p>{bitcoinPrice.bpi.USD.rate_float}</p>
        <p>{bitcoinPrice.bpi.USD.description}</p>
      </div>
      <ClientButton />
      <form action={handleSubmit}>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">
          Server Click
        </button>
      </form>
    </div>
  );
};

export default BitcoinPage;
