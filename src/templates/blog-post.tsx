import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default ({ pageContext }) => {
  return (
    <div>
      <div>
        <h3>Title</h3>
        <p>{pageContext.title}</p>
      </div>
    </div>
  );
};
