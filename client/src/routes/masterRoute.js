import React from 'react'
import HomePage from '../pages/HomePage'
import AlbumPages from '../pages/AlbumPages'
import TrackListPage from '../pages/TrackListPage'
import SingleAlbumPage from '../pages/SingleAlbumPage'
import LoginPages from '../pages/LoginPages'
import PageNotFound from '../components/PageNotFound/PageNotFound'
import RegisterPages from '../pages/RegisterPages'
import FavoriteSongs from '../pages/FavoriteSongs'
import ArtistPages from '../pages/ArtistPages'

export const masterRoutes = [
    {
        path: '/',
        exact: true,
        main: () => <HomePage/>
    },
    
    {
        path: '/signin',
        exact: true,
        main: () => <LoginPages/>
    },
    {
        path: '/signup',
        exact: true,
        main: () => <RegisterPages/>
    },
    {
        path: '/tracklist',
        exact: true,
        main: () => <TrackListPage />
    },
    {
        path: '/album',
        exact: true,
        main: () => <AlbumPages />
    },
    {
        path: '/album/:id',
        exact: true,
        main: () => <SingleAlbumPage />
    },
    {
        path: '/artist',
        exact: true,
        main: () => <ArtistPages />
    },
    {
        path: '/songs',
        exact: true,
        main: () => <FavoriteSongs />
    },
    {
        path: '/',
        exact: false,
        main: () => <PageNotFound/>
    },
    
]
