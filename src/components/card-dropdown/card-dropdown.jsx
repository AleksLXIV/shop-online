import React from 'react'
import './card-dropdown.styles.scss'
import CustomButton from './../custom-button/custom-button.component';
import CartItem from './../cart-item/cart-item.component';
import { connect } from 'react-redux';
import { selectCartItem } from './../../redux/card/card.selector';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import { toggleCartHidden } from './../../redux/card/card.actions';



const DropDown = ({cartItems, history, dispatch}) => (
	<div className = 'card-dropdown'>
		<div className = 'card-item'>
			{
				cartItems.length ?
				cartItems.map(cartItem => <CartItem key={cartItem.id} item = {cartItem} />)
				: (
					<span className = "empty-message"> Your cart is empty</span>
				)
			}
		</div>
		<CustomButton onClick={() => { 
			history.push('/checkout');
			dispatch(toggleCartHidden())
			}}>GO TO CHECKOUT</CustomButton>
	</div>
)

const mapStateToProps = createStructuredSelector({
		cartItems: selectCartItem
	})
 

export default withRouter(connect(mapStateToProps)(DropDown))