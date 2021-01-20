import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"

import "./layout.css"
import ButtonNav from "./buttonNav"

const Layout = ({ children }) => {
  return (
    <>
      <div
      >
        <Helmet>
          <title>TODO Serempre</title>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&family=Roboto:wght@100;300;400;700&display=swap"
            rel="stylesheet"
          />
          {/* <link
            href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css.map"
            rel="stylesheet"
          /> */}
          <script src="https://use.fontawesome.com/acb61ac0c8.js"></script>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
          />
        </Helmet>
        <main>{children}</main>
        <ButtonNav />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
