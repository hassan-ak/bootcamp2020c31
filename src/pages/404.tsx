import React from "react";
import Footer from "../components/addOns/Footer";
import Header from "../components/addOns/Header";
import { ErrorPage } from "../components/error/ErrorPage";

export default function Error() {
  return (
    <div>
      <Header />
      <ErrorPage />
      <Footer />
    </div>
  );
}
