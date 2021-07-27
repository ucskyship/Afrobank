import React, { Component } from 'react'
import HomePage from '../components/homepage'
import Register from '../components/register'
import SignIn from '../components/signin/signin'
import Dashboard from '../components/dashboard'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

const routes = [
    {
        path: '/',
        component: HomePage,
    },
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
            <BrowserRouter>
                <Switch>
                    {routes.map((data, i) => (
                        <div key={i}>
                            <Route
                                path={data.path}
                                exact
                                component={data.component}
                            />
                        </div>
                    ))}
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Main
