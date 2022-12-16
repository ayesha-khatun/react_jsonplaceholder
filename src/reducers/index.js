import { 
        FETCH_POSTS, 
        FETCH_SINGLE_POST, 

        FETCH_SINGLE_USER, 
        FETCH_USERS,

        POST_COMMENT,
        FETCH_POSTS_COMMENTS,
        FETCH_IMAGE
  
    } from '../actions/type'

let postInitialState = [
    {
        userId: 1,
        id:1,
        title: "loading ..",
        body: "loading .."
    }
]

let userInitialState = [
    {
        id: "loading ..",
        name: "loading ..",

    }
]


let imageInitialState = [
    {
        url: "loading ..",
        id:1,
        

    }
]

let commentInitialState = [
    {
        name:"loading ..",
        body:"loading .."
    }
]
export const fetchImageReducer = (state=imageInitialState, action) =>{
    switch (action.type) {
        case FETCH_IMAGE:return action.payload
    
        default: return state
    }
}

export const fetchPostsReducer = (state=postInitialState, action) =>{
    switch (action.type) {
        case FETCH_POSTS:return action.payload
    
        default: return state
    }
}

export const fetchSinglePostReducer  = (state=postInitialState, action) => {
    switch (action.type) {
        case FETCH_SINGLE_POST: return action.payload
    
        default: return state
    }
}
export const fetchUsersReducer = (state=userInitialState, action) =>{
    switch (action.type) {
        case FETCH_USERS:return action.payload
    
        default: return state
    }
}

export const fetchSingleUserReducer = (state=userInitialState, action) =>{

    switch (action.type) {
        case FETCH_SINGLE_USER:return action.payload
    
        default: return state
    }
}


export const fetchCommentsReducer = (state=commentInitialState, action) =>{

    switch (action.type) {
        case FETCH_POSTS_COMMENTS :return action.payload
    
        default: return state
    }
}

export const createdComment = (state={postId: 0}, action) =>{

    switch (action.type) {
        case POST_COMMENT:return action.payload
    
        default:return state
    }

} 