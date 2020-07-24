import React from 'react'
import Login from '../../features/Login/login'
import Home from '../pages/home'

export const masterRoutes = [
    {
        path: '/',
        exact: false,
        main: () => <Home/>
    },
    {
        path: '/login',
        exact: true,
        main: () => <Login/>
    }
]
