import React, { Component } from 'react'
import './assets/app.css'

export class MessageList extends Component {
	render() {
		return (
			<ul>
			{this.props.messages.map((message, index) => (
				<li key={index}>
					<div>
						<span className='author lead'>{message.senderId}</span>
						<p className='speech-bubble'>{message.text}</p>
					</div>
				</li>
				))}
			</ul>
		)
	}
}
export default MessageList