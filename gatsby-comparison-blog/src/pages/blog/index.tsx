import * as React from 'react'
import {Layout} from "../../components/layout";
import {graphql, Link} from 'gatsby'
import {Navigation} from "../../components/navigation";
import styled from "styled-components";
import { Helmet } from "react-helmet"
import {GatsbyImage, getImage} from "gatsby-plugin-image";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  column-gap: 20px;
  row-gap: 20px;
  justify-items: stretch;
  align-items: start;
`
const GridItem = styled(Link)`
  text-decoration: none;
  grid-column-start: span 12;
  color: black;
  overflow: hidden;

  @media (min-width: 600px) {
    grid-column-start: span 6;
  }

  &:hover {
    color: #663399;
    text-decoration: underline;
  }
`

const BlogPage = ({data}) => {
    return (
        <Layout>
            <Helmet>
                <title>Overview | Gatsby Blog</title>
            </Helmet>
            <Navigation/>
            <h3>Blog Overview</h3>
            <Grid>
                {
                    data.allMarkdownRemark.nodes.map((node) => (
                        <GridItem to={`/blog/${node.frontmatter.path}`} key={node.id}>
                            <GatsbyImage alt="" image={getImage(node.frontmatter.featuredImage)}/>
                            <p>{node.frontmatter.title}</p>
                        </GridItem>
                    ))
                }
            </Grid>
        </Layout>
    )
}

export const query = graphql`
    query {
        allMarkdownRemark {
            nodes {
                frontmatter {
                    title
                    path
                    featuredImage {
                        childImageSharp {
                            gatsbyImageData(
                                width: 600
                                aspectRatio: 1.77
                                layout: CONSTRAINED
                                placeholder: BLURRED
                            )
                        }
                    }
                }
                id
            }
        }
    }
`

export default BlogPage