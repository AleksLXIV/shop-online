import React from 'react'
import './card-dropdown.styles.scss'
import CustomButton from './../custom-button/custom-button.component';
import CartItem from './../cart-item/cart-item.component';
import { connect } from 'react-redux';
import { selectCartItem } from './../../redux/card/card.selector';


const DropDown = ({cartItems}) => (
	<div className = 'card-dropdown'>
		<div className = 'card-item'>
			{cartItems.map(cartItem => <CartItem key={cartItem.id} item = {cartItem} />)}
		</div>
		<CustomButton>GO TO CHECKOUT</CustomButton>
	</div>
)

const mapStateToProps = (state)=>{
	
	return ({
		cartItems: selectCartItem(state)
	})
} 

export default connect(mapStateToProps)(DropDown)