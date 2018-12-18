//++ Likes
export function increment(index) {
	// body...
	return {
		type: 'INCREMENT_LIKES',
		index
	}
}

//+ Comments
export function addComment(postId, author, comment) {
	// body...
	return {
		type: 'ADD_COMMENT',
		postId,
		author,
		comment
	}
}

//-Comment
export function removeComment(postId, i) {
	// body...
	return {
		type: 'REMOVE_COMMENT',
		postId,
		i
	}
}