import axios from "axios";
import React, { useState } from "react";
const token = localStorage.getItem("token");

function Prices() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState([]);

  const handleAddPlan = async (name, price, description) => {
    const data = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/plan/new`,
      {
        name: "free",
        price: price,
        description: description,
      },
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
  };

  return (
    <div className="p-6 border-b-2 rounded-md border-[#BB5CB9] ">
      <h2 className="text-2xl font-bold text-[#BB5CB9] mb-4 mt-12 border-b-4 border-[#BB5CB9] w-fit pb-1">Set Prices</h2>
      <div className="flex items-start justify-around">
        <div className="w-1/4 flex flex-col gap-5">
          <label className="text-[#360E5C] font-bold text-2xl">Package Price</label>
          <input
            className="px-4 py-1 text-[#350E5C] border-inherit shadow "
            type="number"
            step={1}
            placeholder="pacakge-price"
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="w-1/2 flex flex-col gap-5 mb-6">
          <label className="text-[#360E5C] font-bold text-2xl">Features</label>
          <input
            type="text"
            placeholder="features"
            onBlur={(e) => setDescription([...description, e.target.value.trim()])}
            className="px-4 py-1 text-[#350E5C] border-inherit shadow"
          />
          <input
            type="text"
            placeholder="features"
            onBlur={(e) => setDescription([...description, e.target.value.trim()])}
            className="px-4 py-1 text-[#350E5C] border-inherit shadow"
          />
          <input
            type="text"
            placeholder="features"
            onBlur={(e) => setDescription([...description, e.target.value.trim()])}
            className="px-4 py-1 text-[#350E5C] border-inherit shadow"
          />
          <input
            type="text"
            placeholder="features"
            onBlur={(e) => setDescription([...description, e.target.value.trim()])}
            className="px-4 py-1 text-[#350E5C] border-inherit shadow"
          />
        </div>
      </div>
      <div className="mx-auto flex ">
        <button
          onClick={() => handleAddPlan(name, price, description)}
          className="text-[#350E5C] font-semibold text-base bg-[#D095CF] px-4 rounded-lg transition-colors hover:bg-[#b963b8] mx-auto rounded-xl w-1/3"
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default Prices;
