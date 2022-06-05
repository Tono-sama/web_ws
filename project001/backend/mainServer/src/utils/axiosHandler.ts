import { OtherServiceHandlerIF } from "../models/otherServiceHandlers/otherServiceHanderIF"
const axios = require('axios');

export class AxiosHandler implements OtherServiceHandlerIF {
    private _axiosInstance: any;

    constructor() {
        this._axiosInstance = axios.create({
            baseURL: 'http://localhost:4000',
            headers: {
                'Content-Type': 'application/json',
            },
            responseType: 'json'  
        });
    }

    // 他サービスに対してリクエストを投げる(このクラスではaxiosを使用し，HTTPリクエストを投げる)
    public request(data: any): Promise<any> {
        console.log('[AxiosHandler] request()', data);
        return new Promise((resolve: any, reject: any) => {
            this._axiosInstance.get(data)
                .then((res: any) => {
                    console.log('[AxiosHandler] request() success!!');
                    resolve(res);
                })
                .catch((err: any) => {
                    console.log('[AxiosHandler] request() error!!', err);
                    reject(err);
                });
        });
    };
}