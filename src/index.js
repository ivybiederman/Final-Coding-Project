import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css"; // Import index.css file (if exists)
import App from "./App"; // Import App component
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter component from react-router-dom

// Import reportWebVitals function (if exists)
// import reportWebVitals from "./reportWebVitals";

// Create a root for ReactDOM
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the App component wrapped in BrowserRouter
root.render(
  <BrowserRouter>
  {/* <React.StrictMode> */}
    <App /> {/* Render the App component */}
  {/* </React.StrictMode> */}
  </BrowserRouter>
);

// reportWebVitals(); // Call reportWebVitals function (if exists)
