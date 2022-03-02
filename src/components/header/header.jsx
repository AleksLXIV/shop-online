import React from 'react'
import './header.styles.scss'
import { NavLink } from 'react-router-dom';
import { ReactComponent as Logo} from '../../assets/crown.svg'
import { auth } from '../firebase/firebase.utils';
import { connect } from 'react-redux';



const Header = ({currentUser}) =>(
	<div className='header'>
		<NavLink className='logo-container' to='/'>
			<Logo className='logo' />
		</NavLink>
		<div className='options'>
			<NavLink className='option' to='/shop'>
				SHOP
			</NavLink>
			<NavLink className='option' to='/contact'>
				CONTACT
			</NavLink>
			{
				currentUser ?
				<div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
				:
				<NavLink className='option' to='./signin'>SIGN IN</NavLink>
			}
		</div>
	</div>
)

const mapStateToProps = state =>({
	currentUser: state.user.userReducer
})

export default connect(mapStateToProps)(Header)