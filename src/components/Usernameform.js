import React from 'react';
import { Component } from 'react';
import './assets/app.css'
import { Footer } from './footer'

export class Usernameform extends Component {
	//constructor(props) {
		//super(props)
		state = {
			username: ''
		}

		// this.onChange = this.onChange.bind(this)
		// this.onSubmit = this.onSubmit.bind(this)
	

	onChange = (e) => {
		this.setState({
			username: e.target.value
		})
	}

	onSubmit = (e) => {
		e.preventDefault()
		this.props.onSubmit(this.state.username)
	}

	render() {
		return (
			<div>
				<nav className='navbar navbar-light bg-light'>
					<p className='navbar-brand'>W+</p>
				</nav>
			<div className='jumbotron container-fluid bg-light'>
			<img src='http://www.pngall.com/wp-content/uploads/2016/07/Arrow-Free-PNG-Image.png' height='120px' width='120px'/>
				<h1 className='display-1'>Join a Chatroom Today</h1>
				<p className='display-4'>Team communication at it's finest</p>
			</div>
			<div className='username'>
				<form onSubmit={this.onSubmit} >
					<input type='text' className='form-control' placeholder='Enter a username' onChange={this.onChange}/>
					<div className='buttonHolder'>
					<input type='submit' className='btn btn-light'/>
					</div>
				</form>
				</div>
			</div>
			)}
}
export default Usernameform