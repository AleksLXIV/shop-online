import React from 'react'
import { ReactComponent as ShoppingIcon } from './../../assets/122_shopping-bag.svg'
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/card/card.actions';
import './cart-icon.styles.scss'



const CartIcon = ({ toggleCartHidden }) => (
	<div className = 'cart-icon' onClick = {toggleCartHidden}>
		<ShoppingIcon className = 'shopping-icon' />
		<span className = 'item-counter'>0</span>
	</div>
)

const mapDispatchToProps = dispatch => ({
	toggleCartHidden: () => dispatch(toggleCartHidden())
})


export default connect(null, mapDispatchToProps)(CartIcon)