import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import App from './components/5-pages/App'
import Users from './components/5-pages/Users'
import Contact from './components/5-pages/Contact'
import Notfound from './components/5-pages/Notfound'

const routing = (
	<Router>
		<div>
			<ul>
				<li><Link to="/">Home</Link></li>
				<li><Link to="/users">Users</Link></li>
				<li><Link to="/contact">Contact</Link></li>
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