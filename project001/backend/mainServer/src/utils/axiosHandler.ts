import { OtherServiceHandlerIF } from "../models/otherServiceHandlers/otherServiceHanderIF"

export class AxiosHandler implements OtherServiceHandlerIF {
    request(data: any): any {
        console.log("[AxiosHandler] request() data:", data);
        const res = "";
        console.log("[AxiosHandler] request() res=", res);
        return res;
    }
}