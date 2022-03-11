import React from 'react'
import { ReactComponent as ShoppingIcon } from './../../assets/122_shopping-bag.svg'
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/card/card.actions';
import './cart-icon.styles.scss'
import { selectCartItemsCount } from '../../redux/card/card.selector';
import { createStructuredSelector } from 'reselect';


const CartIcon = ({ toggleCartHidden, itemCount }) => (
	<div className = 'cart-icon' onClick = {toggleCartHidden}>
		<ShoppingIcon className = 'shopping-icon' />
		<span className = 'item-counter'>{itemCount}</span>
	</div>
)

const mapSateToProps = createStructuredSelector({
	itemCount: selectCartItemsCount
})

const mapDispatchToProps = dispatch => ({
	toggleCartHidden: () => dispatch(toggleCartHidden())
})



export default connect(mapSateToProps, mapDispatchToProps)(CartIcon)