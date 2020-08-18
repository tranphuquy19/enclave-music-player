/*
 * Created by @tranphuquy19 on 15/08/2020
 * @author: tranphuquy19@gmail.com
 */

import Client from "../utils/Client";
import Types from '../utils/DataSeed';

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
        // tracks = tracks.map(track => track.data);
        return tracks;
    } catch (e) {
        console.log(e);
    }
}

export { fetchTrackById, fetchTracksByIds }
