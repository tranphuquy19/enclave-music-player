/*
 * Created by @tranphuquy19 on 15/08/2020
 * @author: tranphuquy19@gmail.com
 */

import Client from "../shared/Client";

const fetchAlbumById = async (id) => {
    try {
        const {data} = await Client(`album/${id}`, 'GET', null);
        return data;
    } catch (e) {
        console.log(e)
    }
}

export {fetchAlbumById}
