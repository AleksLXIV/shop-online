import React from 'react'
import './posts.styles.scss'
import { connect } from 'react-redux';
import { deletePost } from '../../redux/posts/posts.action';


const Posts = ({posts, deletePosts}) => {
	const {id, post} = posts
		
	return (
		<div className="posts__post">
			<div className="posts__currentPost">{post}</div>
			<span onClick={()=>deletePosts(id)}>&#10005;</span>
		</div>
	)
}

const mapDispatchToProps = dispatch => ({
	deletePosts: item => dispatch(deletePost(item))
})
export default connect(null, mapDispatchToProps)(Posts)