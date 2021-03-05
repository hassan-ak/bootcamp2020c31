import React from "react";
import { Helmet } from "react-helmet";
import Footer from "../components/addOns/Footer";
import { Landing } from "../components/landing/Landing";
import Header from "../components/addOns/Header";

export default function Home() {
  return (
    <div>
      <Helmet>
        <title>Blogistan</title>
      </Helmet>
      <div>
        <Header />
        <Landing />
        <Footer />
      </div>
    </div>
  );
}
