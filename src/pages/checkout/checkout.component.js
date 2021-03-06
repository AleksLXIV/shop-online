import React from 'react'
import './checkout.styles.scss'
import { connect } from 'react-redux';
import { selectCartItem, selectCartTotal } from './../../redux/card/card.selector';
import { createStructuredSelector } from 'reselect';
import CheckoutItem from './../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';


const CheckoutPage = ({cartItems, total, ...otherProps}) => {
	console.log(otherProps)
	return(
	<div className='checkout-page'>
		<div className='checkout-header'>
			<div className='header-block'>
				<span>Product</span>
			</div>
			<div className='header-block'>
				<span>Description</span>
			</div>
			<div className='header-block'>
				<span>Quantity</span>
			</div>
			<div className='header-block'>
				<span>Price</span>
			</div>
			<div className='header-block'>
				<span>Remove</span>
			</div>
		</div>
		{
			cartItems.map(item => 
			<CheckoutItem key = {item.id} cartItem = {item} />
			)
		}
		<div className='total'>
			<span>TOTAL: ${total}</span>
		</div>
		<div style={{
			textAlign:"center",
			padding: '10px',
			color:'red',
			fontSize:'24px'
		}}>
			*Please use the following test credit card for payments*
			<br />
			4242 4242 4242 4242 - Exp: 01/20 - CVV:123
		</div>
		<StripeCheckoutButton price={total}/>
	</div>
)}

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItem,
	total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage)