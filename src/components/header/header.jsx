import React from 'react'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { auth } from '../firebase/firebase.utils';
import { connect } from 'react-redux';
import DropDown from '../card-dropdown/card-dropdown';
import CartIcon from './../cart-icon/cart-icon.component';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from './../../redux/card/card.selector'
import { selectCurrentUser } from './../../redux/user/user.selector';

import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink, OptionDiv } from './header.styles'


const Header = ({ currentUser, hidden }) => (
	<HeaderContainer>
		<LogoContainer  to='/'>
			<Logo className='logo' />
		</LogoContainer>
		<OptionsContainer>
			<OptionLink to='/post'>
				POST
			</OptionLink>
			<OptionLink to='/shop'>
				SHOP
			</OptionLink>
			<OptionLink to='/contact'>
				CONTACT
			</OptionLink>
			{
				currentUser ?
					<OptionLink to='./signin'>SIGN IN</OptionLink>
					:
					<OptionLink as='div' onClick={() => auth.sigOut()}>SIGN OUT</OptionLink>
			}
			<CartIcon />
		</OptionsContainer>
		{hidden ? null : <DropDown />}
	</HeaderContainer>
)

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header)