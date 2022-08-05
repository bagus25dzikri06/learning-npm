const axios = require('axios')
let http = require('http')

axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
  const users = res.data
  console.log(`Code Status: ${res.status}`)

  users[0].name = 'Bagus Dzikri Hidayat'
  users[0].email = 'bagusdzikri@gmail.com'
  
  http.createServer((req, res) => {
    res.writeHead(200, {
      'Content-Type': 'text/html'
    })
    for (user of users) {
      res.write(`<li>${user.name}</li>`)
    }
    res.end()
  }).listen(8080)
}).catch(err => {
  console.log(err.message)
})

console.log('Server running in localhost:8080')