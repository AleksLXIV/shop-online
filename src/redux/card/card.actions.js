import CardActionTypes from './card.types';

export const toggleCartHidden = () => ({
	type: CardActionTypes.TOGGLE_CARD_HIDDEN
});

export const addItem = item => ({
	type: CardActionTypes.ADD_ITEM,
	payload: item
})

export const removeItem = item =>({
	type: CardActionTypes.REMOVE_ITEM,
	payload: item
})

export const clearItemFromCart = item =>({
	type: CardActionTypes.CLEAR_ITEM_FROM_CARS,
	payload: item
})