import React, { Component } from 'react'
import HomePage from '../components/homepage/index'
import Register from '../components/register'
import SignIn from '../components/signin/signin'
import Dashboard from '../components/dashboard'
import SignOut from '../components/sigout/signOut'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ProtectedroutePages from './protectedroute.pages'

const routes = [
    {
        path: '/register',
        component: Register,
        public: true,
    },
    {
        path: '/signin',
        component: SignIn,
        public: true,
    },
    {
        path: '/dashboard',
        component: Dashboard,
        public: false,
    },
    {
        path: '/signout',
        component: SignOut,
        public: true,
    },
]
class Main extends Component {
    render() {
        return (
            <BrowserRouter basename="/Afrobank">
                <Switch>
                    {routes.map((data, i) =>
                        data.public ? (
                            <Route
                                key={i}
                                path={data.path}
                                component={data.component}
                            />
                        ) : (
                            <ProtectedroutePages
                                key={i}
                                path={data.path}
                                component={data.component}
                            />
                        )
                    )}
                    <Route path="/" component={HomePage} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Main
