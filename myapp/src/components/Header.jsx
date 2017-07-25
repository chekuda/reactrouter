import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom'

class Header extends Component {
	render() {
		return (
			<div className='Header'>
				<div className='header-grid'>
					<div className='header-menu'><Link to="/">Home</Link></div>
				  <div className='header-menu'><Link to="/login">Login</Link></div>
				  <div className='header-menu'><Link to="/projects/nuevo">Projects</Link></div>
				</div>
			</div>
		)
	}
}

export default Header;