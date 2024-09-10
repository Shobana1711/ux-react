import React from "react";
import Navbar from "@/components/Navbar";
import "../styles/app.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
