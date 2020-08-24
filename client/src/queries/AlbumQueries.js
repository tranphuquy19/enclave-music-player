
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
        return albums;
    } catch (e) {
        console.log(e);
    }
}


export {fetchAlbumById, fetchAlbumsByIds}
