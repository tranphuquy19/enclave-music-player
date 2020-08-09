import React from 'react'
import HomePage from '../features/home/homePage'
import Album from '../features/albumList/album'
import Track from '../../containers/Track';

export const homeRoutes = [
    {
        path: '/',
        exact: true,
        main: () => <HomePage/>
    },
    {
        path: '/tracklist',
        exact: true,
        main: () => <Track/>
    },
    {
        path: '/album',
        exact: true,
        main: () => <Album/>
    },
]
