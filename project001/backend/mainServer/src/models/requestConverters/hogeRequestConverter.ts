import { HogeRequestHandler } from "../../controllers/express/hogeRequestHandler";
import { AxiosHandler } from "../../utils/axiosHandler";
// import { OtherServiceHandlerIF } from "../otherServiceHandlers/otherServiceHanderIF";

export class HogeRequestConverter {
    hogeRequestHandler: HogeRequestHandler | null = null;
    axiosHandler: AxiosHandler | null = null;
    // otherServiceHandlerIF: OtherServiceHandlerIF | null = null;

    constructor(_app: any) {
        this.hogeRequestHandler = new HogeRequestHandler(_app);
        this.axiosHandler = new AxiosHandler();
    }

    // hoge request => hoge axios request に変換
    // hoge axios response => hoge response に変換して返す
}