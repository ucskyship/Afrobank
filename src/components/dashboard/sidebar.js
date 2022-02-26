import React from 'react'
import { NavLink } from 'react-router-dom'
import Styled from 'styled-components'
import {
    Dashboard,
    AccountBalance,
    Settings,
    Payment,
    Person,
    ExitToApp,
} from '@material-ui/icons'
import styled from 'styled-components'
import { Col } from 'reactstrap'

export const Type = styled.span`
    color: ${(props) => props.color};
    font-size: ${(props) => props.size}px;
`
export const activeClass = 'active'
export const Sidelink = Styled((props) => (
    <NavLink {...props} activeClassName={activeClass} />
))`
  color: white;
  font-wight: 500;
  font-size: 15px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 10px;
  border-radius: 10px;
  transition: all ease 0.3s;
  &:hover {
    background: #4004af,
    color: white;
  }
  &.${activeClass} {
    background: #4004af;
    color: white;
  }
`
export const BottomNavLink = Styled((props) => (
    <NavLink {...props} activeClassName={activeClass} />
))`
  color: white;
  font-wight: 500;
  font-size: 15px;
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 10px;
  transition: all ease 0.3s;
  &.${activeClass} {
    background: #4004af;
    color: white;
  }
`

const dashboardRoutes = [
    {
        path: '/dashboard',
        name: 'Dashboard',
        icon: <Dashboard />,
    },
    {
        path: '/dashboard/analysis',
        name: 'Send money',
        icon: <Payment />,
    },
    {
        path: '/dashboard/wallet',
        name: 'Wallet',
        icon: <AccountBalance />,
    },
    {
        path: '/dashboard/profile',
        name: 'Profile',
        icon: <Person />,
    },
    {
        path: '/dashboard/Settings',
        name: 'Settings',
        icon: <Settings />,
    },
]
const SideBar = () => {
    return (
        <Col className="p-0 m-0" style={{ position: 'static', width: '100%' }}>
            <Col className="pt-4">
                <Type size="25" className="font-weight-bold" color="white">
                    Afrobank
                </Type>
            </Col>
            <Col className="hide" style={{ marginTop: '55px' }}>
                {dashboardRoutes.map((data, idx) => {
                    return (
                        <Sidelink
                            key={idx}
                            exact
                            to={data.path}
                            style={{ textDecoration: 'none' }}
                        >
                            <span className="icon-size">{data.icon}</span>
                            <span className="pl-3">{data.name}</span>
                        </Sidelink>
                    )
                })}
                <div className="d-flex justify-content-end flex-column align-item-center">
                    <Sidelink
                        exact
                        to="/signout"
                        style={{ textDecoration: 'none' }}
                    >
                        <ExitToApp />
                        <span className="pl-3">log out</span>
                    </Sidelink>
                </div>
            </Col>

            <div className="bottom_nav bg-dark m-0 ">
                {dashboardRoutes.map((data, idx) => {
                    return (
                        <div key={idx}>
                            <BottomNavLink
                                exact
                                to={data.path}
                                style={{ textDecoration: 'none' }}
                            >
                                {data.icon}
                                <span className="pl-3 hide">{data.name}</span>
                            </BottomNavLink>
                        </div>
                    )
                })}
            </div>
        </Col>
    )
}

export default SideBar
