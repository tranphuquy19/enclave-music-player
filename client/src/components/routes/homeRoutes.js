import React from 'react'
import HomePage from '../../features/home/homePage'
import TrackList from '../../features/trackList/trackList'
import Album from '../../features/albumList/album'

export const homeRoutes = [
    {
        path: '/',
        exact: true,
        main: () => <HomePage/>
    },
    {
        path: '/tracklist',
        exact: true,
        main: () => <TrackList/>
    },
    {
        path: '/album',
        exact: true,
        main: () => <Album/>
    },
]
