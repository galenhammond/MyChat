import React from 'react';
import { Component } from 'react';

export class SendMessageForm extends Component {
	//constructor(props) {
		//super(props)
		state = {
			text: ''
		}

		// this.onChange = this.onChange.bind(this)
		// this.onSubmit = this.onSubmit.bind(this)
	

	onChange = (e) => {
		this.setState({
			text: e.target.value
		})
		this.props.onChange()
	}

	onSubmit = (e) => {
		e.preventDefault()
		this.props.onSubmit(this.state.text)
	}

	render() {
		return (
			<div className='messageform'>
				<form onSubmit={this.onSubmit}>
					<input type='text' className='form-control' placeholder='Enter Your Message' onChange={this.onChange}/>
					<div className='buttonHolder'>
					<input type='submit' className='btn btn-light'/>
					</div>
				</form>
			</div>
			)}
}
export default SendMessageForm