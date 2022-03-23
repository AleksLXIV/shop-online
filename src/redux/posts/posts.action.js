import PostActionTypes from './posts.types';

export const addPost = data => ({
	type: PostActionTypes.ADD_POST,
	payload: data
})

export const addedPost = () => ({
	type: PostActionTypes.ADDED_POST
})

export const deletePost = post => ({
	type: PostActionTypes.DELETE_POST,
	payload: post
})