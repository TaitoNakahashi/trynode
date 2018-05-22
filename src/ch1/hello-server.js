// httpモジュールを読み込む
const http = require('http')

// Webサーバを実行
const server = http.createServer(handler)
server.listen(3000)

function handler(request, response) {
  console.log('url:', request.url)
  console.log('method:', request.method)
  response.writeHead(200, {
    'Content-Type': 'text/html'
  })
  response.end('Hello World\n')
}
