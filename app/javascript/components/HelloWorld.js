import React from "react"
import PropTypes from "prop-types"

import Header from './layout/Header'
import About from './about'
import Test from './test'

import { BrowserRouter as Router,StaticRouter, Route, Link } from "react-router-dom";



class HelloWorld extends React.Component {
  render () {
    return (

      <React.Fragment>

  <div>
          <Header />
            <div id="main"  className="site-main">
              <div className="pt-wrapper">
              <About />


              </div>
            </div>
    </div>

      </React.Fragment>
    );
  }
}

HelloWorld.propTypes = {
  greeting: PropTypes.string
};
export default HelloWorld
