import { HogeRequestHandler } from "../../controllers/express/hogeRequestHandler";

export class HogeRequestConverter {
    hogeRequestHandler: HogeRequestHandler;

    constructor(_app: any) {
        this.hogeRequestHandler = new HogeRequestHandler(_app);
        // GET メソッド '/api/hoge3' => '/api/hogehoge'
        this.hogeRequestHandler.setFunction('GET', '/api/hoge3', '/api/hogehoge');
    }
}
