/*
 * Created by @tranphuquy19 on 15/08/2020
 * @author: tranphuquy19@gmail.com
 */

import Client from "../shared/Client";

const fetchArtistById = async (id) => {
    try {
        const {data} = await Client(`artist/${id}`, 'GET', null);
        return data;
    } catch (e) {
        console.log(e)
    }
}

export {fetchArtistById}
