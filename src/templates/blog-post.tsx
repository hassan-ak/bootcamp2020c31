import React from "react";
import { graphql } from "gatsby";
import "./blogPost.css";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import "./blogPost.css";
import Header from "../components/addOns/Header";
import Footer from "../components/addOns/Footer";

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      body {
        raw
      }
      image {
        gatsbyImageData(
          width: 400
          height: 200
          layout: CONSTRAINED
          placeholder: TRACED_SVG
        )
      }
      source
      publishedDate(formatString: "DD MMMM YYYY")
    }
  }
`;

const BlogPost = (props: any) => {
  console.log(props.data.contentfulBlogPost);
  return (
    <div>
      <Header />
      <div className='blogPostDiv'>
        <div>
          <h1>{props.data.contentfulBlogPost.title}</h1>
        </div>
        <div className='iamgeDiv'>
          <GatsbyImage
            image={getImage(props.data.contentfulBlogPost.image)}
            alt={props.data.contentfulBlogPost.title}
            className='image'
          />
        </div>
        <div className='content'>
          {documentToReactComponents(
            JSON.parse(props.data.contentfulBlogPost.body.raw)
          )}
        </div>
        <div className='source'>
          <p>
            by: <strong>{props.data.contentfulBlogPost.source}</strong>
          </p>
        </div>
        <div className='published'>
          <p>
            Published :{" "}
            <small>{props.data.contentfulBlogPost.publishedDate}</small>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default BlogPost;
