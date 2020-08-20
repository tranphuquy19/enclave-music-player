import Client from "../utils/Client";

const fetchPlaylistById = async (id) => {
    try {
        const {data} = await Client(`playlist/${id}`, 'GET', null);
        return data;
    } catch (e) {
        console.log(e)
    }
}

export {fetchPlaylistById}
