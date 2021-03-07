const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allContentfulBlogPost {
        edges {
          node {
            title
            summary
            body {
              raw
            }
            free
            image {
              gatsbyImageData(
                width: 400
                height: 200
                layout: CONSTRAINED
                placeholder: TRACED_SVG
              )
            }
            source
            publishedDate
            slug
          }
        }
      }
    }
  `);
  result.data.allContentfulBlogPost.edges.forEach((edge) => {
    createPage({
      path: `/blogs/${edge.node.slug}`,
      component: path.resolve("./src/templates/blog-post.tsx"),
      context: edge.node,
    });
  });
};
