import React from 'react'
import {CardDropdownContainer, CardItemContainer, EmptyMessageContainer} from'./card-dropdown.styles'
import CustomButton from './../custom-button/custom-button.component';
import CartItem from './../cart-item/cart-item.component';
import { connect } from 'react-redux';
import { selectCartItem } from './../../redux/card/card.selector';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import { toggleCartHidden } from './../../redux/card/card.actions';




const DropDown = ({cartItems, history, dispatch}) => (
	<CardDropdownContainer>
		<CardItemContainer>
			{
				cartItems.length ?
				cartItems.map(cartItem => <CartItem key={cartItem.id} item = {cartItem} />)
				: (
					<EmptyMessageContainer> Your cart is empty</EmptyMessageContainer>
				)
			}
		</CardItemContainer>
		<CustomButton onClick={() => { 
			history.push('/checkout');
			dispatch(toggleCartHidden())
			}}>GO TO CHECKOUT</CustomButton>
		</CardDropdownContainer>
)

const mapStateToProps = createStructuredSelector({
		cartItems: selectCartItem
	})
 

export default withRouter(connect(mapStateToProps)(DropDown))