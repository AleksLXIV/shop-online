import React from 'react'
import './App.scss';
import HomePage from './pages/homepage/homepage.component';
import { Switch, Route, Redirect } from 'react-router-dom'
import ShopPage from './pages/shop/shop.component';
import SingInAndSingPage from './pages/sing-in-and-sing-up/sing-in-and-sing-up.component';
import Header from './components/header/header';
import CheckoutPage from './pages/checkout/checkout.component';
import { auth, createUserProfileDocument } from './components/firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions'
import { selectCurrentUser } from './redux/user/user.selector';
import { createStructuredSelector } from 'reselect';





class App extends React.Component{
	unsubscribeFromAuth = null

	componentDidMount(){
		const {setCurrentUser} = this.props
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth =>{
			if(userAuth){
				const userRef = await createUserProfileDocument(userAuth)

				userRef.onSnapshot(snapShot =>{
					setCurrentUser({
						id: snapShot.id,
						...snapShot.data()
					})
				})
			}
			else{
				setCurrentUser({userAuth})
			}
		})
	}

	componentWillUnmount(){
		this.unsubscribeFromAuth()
	}


	render(){
		return (
			<div>
				<Header />
				<Switch>
					<Route  exact path='/' component={HomePage} />
					<Route  path='/shop' component={ShopPage} />
					<Route  exact path='/checkout' component={CheckoutPage} />
					<Route exact path='/signin' render = {() => this.props.currentUser ? (<Redirect to = '/' />) : (<SingInAndSingPage />)} />
				</Switch>
			</div>
		);
		}	
}

const mapStateToProps = createStructuredSelector({
	user: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
	setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
