import React, { useEffect, useState } from "react";
import { graphql } from "gatsby";
import "./blogPost.css";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import "./blogPost.css";
import Header from "../components/addOns/Header";
import Footer from "../components/addOns/Footer";
import { Button } from "@material-ui/core";
import netlifyIdentity from "netlify-identity-widget";

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      summary
      free
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
  console.log(props.data.contentfulBlogPost.summary);
  const [user, setUser] = useState("");
  useEffect(() => {
    netlifyIdentity.init({});
  });
  netlifyIdentity.on(
    "login",
    (user: { user_metadata: { full_name: React.SetStateAction<string> } }) => {
      netlifyIdentity.close();
      setUser(user.user_metadata.full_name);
    }
  );
  netlifyIdentity.on("logout", () => {
    netlifyIdentity.close();
    setUser("");
  });
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
        {props.data.contentfulBlogPost.free ? (
          <div className='content'>
            {documentToReactComponents(
              JSON.parse(props.data.contentfulBlogPost.body.raw)
            )}
          </div>
        ) : (
          <div>
            {user === "" ? (
              <div>
                <div className='content'>
                  {props.data.contentfulBlogPost.summary}
                </div>
                <div className='content premium'>
                  This is content is premium. Kindly SignIn to read this
                  article.
                </div>
                <div className='buttonDiv'>
                  <Button
                    className='signInButton'
                    onClick={() => {
                      netlifyIdentity.open();
                    }}
                  >
                    Login
                  </Button>
                </div>
              </div>
            ) : (
              <div>
                <div className='content'>
                  {documentToReactComponents(
                    JSON.parse(props.data.contentfulBlogPost.body.raw)
                  )}
                </div>
                <div className='buttonDiv'>
                  <Button
                    className='signInButton'
                    onClick={() => {
                      netlifyIdentity.open();
                    }}
                  >
                    LogOut
                  </Button>
                </div>
              </div>
            )}
          </div>
        )}
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
