import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'

const Navigation = () => {
	return (
		<nav>
			<ul>
				<li><Link to="/">Home</Link></li>
				<li><Link to="/users">Users</Link></li>
				<li><Link to="/contact">Contact</Link></li>
			</ul>
		</nav>
	)
}

export default Navigation