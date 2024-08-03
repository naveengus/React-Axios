import React from "react";
import AppRouter from "./utils/AppRouter";
import { createBrowserRouter, RouterProvider } from "react-router-dom"; // Import necessary functions from react-router-dom
function App() {
  const router = createBrowserRouter(AppRouter);
  return (
    <>
      {/* Create a router instance using theroutes defined in AppRouter */}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
