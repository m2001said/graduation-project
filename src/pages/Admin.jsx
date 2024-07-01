import React from "react";
import AdminAccounts from "../components/admin/AdminAccounts";
import AdminMessages from "../components/admin/AdminMessages";
import AdminUsers from "../components/admin/AdminUsers";
import Prices from "../components/admin/Prices";

const token = localStorage.getItem("token");

function Admin() {
  if (!token) return <p className="mt-28 font-bold block text-blue-950 text-xl text-center">Please Login</p>;
  return (
    <>
      <AdminAccounts />
      <AdminMessages />
      <Prices />
      <AdminUsers />
    </>
  );
}

export default Admin;
