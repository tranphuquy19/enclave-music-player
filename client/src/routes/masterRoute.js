import React from 'react'
import Login from '../components/features/Login/Login'
import HomePage from '../pages/HomePage'
import AlbumPages from '../pages/AlbumPages'
import TrackListPage from '../pages/TrackListPage'
import SingleAlbumPage from '../pages/SingleAlbumPage'

export const masterRoutes = [
    {
        path: '/',
        exact: true,
        main: () => <HomePage/>
    },
    {
        path: '/login',
        exact: true,
        main: () => <Login/>
    },
    {
        path: '/tracklist',
        exact: true,
        main: () => <TrackListPage />
    },
    {
        path: '/album',
        exact: true,
        main: () => <AlbumPages/>
    },
    {
        path: '/album/:id',
        exact: true,
        main: () => <SingleAlbumPage/>
    },
    
]
