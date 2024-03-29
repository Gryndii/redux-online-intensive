//Types
import { types } from "./types";

export const postsActions = {
    //Sync
    fillPosts: (posts) => {
        return {
            type:    types.FILL_POSTS,
            payload: posts,
        };
    },
    createPost: (post) => {
        return {
            type:    types.CREATE_POST,
            payload: post,
        };
    },
    removePost: (postId) => {
        return {
            type:    types.REMOVE_POST,
            payload: postId,
        };
    },
    clearPosts: () => {
        return {
            type: types.CLEAR_POSTS,
        };
    },
    likePost: (postData) => {
        return {
            type:    types.LIKE_POST,
            payload: postData,
        };
    },
    unlikePost: (postData) => {
        return {
            type:    types.UNLIKE_POST,
            payload: postData,
        };
    },

    //Async
    fetchPostsAsync: () => {
        return {
            type: types.FETCH_POSTS_ASYNC,
        };
    },
    createPostAsync: (comment) => {
        return {
            type:    types.CREATE_POST_ASYNC,
            payload: comment,
        };
    },
    removePostAsync: (postId) => {
        return {
            type:    types.REMOVE_POST_ASYNC,
            payload: postId,
        };
    },
    likePostAsync: (postId) => {
        return {
            type:    types.LIKE_POST_ASYNC,
            payload: postId,
        };
    },
    unlikePostAsync: (postId) => {
        return {
            type:    types.UNLIKE_POST_ASYNC,
            payload: postId,
        };
    },
};
