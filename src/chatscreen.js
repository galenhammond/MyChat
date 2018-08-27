import React, { Component } from 'react'
import Chatkit, { ChatManager, TokenProvider } from '@pusher/chatkit'
import { MessageList } from './components/messageList'
import { SendMessageForm } from './components/sendMessageForm'
import { TypingIndicator } from './components/typingIndicator'
import { WhosOnlineList} from './components/whosOnlineList'
import './components/assets/app.css'

export class ChatScreen extends Component {

	state = {
		messages: [],
		currentRoom: {},
		currentUser: {},
		usersWhoAreTyping: [],
	}

	componentDidMount() {
		const chatManager = new Chatkit.ChatManager({
			instanceLocator: 'v1:us1:a292b975-e752-4236-afd7-b7bc9d94312d',
			key: '79b35741-5198-4553-93c9-e20869f5abb9:6QTUJZEaofx9OJZDe7S9P+9p0822n83vbAsQc6DsQsk=',
			userId: this.props.currentUsername,
			tokenProvider: new Chatkit.TokenProvider({
				url: 'http://localhost:3001/authenticate',
			}),
	})


		chatManager
			.connect()
			.then(currentUser => {
				this.setState({currentUser})
			return currentUser.subscribeToRoom({
			 	roomId: 14769751,
			 	messageLimit: 100,
			 	hooks: {
			 		onNewMessage: message => {
			 			this.setState({
			 				messages: [...this.state.messages, message],
			 			})
			 		},
			 	onUserStartedTyping: user => { 
			 		this.setState({usersWhoAreTyping: [...this.state.usersWhoAreTyping, user.name]
			 			})
			 	},
			 	onUserStoppedTyping: user => { 
			 		this.setState({usersWhoAreTyping: this.state.usersWhoAreTyping.filter(
			 			username => username !== user.name
			 			)
			 			})
			 		},

			 	onUserComeOnline: () => this.forceUpdate(),
			 	onUserWentOffline: () => this.forceUpdate(),
			 	onUserJoined: () => this.forceUpdate(),

			 	},
			 })
			})
			.then(currentRoom => {this.setState({currentRoom})
			})
			.catch(error => {
				console.error(error)
			})
		}
	sendMessage = (text) => {
		this.state.currentUser.sendMessage({
			roomId: this.state.currentRoom.id,
			text,
		})
	}
	sendTypingEvent = () => {
		this.state.currentUser
			.isTypingIn({roomId: this.state.currentRoom.id})
			.catch(error => { console.log('error', error) 
		})
	}

	render() {
		return(
			<div className=' container-fluid main'>
				<div className='row'>
					<div class="col-3 px-1 bg-light position-fixed mine" id="sticky-sidebar">
						<h2>Who's Online</h2>
						<WhosOnlineList users={this.state.currentRoom.users} />
					</div>
			<div className='col offset-3' id='main'>
			<MessageList messages={this.state.messages} />
			<TypingIndicator usersWhoAreTyping={this.state.usersWhoAreTyping} />
			<SendMessageForm onSubmit={this.sendMessage} onChange={this.sendTypingEvent} />
			</div>
			</div>
			</div>
			)
	}
}
export default ChatScreen