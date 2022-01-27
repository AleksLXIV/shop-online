import React from 'react'
import './App.scss';
import HomePage from './pages/homepage/homepage.component';
import { Switch, Route } from 'react-router-dom'
import ShopPage from './pages/shop/shop.component';
import SingInAndSingPage from './pages/sing-in-and-sing-up/sing-in-and-sing-up.component';
import Header from './components/header/header';



function App() {
	
	return (
		<div>
			<Header />
			<Switch>
				<Route  exact path='/' component={HomePage} />
				<Route  path='/shop' component={ShopPage} />
				<Route  path='/singin' component={SingInAndSingPage} />
			</Switch>
		</div>
	);
}

export default App;
