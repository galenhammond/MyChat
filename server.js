const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const Chatkit = require('@pusher/chatkit-server');

const app = express()

const chatkit = new Chatkit.default({
	instanceLocator: 'v1:us1:a292b975-e752-4236-afd7-b7bc9d94312d',
	key: '79b35741-5198-4553-93c9-e20869f5abb9:6QTUJZEaofx9OJZDe7S9P+9p0822n83vbAsQc6DsQsk=',
})

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

app.post('/users', (req, res) => {
	const { username } = req.body

chatkit
	.createUser({
		name: username,
		id: username,
	})
	.then(() => { res.sendStatus(201)
	})
	.catch(error => {
		if (error.error_type === 'services/chatkit/user_already_exists') {
			console.log(`User already exists: ${username}`)
			res.sendStatus(200)
		} else {
			res.status(error.status).json(error)
		}
	})
})

app.post('/authenticate', (req, res) => {
      const authData = chatkit.authenticate({
        userId: req.query.user_id
      })
      res.status(authData.status).send(authData.body)
    })

const PORT = 3001
app.listen(PORT, err => {
  if (err) {
    console.error(err)
  } else {
    console.log(`Running on port ${PORT}`)
  }
})
