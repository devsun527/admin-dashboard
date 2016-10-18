export const FETCH_POSTS_REQUESTED = 'FETCH_POSTS_REQUESTED';
export const FETCH_POSTS_SUCCEEDED = 'FETCH_POSTS_SUCCEEDED';
export const FETCH_POSTS_FAILED = 'FETCH_POSTS_FAILED';

export const ADD_POST_REQUESTED = 'ADD_POST_REQUESTED';
export const ADD_POST_SUCCEEDED = 'ADD_POST_SUCCEEDED';
export const ADD_POST_FAILED = 'ADD_POST_FAILED';

export const REMOVE_POST_REQUESTED = 'REMOVE_POST_REQUESTED';
export const REMOVE_POST_SUCCEEDED = 'REMOVE_POST_SUCCEEDED';
export const REMOVE_POST_FAILED = 'REMOVE_POST_FAILED';

export const fetchPostsRequested = () => ({
  type: FETCH_POSTS_REQUESTED,
});

export const fetchPostsSucceeded = blogPosts => ({
  type: FETCH_POSTS_SUCCEEDED,
  blogPosts,
});

export const fetchPostsFailed = blogPosts => ({
  type: FETCH_POSTS_FAILED,
  blogPosts,
});


export const addPostRequested = addedPost => ({
  type: ADD_POST_REQUESTED,
  addedPost,
});

export const addPostSucceeded = addedPost => ({
  type: ADD_POST_SUCCEEDED,
  addedPost,
});

export const addPostFailed = addedPost => ({
  type: ADD_POST_FAILED,
  addedPost,
});


export const removePostRequested = postId => ({
  type: REMOVE_POST_REQUESTED,
  postId,
});

export const removePostSucceeded = postId => ({
  type: REMOVE_POST_SUCCEEDED,
  postId,
});

export const removePostFailed = postId => ({
  type: REMOVE_POST_FAILED,
  postId,
});