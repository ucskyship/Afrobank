import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import SideBar from './sidebar'
import { Switch, Route } from 'react-router-dom'
import {
    Row,
    Col,
    Container,
    Dropdown,
    DropdownMenu,
    DropdownItem,
    DropdownToggle,
} from 'reactstrap'
import Dashboard, { Dashbody } from './dashboard'
import { NotificationsNone } from '@material-ui/icons'
import Wallet from './wallet'
import {
    fetchAllNotifications,
    deleteSingleNotification,
} from '../../services/notifications'

import Analysis from './analysis'
import Profile from './profile'
import Settings from './settings'

const NotificationDiv = styled.div`
    height: 44px;
    width: 44px;
    background: #0f0f0f73;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`
const Menu = styled(DropdownMenu)`
    background: #000000;
    width: 330px;
    max-height: 200px;
    overflow-y: scroll;
    ::-webkit-scrollbar {
        display: none;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;
    overflow-x: hidden;
    &:hover {
        background: #000000;
    }
`
const Item = styled(DropdownItem)`
    color: white;
    width: 100%;
    font-size: 14px;
    &:hover {
        background: #0f0f0fc7;
        color: white;
    }
`

const Main = (props) => {
    const [showNotification, setNotification] = useState(false)
    const [userNotification, setUsernotification] = useState({
        notifications: [],
    })

    const toggleNotification = () => {
        setNotification((prevState) => !prevState)
    }

    const deleteNotification = async (id) => {
        await deleteSingleNotification(id)
    }

    useEffect(() => {
        const { accountNumber } = props.payLoad
        const getNotifications = async () => {
            try {
                setUsernotification({
                    notifications: await fetchAllNotifications(accountNumber),
                })
            } catch (error) {
                console.log(error)
            }
        }
        getNotifications()
    }, [props.payLoad])

    return (
        <Dashbody className="pb-4">
            <Col>
                <Row>
                    <Col xl={2}>
                        <SideBar />
                    </Col>

                    <Switch>
                        <Route exact path="/dashboard" component={Dashboard} />
                        <Route
                            exact
                            path="/dashboard/wallet"
                            component={Wallet}
                        />
                        <Route
                            exact
                            path="/dashboard/analysis"
                            component={Analysis}
                        />
                        <Route
                            exact
                            path="/dashboard/profile"
                            component={Profile}
                        />
                        <Route
                            exact
                            path="/dashboard/Settings"
                            component={Settings}
                        />
                    </Switch>
                    <Col xl={1}>
                        <Container>
                            <div className="d-flex justify-content-between align-items-center pl-2 pr-3 pt-4">
                                <Dropdown
                                    isOpen={showNotification}
                                    toggle={toggleNotification}
                                    className="p-0"
                                >
                                    <DropdownToggle
                                        style={{
                                            background: 'none',
                                            border: 'none',
                                            outline: 'none',
                                        }}
                                        className="p-0 m-0"
                                    >
                                        <NotificationDiv>
                                            <NotificationsNone
                                                style={{ color: 'white' }}
                                            />
                                        </NotificationDiv>
                                    </DropdownToggle>
                                    <Menu right>
                                        {!userNotification.notifications ? (
                                            <Item
                                                className="d-flex justify-content-center align-items-center"
                                                style={{ height: '40px' }}
                                            >
                                                You don't have any notification
                                            </Item>
                                        ) : (
                                            userNotification.notifications.map(
                                                (data, idx) => (
                                                    <Item
                                                        style={{
                                                            borderBottom:
                                                                '1px solid white',
                                                            height: '50px',
                                                        }}
                                                        key={idx}
                                                        onClick={() =>
                                                            deleteNotification(
                                                                data._id
                                                            )
                                                        }
                                                    >
                                                        {data.notification_text}
                                                    </Item>
                                                )
                                            )
                                        )}
                                    </Menu>
                                </Dropdown>
                            </div>
                        </Container>
                    </Col>
                </Row>
            </Col>
        </Dashbody>
    )
}

const mapStateToProps = (state) => ({
    payLoad: state.user.signIn.payLoad,
})

export default connect(mapStateToProps, {})(Main)
