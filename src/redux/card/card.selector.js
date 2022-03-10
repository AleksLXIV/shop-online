import { createSelector } from "reselect";

const selectCart = state => state.card

export const selectCartItem = createSelector(
	[selectCart],
	card => card.cartItems
)

export const selectCartItemsCount = createSelector(
	[selectCartItem],
	cartItems=>cartItems.reduce(
		(accumalatedQuantity, cartItem) => 
		accumalatedQuantity + cartItem.quantity, 
		0
		)
)