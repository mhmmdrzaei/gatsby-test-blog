import * as React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.scss"



const IndexPage = ({data}) => {
  return(
  <Layout>
  <div>
    <h1>Blog Header</h1>
    <h4>{data.allMarkdownRemark.totalCount}</h4>
    {
      data.allMarkdownRemark.edges.map(({node})=> {
        return (

          <div key={node.id}>
            <Link to={node.fields.slug} className={styles.mohammadLink}>{node.frontmatter.title} - {node.frontmatter.date} </Link>
            <p>{node.excerpt}</p>
          </div>
          )
      })
    }


  </div>
   {/* <div className={styles.textCenter}>
      <StaticImage
        src="../images/example.png"
        loading="eager"
        width={64}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `var(--space-3)` }}
      />
      <h1>
        Welcome to <b>Gatsby!</b>
      </h1>
      <p className={styles.intro}>
        <b>Example pages:</b>{" "}
        {samplePageLinks.map((link, i) => (
          <React.Fragment key={link.url}>
            <Link to={link.url}>{link.text}</Link>
            {i !== samplePageLinks.length - 1 && <> · </>}
          </React.Fragment>
        ))}
        <br />
        Edit <code>src/pages/index.js</code> to update this page.
      </p>
    </div>
    <ul className={styles.list}>
      {links.map(link => (
        <li key={link.url} className={styles.listItem}>
          <a
            className={styles.listItemLink}
            href={`${link.url}${utmParameters}`}
          >
            {link.text} ↗
          </a>
          <p className={styles.listItemDescription}>{link.description}</p>
        </li>
      ))}
    </ul>
    {moreLinks.map((link, i) => (
      <React.Fragment key={link.url}>
        <a href={`${link.url}${utmParameters}`}>{link.text}</a>
        {i !== moreLinks.length - 1 && <> · </>}
      </React.Fragment>
    ))}*/}
  </Layout>
)
}
/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage

export const query = graphql`
query MyQuery {
  allMarkdownRemark(sort: {fields: [frontmatter___date], order:DESC}) {
    totalCount
    edges {
      node {
        id
        frontmatter {
          title
          date
          description
        }
        fields {
          slug
        }
        html
        excerpt
      }
    }
  }
}

`
