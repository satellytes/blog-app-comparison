import * as React from "react"
import styled from "styled-components";
import {Link} from "gatsby";


const StyledNav = styled.nav`
  background: lightgrey;
  border-radius: 4px;
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  text-align: center;
  padding: 4px 8px;
  margin: 0 -8px;
`

const SiteTitle = styled.h1`
  width: 100%;
  text-align: center;
  color: #663399;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  
  &:hover {
    color: #663399;
  }
`

export const Navigation = () => {
    return (
        <>
            <SiteTitle>Gatsby Blog</SiteTitle>
            <StyledNav>
                <StyledLink to={'/'}>Home</StyledLink>
                <StyledLink to={'/blog'}>Blog</StyledLink>
                <StyledLink as='a' href='https://github.com/hofmann-felix/gatsby-comparison-blog' target='_blank'>GitHub</StyledLink>
                <StyledLink as='a' href='https://www.gatsbyjs.com/' target='_blank'>gatsbyjs.com</StyledLink>
            </StyledNav>
        </>
    )
}