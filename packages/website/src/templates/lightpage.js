import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import lightpagefooter from "../images/lightpagefooter.svg"

const Wrapper = styled.div`
  background-color: white;
`
const Content = styled.div`
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

  img {
    width: 100vw;
    margin-bottom: -1px;
    background-color: transparent;
  }

  ul {
    margin-left: 40px;
    margin-bottom: 20px;
  }
`

export default function Template({ data }) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <Wrapper>
        <Content>
          <div dangerouslySetInnerHTML={{ __html: html }} />
          <img alt="" src={lightpagefooter} />
        </Content>
      </Wrapper>
    </Layout>
  )
}
export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
