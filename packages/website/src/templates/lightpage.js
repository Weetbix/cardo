import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import rehypeReact from "rehype-react"
import Layout from "../components/layout"
import { OutboundLink } from "gatsby-plugin-gtag"
import SEO from "../components/seo"
import lightpagefooter from "../images/lightpagefooter.svg"

const Wrapper = styled.div`
  img {
    width: 100vw;
    background-color: #3f3d56;
    padding-bottom: 100px;
    margin-bottom: -20px;
  }
`
const Content = styled.div`
  background-color: white;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  max-width: 790px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 100px;
  padding-top: 100px;
  padding-left: 30px;
  padding-right: 30px;
  line-height: 1.4;
  letter-spacing: 1px;

  p {
    margin-bottom: 1em;
  }

  h1 {
    margin-bottom: 20px;
  }

  h2 {
    margin-top: 40px;
    margin-bottom: 20px;
  }

  a {
    color: #6c63ff;
  }

  ul {
    margin-left: 40px;
    margin-bottom: 20px;
  }
`

// Replace links with GA compatible links
const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: { a: OutboundLink },
}).Compiler

export default function Template({ data }) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, htmlAst } = markdownRemark
  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <Wrapper>
        <Content>{renderAst(htmlAst)}</Content>
        <img alt="" src={lightpagefooter} />
      </Wrapper>
    </Layout>
  )
}
export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      htmlAst
      frontmatter {
        title
      }
    }
  }
`
