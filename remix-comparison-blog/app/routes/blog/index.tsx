import {MetaFunction, useLoaderData} from "remix";
import {Layout} from "../../components/layout";
import {Navigation} from "../../components/navigation";
import {getPosts, Post} from "../../util/posts";
import {Link} from "@remix-run/react";
import styled from "styled-components";
import TestImage from "../../../public/how-to-optimize-gatsby-url-hero.jpeg"


export const loader = () => {
    return getPosts();
};

export const meta: MetaFunction = () => {
    return {
        title: "Overview | Remix Blog",
    };
};

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
    color: #668CFF;
  }
`

const StyledImg = styled.img`
  width: 100%;
  transition: transform 0.2s;
  &:hover{
    transform: scale(1.03);
  }
`

export default function Blog() {
    const posts = useLoaderData<Post[]>();
    return (
        <Layout>
            <Navigation/>
            <h3>Blog Overview</h3>
            <Grid>
                {posts.map(post => (
                    <GridItem key={post.slug} to={post.slug}>
                        <StyledImg src={TestImage}/>
                        <p>{post.title}</p>
                    </GridItem>
                ))}
            </Grid>
        </Layout>
    );
}