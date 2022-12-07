/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */

const path = require(`path`);
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    query MyQuery {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }


    `).then(result=> {

      result.data.allMarkdownRemark.edges.forEach(({node})=> {
        createPage({
          path: node.fields.slug,
          component:path.resolve(`./src/templates/blog-post.js`),
          context: {
           slug: node.fields.slug
          }
        })
      })
    })
  // createPage({
  //   path: "/using-dsg",
  //   component: require.resolve("./src/templates/using-dsg.js"),
  //   context: {},
  //   defer: true,
  // })
}

const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  // Ensures we are processing only markdown files
  if (node.internal.type === "MarkdownRemark") {
    // Use `createFilePath` to turn markdown files in our `data/faqs` directory into `/faqs/slug`
    const relativeFilePath = createFilePath({
      node,
      getNode,
      basePath: "data/",
    })

    // Creates new query'able field with name of 'slug'
    createNodeField({
      node,
      name: "slug",
      value: `${relativeFilePath}`,
    })
  }
}