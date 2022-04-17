import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({price}) =>{
	const priceForStripe = price * 100
	const publishableKey = 'pk_test_51Kpc8pASjaWHVLYBIWJEB5oIOkU5XBB69Bx0kjbq8in7eeVQcnrwOQoTREaKJWsn3tH8b5QjAun6u5nKWPMlVMhT00ELryJ0rc'

	const onToken = token => {
		console.log(token)
		alert('Payment Successful')
	}

	return(
		<StripeCheckout
			label='Pay Now'
			name='CRWN Clothing Ltd.'
			billingAddress
			shippingAddress
			image='https://svgshare.com/i/CUz.svg'
			description={`Your total is $${price}`}
			amount={priceForStripe}
			panelLabel='Pay Now'
			token={onToken}
			stripeKey={publishableKey}
		/>
	)
}

export default StripeCheckoutButton