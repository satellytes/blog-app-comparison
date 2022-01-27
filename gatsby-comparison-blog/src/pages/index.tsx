import * as React from "react"
import {Layout} from "../components/layout";
import {Navigation} from "../components/navigation";
import { Helmet } from "react-helmet"
import styled from "styled-components";

const ExternalLink = styled.a`
  color: #663399;
  text-decoration: none;
  
  &:hover{
    text-decoration: underline;
  }
`

export default function Index() {
    return (
        <Layout>
            <Helmet>
                <title>Gatsby Blog</title>
            </Helmet>
            <Navigation/>
            <h1>Gatsby Comparison Blog</h1>
            <p>This is a simple blog application to show the differences between Gatsby, Next.js and Remix. You can find a detailed description and the other blog applications in <ExternalLink href='#'>this article</ExternalLink>  about the project.</p>
        </Layout>
    );
}
