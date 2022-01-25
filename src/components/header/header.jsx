import React from 'react'
import './header.styles.scss'
import { NavLink } from 'react-router-dom';
import { ReactComponent as Logo} from '../../assets/crown.svg'

const Header = () =>(
	<div className='header'>
		<NavLink className='logo-container' to='/'>
			<Logo className='logo' />
		</NavLink>
		<div className='options'>
			<NavLink className='option' to='/shop'>
				SHOP
			</NavLink>
			<NavLink className='option' to='/shop'>
				CONTACT
			</NavLink>
		</div>
	</div>
)

export default Header