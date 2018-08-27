import React, { Component } from 'react'

export class TypingIndicator extends Component {
	render() {

		if (this.props.usersWhoAreTyping.length === 0) {
			return <div />

		} else if (this.props.usersWhoAreTyping.length === 1) {
			return (
			<div id='main'>
			<p className='lead'>{this.props.usersWhoAreTyping[0]} is typing ...</p>
			</div>
			)

	} else if (this.props.usersWhoAreTyping.length > 1) {
		return (
			<div id='main'>
			 <p className='lead'>{this.props.usersWhoAreTyping.join(' and ')} are typing ...</p>
			 </div>
			)

	}
}
}
export default TypingIndicator