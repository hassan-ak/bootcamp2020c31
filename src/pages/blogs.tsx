import React from "react";
import Header from "../components/addOns/Header";
import Footer from "../components/addOns/Footer";
import { BlogsContent } from "../components/blogs/BlogsContent";
import { BlogPageEmpty } from "../components/blogs/BlogPageEmpty";
import { graphql, useStaticQuery } from "gatsby";

export default function Blogs() {
  const data = useStaticQuery(
    graphql`
      query {
        allContentfulBlogPost {
          totalCount
        }
      }
    `
  );
  return (
    <div>
      <Header />
      {data.allContentfulBlogPost.totalCount === 0 ? (
        <BlogPageEmpty />
      ) : (
        <BlogsContent />
      )}
      <Footer />
    </div>
  );
}
