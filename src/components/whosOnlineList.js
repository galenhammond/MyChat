import React, { Component } from 'react'

export class WhosOnlineList extends Component {
	render() {
		if (this.props.users) {
			return (
				<ul className='list-group'>
					{this.props.users.map((user, index) => {
					return (
					 <li className='list-group-item'>{user.name} ({user.presence.state})</li>
					 )
				})}
				</ul>
			)
		} else {
			return <p>Loading ... </p>
		}
	}
}
export default WhosOnlineList