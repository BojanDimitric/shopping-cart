import React, { useEffect } from 'react';
import { connect } from 'react-redux'; 
import { Switch, Route, Redirect } from 'react-router-dom';

import './Bootstrap/bootstrap.min.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

import { auto } from './Store'

import Navigation from './Components/Navigation';
import Login from './Components/Login';
import Logout from './Components/Logout';
import Shop from './Components/Shop';
// import Form from './Components/Form';

const App = props => {
	useEffect(() => props.auto(), []);

	let routes = (
		<Switch>
			<Route path='/' exact component={Login} />
			<Route path='/login' component={Login} />
			<Redirect to='/' />
		</Switch>
	);
	if (props.authenticated) {
		routes = (
			<Switch>
				<Route path='/shop' component={Shop} />
				<Route path='/logout' component={Logout} />
				<Redirect to='/shop' />
			</Switch>
		);
	};

	return (
		<>
			<Navigation />
			{routes}
		</>
	);
};

const mapState = state => ({
	authenticated: state.auth.token !== null
});

const mapDispatch = dispatch => ({
	auto: () => dispatch(auto())
}); 

export default connect(mapState, mapDispatch)(App);
