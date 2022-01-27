import styled from "styled-components";
import {Link} from "@remix-run/react";


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
  color: #668CFF;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  
  &:hover {
    color: #668CFF;
  }
`

export const Navigation = () => {
    return (
        <>
            <SiteTitle>Remix Blog</SiteTitle>
            <StyledNav>
                <StyledLink to={'/'}>Home</StyledLink>
                <StyledLink to={'/blog'}>Blog</StyledLink>
                <StyledLink as='a' href='https://github.com/hofmann-felix/remix-comparison-blog' target='_blank'>GitHub</StyledLink>
                <StyledLink as='a' href='https://remix.run/' target='_blank'>remix.run</StyledLink>
            </StyledNav>
        </>
    )
}