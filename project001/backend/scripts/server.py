import http.server
import cgi
# import json

class PostHandler(http.server.BaseHTTPRequestHandler):

    # HTTPメソッド:POSTのレスポンス定義
    def do_GET(self):
        print("client_address: ", self.client_address)
        print("path: ", self.path)

        # path毎に処理分け(固定レスポンス)
        if(self.path == '/api/hogehoge'):
            # レスポンス
            res_body = '{"response": "helloworld"}' # 固定レスポンス
            print("res_body:")
            print(res_body)
            self.send_response(200)
            self.send_header('Content-type', 'application/json; charset=utf-8')
            self.send_header('Content-length', len(res_body.encode()))
            self.end_headers()
            self.wfile.write(res_body.encode())


    # HTTPメソッド:POSTのレスポンス定義
    def do_POST(self):
        print("client_address: ", self.client_address)
        print("path: ", self.path)

        # path毎に処理分け(固定レスポンス)
        if(self.path == '/api/helloworld2'):
            content_len = int(self.headers.get("content-length"))
            req_body = self.rfile.read(content_len).decode("utf-8")
            print("req_body")
            print(req_body)

            # レスポンス
            res_body = '{"response": "helloworld"}' # 固定レスポンス
            print("res_body:")
            print(res_body)
            self.send_response(200)
            self.send_header('Content-type', 'application/json; charset=utf-8')
            self.send_header('Content-length', len(res_body.encode()))
            self.end_headers()
            self.wfile.write(res_body.encode())

        # path毎に処理分け(オウム返し)
        elif(self.path == '/api/parrot-fashion'):
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
    server = http.server.HTTPServer(('localhost', 4000), PostHandler)
    print ("Starting server, use <Ctrl-C> to stop")
    server.serve_forever()