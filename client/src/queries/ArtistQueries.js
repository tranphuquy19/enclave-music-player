
import Client from "../utils/Client";

const fetchArtistById = async (id) => {
    try {
        const {data} = await Client(`artist/${id}`, 'GET', null);
        return data;
    } catch (e) {
        console.log(e)
    }
}
const fetchArtistByIds = async (ids) => {
    try {
        const resPromises = ids.map(id => fetchArtistById(id));
        let albums = await Promise.all(resPromises);
        return albums;
    } catch (e) {
        console.log(e);
    }
}

export {fetchArtistById, fetchArtistByIds}
