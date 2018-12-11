import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import Navigation from './2-molecules/navigation/Navigation'
import Home from './5-pages/Home'
import Users from './5-pages/Users'
import Contact from './5-pages/Contact'
import Notfound from './5-pages/Notfound'

const App = () => {
	return (
		<Router>
			<div>
				<Navigation />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/users" component={Users} />
					<Route path="/contact" component={Contact} />
					<Route component={Notfound} />
				</Switch>
			</div>
		</Router>
	)
}

export default App