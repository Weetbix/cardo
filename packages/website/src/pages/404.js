import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import construction from "../images/construction.svg"
import styled from "styled-components"

const Content = styled.div`
  background-color: white;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  img {
    margin-bottom: 30px;
    width: 400px;
  }

  h1 {
    margin-bottom: 20px;
  }
`

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Content>
      <img alt="" src={construction} />
      <h1>Oh No!</h1>
      <p>That page doesn't seem to exist</p>
    </Content>
  </Layout>
)

export default NotFoundPage
