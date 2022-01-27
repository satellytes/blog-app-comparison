import * as React from 'react'
import { graphql } from 'gatsby'
import {Layout} from "../../components/layout";
import {Navigation} from "../../components/navigation";
import { Helmet } from "react-helmet"

const BlogPost = ({ data }) => {
    return (
        <Layout>
            <Helmet>
                <title>{data.markdownRemark.frontmatter.title} | Gatsby Blog</title>
            </Helmet>
            <Navigation/>
            <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
        </Layout>
    )
}

export const query = graphql`
    query ($id: String) {
        markdownRemark(id: {eq: $id}) {
            frontmatter {
                title
                path
            }
            html
        }
    }
`

export default BlogPost