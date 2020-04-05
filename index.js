const http = require('http')
const request = require('request')
const url = 'https://jsonplaceholder.typicode.com/users'
const PORT = 3003

const usersObj = {
  users: []
}

const getUsers = () => {
  return new Promise((resolve, reject) => {
    request(url, (error, response) => {
      if (!error && response.statusCode === 200) {
        let { users } = usersObj
        users = [...users, response.body]
        resolve(users)
      } else {
        reject(new Error('Server Error, please try again'))
      }
    })
  })
}

async function requestHandler (req, res) {
  try {
    const data = await getUsers()
    res.end(JSON.stringify(data))
  } catch (err) {
    res.end(err.message)
  }
}

const server = http.createServer(requestHandler)

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
