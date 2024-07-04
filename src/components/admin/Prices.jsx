import axios from "axios";
import React, { useState } from "react";
const API_BASE_URL = "https://websitebuilderbackend-production-716e.up.railway.app";
const token = localStorage.getItem("token");

function Prices() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState([]);

  const handleAddPlan = async (name, price, description) => {
    const data = await axios.post(
      `${API_BASE_URL}/plan/new`,
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
    <div className="p-6 border-b-2 rounded-md border-[#BB5CB9]">
      <h2 className="text-2xl font-bold text-[#BB5CB9] mb-4 mt-12 border-b-4 border-[#BB5CB9] w-fit pb-1">Set Prices</h2>
      <div className="flex items-start justify-around">
        <div>
          <label className="text-[#360E5C]">Package Price</label>
          <input className="py-2 text-[#360E5C]" type="number" step={1} placeholder="pacakge-price" onChange={(e) => setPrice(e.target.value)} />
        </div>
        <div>
          <label className="text-[#360E5C] font-bold text-2xl">Features</label>
          <input type="text" placeholder="features" onBlur={(e) => setDescription([...description, e.target.value.trim()])} className="text-[#360E5C]" />
          <input type="text" placeholder="features" onBlur={(e) => setDescription([...description, e.target.value.trim()])} className="text-[#360E5C]" />
          <input type="text" placeholder="features" onBlur={(e) => setDescription([...description, e.target.value.trim()])} className="text-[#360E5C]" />
          <input type="text" placeholder="features" onBlur={(e) => setDescription([...description, e.target.value.trim()])} className="text-[#360E5C]" />
        </div>
      </div>
      <button onClick={() => handleAddPlan(name, price, description)} className="bg-[#D095CF] mx-auto py-2 rounded-xl w-full">
        Save Plan
      </button>
    </div>
  );
}

export default Prices;
