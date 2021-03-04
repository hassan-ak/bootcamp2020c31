import React from "react";
import { Helmet } from "react-helmet";
import Header from "../components/addOns/Header";

export default function Home() {
  return (
    <div>
      <Helmet>
        <title>Blogistan</title>
      </Helmet>
      <div>
        <Header />
      </div>
    </div>
  );
}
