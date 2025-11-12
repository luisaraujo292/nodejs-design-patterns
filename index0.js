const http = require('http')

const hostname = '0.0.0.0' // Listen on all available network interfaces
const port = process.env.PORT || 3000 // Use Heroku's assigned port or default to 3000

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('Hello World from Heroku!\n')
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})
