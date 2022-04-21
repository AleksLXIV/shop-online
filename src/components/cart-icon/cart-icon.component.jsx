import React from 'react'
import { CartIconContainer, ItemCounterContainer, ShoppingIconContainer } from './cart-icon.styles'
import { ReactComponent as ShoppingIcon } from './../../assets/122_shopping-bag.svg'
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/card/card.actions';
import { selectCartItemsCount } from '../../redux/card/card.selector';
import { createStructuredSelector } from 'reselect';


const CartIcon = ({ toggleCartHidden, itemCount }) => (
	<CartIconContainer onClick = {toggleCartHidden}>
		<ShoppingIconContainer>
			<ShoppingIcon  />
		</ShoppingIconContainer>
		<ItemCounterContainer>{itemCount}</ItemCounterContainer>
	</CartIconContainer>
)

const mapSateToProps = createStructuredSelector({
	itemCount: selectCartItemsCount
})

const mapDispatchToProps = dispatch => ({
	toggleCartHidden: () => dispatch(toggleCartHidden())
})



export default connect(mapSateToProps, mapDispatchToProps)(CartIcon)