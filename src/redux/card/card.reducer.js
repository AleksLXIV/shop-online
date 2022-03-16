
import CardActionTypes from './card.types';
import { addItemToCart, removeItemFromCard } from './card.utils';


const INITIAL_STATE = {
	hidden: true,
	cartItems: []
}

const cardReducer = (state = INITIAL_STATE, action) => {
	switch(action.type){
		case CardActionTypes.TOGGLE_CARD_HIDDEN:
			return{
				...state,
				hidden: !state.hidden
			};
		case CardActionTypes.ADD_ITEM:
			return{
				...state,
				cartItems: addItemToCart(state.cartItems, action.payload)
			};
		case CardActionTypes.REMOVE_ITEM:
			return {
				...state,
				cartItems:removeItemFromCard(state.cartItems, action.payload)
			}
		case CardActionTypes.CLEAR_ITEM_FROM_CARS:
			return{
				...state,
				cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
			};
		default:
			return state
	}
}

export default cardReducer