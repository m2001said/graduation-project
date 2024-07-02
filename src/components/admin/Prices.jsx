import axios from "axios";
import React, { useState } from "react";
const API_BASE_URL = "https://websitebuilderbackend-production-716e.up.railway.app";
const token = localStorage.getItem("token");

function Prices() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const handleAddPlan = async (name, price, description) => {
    const data = await axios.post(
      `${API_BASE_URL}/plan/new`,
      {
        name: name,
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
    <div>
      <h2 className="text-2xl font-bold text-[#BB5CB9] mb-4 mt-12 border-b-4 border-[#BB5CB9] w-fit pb-1">Set Prices</h2>

      <div>
        <p></p>
        <input />
      </div>
      <div>
        <p></p>
        <ul>
          <li></li>
        </ul>
      </div>
      <button onClick={() => handleAddPlan(name, price, description)}>Save Plan</button>
    </div>
  );
}

export default Prices;
