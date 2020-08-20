import Client from "../utils/Client";

const fetchTrackById = async (id) => {
    try {
        const { data } = await Client(`track/${id}`, 'GET', null);
        return data;
    } catch (e) {
        console.log(e)
    }
}

const fetchTracksByIds = async (ids) => {
    try {
        const resPromises = ids.map(id => fetchTrackById(id));
        let tracks = await Promise.all(resPromises);
        return tracks;
    } catch (e) {
        console.log(e);
    }
}

const voteTrackById = async (id, isUp) => {
    try {
        const { data } = await Client(`track/${id}/${isUp ? 'voteup' : 'votedown'}`, 'GET', null);
        return data;
    } catch (e) {
        console.log(e)
    }
}

export { fetchTrackById, fetchTracksByIds, voteTrackById  }
