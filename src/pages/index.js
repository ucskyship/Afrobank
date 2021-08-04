import React, { Component } from 'react'
import HomePage from '../components/homepage/index'
import Register from '../components/register'
import SignIn from '../components/signin/signin'
import Dashboard from '../components/dashboard'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

const routes = [
    {
        path: '/register',
        component: Register,
    },
    {
        path: '/signin',
        component: SignIn,
    },
    {
        path: '/dashboard',
        component: Dashboard,
    },
]
class Main extends Component {
    render() {
        return (
            <BrowserRouter basename="/Afrobank">
                <Switch>
                    {routes.map((data, i) => (
                        <Route
                            key={i}
                            path={data.path}
                            component={data.component}
                        />
                    ))}
                    <Route path="/" component={HomePage} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Main
