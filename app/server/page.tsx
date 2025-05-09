import Client from "@/components/Client";
import React from "react";
import Server from "@/components/Server";

const page = () => {
  console.log("Server 1");
  return (
    <div>
      Server Component
      <Client server={Server()}></Client>
    </div>
  );
};

export default page;
