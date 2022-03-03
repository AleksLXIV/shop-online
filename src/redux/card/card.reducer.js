
import CardActionTypes from './card.types';

const INITIAL_STATE = {
	hidden: false
}

const cardReducer = (state = INITIAL_STATE, action) => {
	switch(action.type){
		case CardActionTypes.TOGGLE_CARD_HIDDEN:
			return{
				...state,
				hidden: !state.hidden
			}
		default:
			return state
	}
}

export default cardReducer