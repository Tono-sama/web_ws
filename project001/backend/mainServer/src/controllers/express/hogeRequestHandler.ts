const data = {"message": "hello, world!"};
const data2 = {"message": "hello, world!!!"};

export class HogeRequestHandler {
    constructor(_app: any)
    {
        _app.get('/api/hogehoge', (req: any, res: any) =>{
            // console.log('[HogeRequestHandler] GET /api/hogehoge', req);
            res.json(data);
          });
          
        _app.get('/api/hogehoge2', (req: any, res: any) =>{
            // console.log('[HogeRequestHandler] GET /api/hogehoge2', req);
            res.json(data2);
        });
    };
}