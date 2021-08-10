import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import SideBar from './sidebar'
import { Switch, Route } from 'react-router-dom'
import { Row, Col, Container } from 'reactstrap'
import Dashboard, { Dashbody } from './dashboard'
import { NotificationsNone } from '@material-ui/icons'
import Wallet from './wallet'

import Analysis from './analysis'

const Nametag = styled.p`
    color: white;
    font-weight: 500;
    font-size: 18px;
`

const NotificationDiv = styled.div`
    height: 44px;
    width: 44px;
    background: #0f0f0f73;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Main = (props) => {
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
                    </Switch>
                    <Col xl={2}>
                        <Container>
                            <div className="d-flex justify-content-between align-items-center pl-2 pr-3 pt-4">
                                <NotificationDiv>
                                    <NotificationsNone
                                        style={{ color: 'white' }}
                                    />
                                </NotificationDiv>
                                <Nametag className="text-center">
                                    {props.payLoad.firstName}
                                </Nametag>
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
