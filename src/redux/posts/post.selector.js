import { createSelector } from "reselect";


const selectorPost = state => state.post

export const selectPostPosts = createSelector(
	[selectorPost],
	post => post.post
)

export const selectorRootPost = createSelector(
	[selectorPost],
	post => post.rootPost
)