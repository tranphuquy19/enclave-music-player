import { Injectable, HttpService } from '@nestjs/common';
import { apiConfig } from '../config/api.config';

@Injectable()
export class TrackService {
    constructor(private httpsService: HttpService) { }

    async readTrack(trackId) {
        const { headers } = apiConfig;
        const endpoint = `https://${apiConfig.baseURL}/track/${trackId}`;
        console.log({ endpoint, headers });
        const { data} = await this.httpsService.get(endpoint, { headers }).toPromise();
        console.log(data);
        return { ahihi: 123 };
    }
}
