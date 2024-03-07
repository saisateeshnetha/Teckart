import PropTypes from "prop-types"
import React, { useEffect, useRef } from "react"

// //Import Scrollbar
import SimpleBar from "simplebar-react"

// MetisMenu
import MetisMenu from "metismenujs"
import { withRouter } from "react-router-dom"
import { Link } from "react-router-dom"

//i18n
import { withTranslation } from "react-i18next"

const SidebarContent = props => {
  const ref = useRef()
  // Use ComponentDidMount and ComponentDidUpdate method symultaniously
  useEffect(() => {
    const pathName = props.location.pathname

    const initMenu = () => {
      new MetisMenu("#side-menu")
      let matchingMenuItem = null
      const ul = document.getElementById("side-menu")
      const items = ul.getElementsByTagName("a")
      for (let i = 0; i < items.length; ++i) {
        if (pathName === items[i].pathname) {
          matchingMenuItem = items[i]
          break
        }
      }
      if (matchingMenuItem) {
        activateParentDropdown(matchingMenuItem)
      }
    }
    initMenu()
  }, [props.location.pathname])

  useEffect(() => {
    ref.current.recalculate()
  })

  function scrollElement(item) {
    if (item) {
      const currentPosition = item.offsetTop
      if (currentPosition > window.innerHeight) {
        ref.current.getScrollElement().scrollTop = currentPosition - 300
      }
    }
  }

  function activateParentDropdown(item) {
    item.classList.add("active")
    const parent = item.parentElement
    const parent2El = parent.childNodes[1]
    if (parent2El && parent2El.id !== "side-menu") {
      parent2El.classList.add("mm-show")
    }

    if (parent) {
      parent.classList.add("mm-active")
      const parent2 = parent.parentElement

      if (parent2) {
        parent2.classList.add("mm-show") // ul tag

        const parent3 = parent2.parentElement // li tag

        if (parent3) {
          parent3.classList.add("mm-active") // li
          parent3.childNodes[0].classList.add("mm-active") //a
          const parent4 = parent3.parentElement // ul
          if (parent4) {
            parent4.classList.add("mm-show") // ul
            const parent5 = parent4.parentElement
            if (parent5) {
              parent5.classList.add("mm-show") // li
              parent5.childNodes[0].classList.add("mm-active") // a tag
            }
          }
        }
      }
      scrollElement(item)
      return false
    }
    scrollElement(item)
    return false
  }

  return (
    <React.Fragment>
      <SimpleBar className="h-100" ref={ref}>
        <div id="sidebar-menu">
          <ul className="metismenu list-unstyled" id="side-menu">
            <li className="menu-title">{props.t("Menu")} </li>

            <li>
              <Link to="/dashboard">
                <i className="bx bxs-customize"></i>
                <span>{props.t("Dashboards")}</span>
              </Link>
            </li>

            {/* <li>
              <Link to="/#" className="has-arrow">
                <i className="bx bxs-user-pin"></i>
                <span>{props.t("Staff")}</span>
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link to="/Departments">{props.t("Departments")}</Link>
                </li>
                <li>
                  <Link to="/RolesPremissions">
                    {props.t("Roles & Premissions")}
                  </Link>
                </li>

                <li>
                  <Link to="/Staff">{props.t("Staff")}</Link>
                </li>
              </ul>
            </li> */}

            <li>
              <Link to="/#" className="has-arrow">
                <i className="bx bxs-group"></i>
                <span>{props.t("Manage Users")}</span>
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link to="/ActiveUsers">{props.t("Active Users")}</Link>
                </li>
                <li>
                  <Link to="/BlockedUsers">{props.t("Blocked Users")}</Link>
                </li>
                
                <li>
                  <Link to="/Users">{props.t("All Users")}</Link>
                </li>
              </ul>
            </li>

           
            <li>
              <Link to="/Notifications">
                <i className="bx bxs-bell-plus"></i>
                <span>{props.t("Notification")}</span>
              </Link>
            </li>

            <li>
              <Link to="/#" className="has-arrow">
                <i className="bx bxs-bank"></i>
                <span>{props.t("Payment GetWay")}</span>
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link to="/PaymentGetway">{props.t("Payment GetWay")}</Link>
                </li>
              </ul>
            </li>

            <li>
              <Link to="/#" className="has-arrow">
                <i className="bx bx-support"></i>
                <span>{props.t("Support Tickets")}</span>
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link to="/PendingTickets">{props.t("Pending Tickets")}</Link>
                </li>
                <li>
                  <Link to="/SolvedTickets">
                    {props.t("Solved Tickets")}
                  </Link>
                </li>

                <li>
                  <Link to="/AllTickets">{props.t("All Tickets")}</Link>
                </li>
              </ul>
            </li>

            <li>
              <Link to="/#" className="has-arrow">
                <i className="fas fa-cogs"></i>
                <span>{props.t("Settings")}</span>
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link to="/Faqs">{props.t("Faqs")}</Link>
                </li>
                <li>
                  <Link to="/Privacy">{props.t("Privacy Policy")}</Link>
                </li>
                <li>
                  <Link to="/Terms">{props.t("Terms & Conditions")}</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </SimpleBar>
    </React.Fragment>
  )
}

SidebarContent.propTypes = {
  location: PropTypes.object,
  t: PropTypes.any,
}

export default withRouter(withTranslation()(SidebarContent))
