import React from "react";
import { Helmet } from "react-helmet";

export default function Home() {
  return (
    <div>
      <Helmet>
        <title>Blogistan</title>
      </Helmet>
      <div>Hello World!</div>
    </div>
  );
}
