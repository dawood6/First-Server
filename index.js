const request = require('request')
     ,url = 'https://jsonplaceholder.typicode.com/users'

const usersObj = {
  users: []
}

request(url, (error, response, body)=> {
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

