import React from 'react'
import './header.styles.scss'
import { NavLink } from 'react-router-dom';
import { ReactComponent as Logo} from '../../assets/crown.svg'
import { auth } from '../firebase/firebase.utils';
import { connect } from 'react-redux';
import DropDown from '../card-dropdown/card-dropdown';
import CartIcon from './../cart-icon/cart-icon.component';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from './../../redux/card/card.selector'
import { selectCurrentUser } from './../../redux/user/user.selector';


const Header = ({currentUser, hidden}) =>(
	<div className='header'>
		<NavLink className='logo-container' to='/'>
			<Logo className='logo' />
		</NavLink>
		<div className='options'>
			<NavLink className="option" to='/post'>
				POST
			</NavLink>
			<NavLink className='option' to='/shop'>
				SHOP
			</NavLink>
			<NavLink className='option' to='/contact'>
				CONTACT
			</NavLink>
			{
				currentUser ?
				<NavLink className='option' to='./signin'>SIGN IN</NavLink>
				:
				<div className='option' onClick={() => auth.sigOut()}>SIGN OUT</div>
			}
			<CartIcon />
		</div>
		{hidden ? null : <DropDown />}
	</div>
)

const mapStateToProps = createStructuredSelector ({
	currentUser: selectCurrentUser,
	hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header)