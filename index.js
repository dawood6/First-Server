const http = require('http')
const request = require('request')
     ,url = 'https://jsonplaceholder.typicode.com/users'
const PORT = 3003

const usersObj = {
  users: []
}

function requestHandler() {
request(url, (error, response)=> {
  if (!error && response.statusCode === 200) {
    const { users } = usersObj.users
    const response = users
    // const newUsers = JSON.parse(users)
    // const response = JSON.parse(body)
    users.map((item) => {
     response.end(item.id)
    })
    console.log(response)
  } else {
    console.log("Got an error: ", error, ", status code: ", response.statusCode)
  }
})
}

const server = http.createServer(requestHandler)

server.listen(PORT, () => {
  console.log('server is running on port 3003')
})