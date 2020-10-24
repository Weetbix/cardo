/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helment from "react-helmet"
import GlobalStyle from "./style.js"
import CookieBanner from "./cookiebanner"

const Layout = ({ children }) => (
  <>
    <Helment>
      <script
        async
        defer
        data-domain="cardo.app"
        src="https://plausible.cloud.johnhannagan.com/js/plausible.js"
      ></script>
    </Helment>
    <GlobalStyle />
    {children}
    <CookieBanner />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
