import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist' 
import storage from 'redux-persist/lib/storage'

import userReducer from './user/user.reducer';
import cardReducer from './card/card.reducer';
import postReducer from './posts/posts.reducer';

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['card']
}

const rootReducer = combineReducers({
	user: userReducer,
	card: cardReducer,
	post: postReducer
	
})

export default persistReducer(persistConfig, rootReducer)