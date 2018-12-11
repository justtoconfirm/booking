import React from 'react'
import ReactDOM from 'react-dom'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Header from './3-organisms/header/Header'
import Home from './5-pages/Home'
import Users from './5-pages/Users'
import Contact from './5-pages/Contact'
import Notfound from './5-pages/Notfound'
import Footer from './3-organisms/footer/Footer'

const App = () => {
	return (
		<Router>
			<React.Fragment>
				<Header />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/users" component={Users} />
					<Route path="/contact" component={Contact} />
					<Route component={Notfound} />
				</Switch>
				<Footer />
			</React.Fragment>
		</Router>
	)
}

export default App