import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import App from './components/App'
import Users from './components/Users'
import Contact from './components/Contact'
import Notfound from './components/Notfound'

const routing = (
	<Router>
		<div>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/users">Users</Link>
				</li>
				<li>
					<Link to="/contact">Contact</Link>
				</li>
			</ul>
			<Switch>
				<Route exact path="/" component={App} />
				<Route path="/users" component={Users} />
				<Route path="/contact" component={Contact} />
				<Route component={Notfound} />
			</Switch>
		</div>
	</Router>
)

ReactDOM.render(
	routing,
	document.getElementById('app')
)