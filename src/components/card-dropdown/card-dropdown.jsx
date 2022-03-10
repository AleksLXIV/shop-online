import React from 'react'
import './card-dropdown.styles.scss'
import CustomButton from './../custom-button/custom-button.component';
import CartItem from './../cart-item/cart-item.component';
import { connect } from 'react-redux';


const DropDown = ({cartItems}) => (
	<div className = 'card-dropdown'>
		<div className = 'card-item'>
			{cartItems.map(cartItem => <CartItem key={cartItem.id} item = {cartItem} />)}
		</div>
		<CustomButton>GO TO CHECKOUT</CustomButton>
	</div>
)

const mapStateToProps = ({card: {cartItems}})=>{
	
	return ({
		cartItems
	})
} 

export default connect(mapStateToProps)(DropDown)