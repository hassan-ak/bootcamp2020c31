import React from "react";
import Header from "../components/addOns/Header";
import Footer from "../components/addOns/Footer";
import { BlogsContent } from "../components/blogs/BlogsContent";

export default function Blogs() {
  return (
    <div>
      <Header />
      <BlogsContent />
      <Footer />
    </div>
  );
}
