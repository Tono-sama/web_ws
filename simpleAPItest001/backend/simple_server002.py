import http.server
import cgi
# import json

class PostHandler(http.server.BaseHTTPRequestHandler):
    
    def do_POST(self):
        # リクエスト
        # print("call API")
        # print(vars(self))
        print("client_address: ", self.client_address)
        # print("headers")
        # print(self.headers)
        print("path: ", self.path)

        # path毎に処理分け(固定レスポンス)
        if(self.path == '/api/test1'):
            content_len = int(self.headers.get("content-length"))
            req_body = self.rfile.read(content_len).decode("utf-8")
            print("req_body")
            print(req_body)

            # レスポンス
            res_body = '{"response": true}' # 固定レスポンス
            print("res_body:")
            print(res_body)
            self.send_response(200)
            self.send_header('Content-type', 'application/json; charset=utf-8')
            self.send_header('Content-length', len(res_body.encode()))
            self.end_headers()
            self.wfile.write(res_body.encode())

        # path毎に処理分け(オウム返し)
        elif(self.path == '/api/test2'):
            content_len = int(self.headers.get("content-length"))
            req_body = self.rfile.read(content_len).decode("utf-8")
            print("req_body")
            print(req_body)

            # レスポンス
            res_body = req_body # オウム返し
            print("res_body:")
            print(res_body)
            self.send_response(200)
            self.send_header('Content-type', 'application/json; charset=utf-8')
            self.send_header('Content-length', len(res_body.encode()))
            self.end_headers()
            self.wfile.write(res_body.encode())


        # 非登録パスはエラーを返す
        else:
            self.send_response(400)

        return

if __name__ == '__main__':
    import http.server
    server = http.server.HTTPServer(('localhost', 8080), PostHandler)
    print ("Starting server, use <Ctrl-C> to stop")
    server.serve_forever()