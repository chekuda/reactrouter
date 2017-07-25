import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Login.css';

class Login extends Component {
	render() {
		return (
			<div className='Login'>
				<div className='Login-header'>
					<h2>Login Page</h2>
					<p><Link to='/projects/nuevo'>Go to projects</Link></p>
				</div>
			</div>
		)
	}
}

export default Login;
