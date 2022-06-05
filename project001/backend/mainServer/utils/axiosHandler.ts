import { OtherServiceHandlerIF } from "../models/otherServiceHandlers/otherServiceHanderIF"

class AxiosHandler implements OtherServiceHandlerIF {
    request(data: any): any {
        console.log("data", data);
        return "";
    }
}