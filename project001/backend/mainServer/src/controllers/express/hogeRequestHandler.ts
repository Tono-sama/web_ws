const dummyData = {"message": "hello, world!"};
const dummyData2 = {"message": "hello, world!!!"};

import { AxiosHandler } from "../../utils/axiosHandler";

export class HogeRequestHandler {
    private _app: any;
    private axiosHandler: AxiosHandler;

    constructor(_app: any) {
        this._app = _app;
        this.axiosHandler = new AxiosHandler();
    };

    public setFunction(method: 'GET'|'POST', fromURL: string, toURL: string): void {
        if(!this._app) return;
        console.log('[HogeRequestHandler] setFunction() method:', method, 'fromURL:', fromURL, 'toURL:', toURL);

        switch(method) {
            case 'GET':
                this._app.get(fromURL, async (req: any, res: any) => {
                    console.log('[HogeRequestHandler] HTTP request method:', method, 'URL:', fromURL);
                    const result = await this.axiosHandler.request(toURL);
                    console.log('[HogeRequestHandler] exec GET func status:', result.status, ', data:', result.data);
                    res.status(result.status).json(result.data);
                });
                break;
            case 'POST':
                this._app.post(fromURL, async (req: any, res: any) => {
                    console.log('[HogeRequestHandler] HTTP request method:', method, 'URL:', fromURL);
                    // res = await this.axiosHandler.request(toURL);
                    // TODO: bodyを入れられるようにする
                });
                break;
        }
    }
}