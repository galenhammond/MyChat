import React, { Component } from 'react'
import { Usernameform } from './components/Usernameform'
import { ChatScreen } from './chatscreen'
import { Footer } from './components/footer'

class App extends Component {
	constructor() {
	super()

	this.state = {
		currentScreen: 'WhatIsYourUsernameScreen',
		currentUsername: ''
	}

	this.onUsernameSubmitted = this.onUsernameSubmitted.bind(this)
	}	


	onUsernameSubmitted(username) {
		fetch(`http://localhost:3001/users`, {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify({ username }),
		})

		.then(response => {
			 console.log('success')
			 this.setState({
			 	currentUsername: username,
			 	currentScreen: 'ChatScreen'
			 })
			})

		.catch(error => {
				console.error(error)
			})
		}

  render() {
  	if (this.state.currentScreen === 'WhatIsYourUsernameScreen') {
  		return <Usernameform onSubmit={this.onUsernameSubmitted} />
  	} else if (this.state.currentScreen === 'ChatScreen') {
    return <ChatScreen currentUsername={this.state.currentUsername} /> 
  
	}   
  }
}

export default App
