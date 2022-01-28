import React from 'react'
import './App.scss';
import HomePage from './pages/homepage/homepage.component';
import { Switch, Route } from 'react-router-dom'
import ShopPage from './pages/shop/shop.component';
import SingInAndSingPage from './pages/sing-in-and-sing-up/sing-in-and-sing-up.component';
import Header from './components/header/header';
import { auth } from './components/firebase/firebase.utils';



class App extends React.Component{
	constructor(props){
		super(props)

		this.state = {
			currentUser: null
		}
	}

	unsubscribeFromAuth = null

	componentDidMount(){
		this.unsubscribeFromAuth = auth.onAuthStateChanged(user =>{
			this.setState({currentUser: user})
			console.log(user)
		})
	}

	componentWillUnmount(){
		this.unsubscribeFromAuth()
	}


	render(){
		return (
			<div>
				<Header currentUser = {this.state.currentUser} />
				<Switch>
					<Route  exact path='/' component={HomePage} />
					<Route  path='/shop' component={ShopPage} />
					<Route  path='/signin' component={SingInAndSingPage} />
				</Switch>
			</div>
		);
		}	
}

export default App;
