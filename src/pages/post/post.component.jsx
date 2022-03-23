import React from 'react';
import './post.styles.scss'
import { ReactComponent as Envelope } from '../../assets/message.svg'
import { connect } from 'react-redux';
import { addPost, addedPost } from '../../redux/posts/posts.action';
import Posts from '../../components/posts/posts.component';
import { selectPostPosts, selectorRootPost } from '../../redux/posts/post.selector';
import { createStructuredSelector } from 'reselect';





const Post = ({ post, rootPost, onAddPost, onAddedPost }) => {
	return (
		<div className="posts">
			<div className="posts__window">
				{
					post.length ?
						post.map(item => <Posts key={item.id} posts={item} />) :
						<span className="posts__absent">No new posts</span>
				}
			</div>
			<div className="posts__inputWrap">
				<textarea type="text" value={rootPost} onChange={event => onAddPost(event.target.value)} className="posts__input" />
				<button className="posts__button" onClick={() => rootPost ? onAddedPost() : null}><Envelope /></button>
			</div>
		</div>
	)
}
const mapStateToProps = createStructuredSelector({
	post: selectPostPosts,
	rootPost: selectorRootPost
})

const mapDispatchToProps = dispatch => ({
	onAddPost: data => dispatch(addPost(data)),
	onAddedPost: () => dispatch(addedPost())
})


export default connect(mapStateToProps, mapDispatchToProps)(Post)