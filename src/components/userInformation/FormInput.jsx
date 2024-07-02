import React from "react";

const FormInput = ({ label, id, type, value, onChange }) => (
  <div className={`flex flex-col md:flex-row my-4 justify-between gap-4 items-center w-full md:w-1/2 mx-auto `}>
    <label className="text-white w-full md:w-1/4" htmlFor={id}>
      {label}
    </label>
    <input
      type={type}
      id={id}
      className="p-2 outline-none w-full md:w-3/4 rounded border-solid border-1 border-white bg-white text-black"
      value={value}
      onChange={onChange}
    />
  </div>
);

export default FormInput;
