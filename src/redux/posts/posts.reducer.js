
import PostActionTypes from './posts.types';
const INITIAL_STATE = {
	post:[],
	rootPost: ''
}

const postReducer = (state = INITIAL_STATE, action) => {
	switch(action.type){
		case PostActionTypes.ADD_POST:
			return{
				...state,
				rootPost: action.payload
			}
		case PostActionTypes.ADDED_POST:
			return{
				...state,
				post: [...state.post,{ id: state.post.length, post: state.rootPost}],
				rootPost: ''
			}
		case PostActionTypes.DELETE_POST:
			return{
				...state,
				post: state.post.filter(post => post.id !== action.payload)
			}
		default:
			return state
	}
}

export default postReducer
