/*
 * Created by @tranphuquy19 on 15/08/2020
 * @author: tranphuquy19@gmail.com
 */

import Client from "../utils/Client";

const fetchAlbumById = async (id) => {
    try {
        const {data} = await Client(`album/${id}`, 'GET', null);
        return data;
    } catch (e) {
        console.log(e)
    }
}

const fetchAlbumsByIds = async (ids) => {
    try {
        const resPromises = ids.map(id => fetchAlbumById(id));
        let albums = await Promise.all(resPromises);
        // albums = albums.map(album => album.data);
        return albums;
    } catch (e) {
        console.log(e);
    }
}


export {fetchAlbumById, fetchAlbumsByIds}
