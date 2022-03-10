
import CardActionTypes from './card.types';
import { addItemToCart } from './card.utils';

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
			}
		case CardActionTypes.ADD_ITEM:
			return{
				...state,
				cartItems: addItemToCart(state.cartItems, action.payload)
			}
		default:
			return state
	}
}

export default cardReducer