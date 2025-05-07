import React from "react";

const ErrorMessage = (error: any) => {
  return (
    <div
      className="flex w-full items-center p-4 mb-4 gap-2 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
      role="alert"
    >
      <h1>Error Occurred</h1>
      <p>{error}</p>
    </div>
  );
};

export default ErrorMessage;
