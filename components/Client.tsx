"use client";
import React, { ReactNode } from "react";
import Server from "./Server";

const Client = ({server} : {server: ReactNode}) => {
  console.log("client 2");
  return (
    <div>
      Client Component
      {server}
    </div>
  );
};

export default Client;
