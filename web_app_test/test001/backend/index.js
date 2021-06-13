const express = require("express")
const app = express()

app.get("/api/users", function (req, res) {
  // CORS(Cross-Origin Resource Sharing)の許可(http://localhost:3000のみ)
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000')
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
  res.header(
    'Access-Control-Allow-Headers',
    'Content-Type, Authorization, access_token'
  )
  // レスポンスするjson
  res.json([
    {
      id: 1, name: "test001"
    },
    {
      id: 2, name: "test002"
    },
    {
      id: 3, name: "hello, "
    },
    {
      id: 4, name: "world!"
    }
  ])
})

app.listen(9999)