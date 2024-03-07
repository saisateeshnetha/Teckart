import PropTypes from "prop-types"
import React from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"

//i18n
import { withTranslation } from "react-i18next"
import SidebarContent from "./SidebarContent"

import { Link } from "react-router-dom"

import logo from "../../assets/images/logoes.png"
import logoLightPng from "../../assets/images/logoes.png"
import logoLightSvg from "../../assets/images/logoes.png"
import logoDark from "../../assets/images/logoes.png"

const Sidebar = props => {
  return (
    <React.Fragment>
      <div className="vertical-menu">
        <div className="navbar-brand-box">
          <Link className="logo logo-dark">
            <span className="logo-sm">
              {/* <img src={logo} alt="" height="10px" /> */}
              <h2 className="text-white pt-3 pb-3" style={{fontWeight:"bold"}}>T</h2>
            </span>
            <span className="logo-lg">
              {/* <img src={logoDark} alt="" height="50px" /> */}
              <h2 className="text-white pt-3 pb-3" style={{fontWeight:"bold"}}>TecKart</h2>

            </span>
          </Link>

          <Link className="logo logo-light">
            <span className="logo-sm">
              <img src={logoLightSvg} alt="" height="10px" />
            </span>
            <span className="logo-lg">
              <img src={logoLightPng} alt="" height="50px" />
            </span>
          </Link>
        </div>
        <div data-simplebar className="h-100">
          {props.type !== "condensed" ? <SidebarContent /> : <SidebarContent />}
        </div>
        <div className="sidebar-background"></div>
      </div>
    </React.Fragment>
  )
}

Sidebar.propTypes = {
  type: PropTypes.string,
}

const mapStatetoProps = state => {
  return {
    layout: state.Layout,
  }
}
export default connect(
  mapStatetoProps,
  {}
)(withRouter(withTranslation()(Sidebar)))
