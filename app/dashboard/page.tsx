"use client";

// import { useSession } from "next-auth/react";
// import { useRouter } from "next/navigation";
import React from "react";

const Dashboard = () => {
  // const { data: session, status } = useSession();
  // const router = useRouter();

  // if (!session) {
  //   router.push("/auth/signin");
  //   return null;
  // }

  // if (session?.user.role !== "admin") {
  //   router.push("/not-authorized");
  //   return null;
  // }

  return (
    <div>
      <h1 className="text-center">Welcome to the dashboard page.</h1>
    </div>
  );
};

export default Dashboard;
