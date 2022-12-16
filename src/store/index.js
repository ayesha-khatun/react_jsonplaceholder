import { combineReducers, createStore, applyMiddleware } from "redux"
import { 
        fetchPostsReducer, 
        fetchSinglePostReducer, 

        fetchUsersReducer,
        fetchSingleUserReducer, 

        fetchCommentsReducer,
        createdComment,
        fetchImageReducer
    } from "../reducers";

import thunk from "redux-thunk";

let rootReducer = combineReducers({
    posts : fetchPostsReducer,
    singlePost: fetchSinglePostReducer,
    
    users:fetchUsersReducer,
    singleUser:fetchSingleUserReducer,
  
    commentsAssociatedToPost: fetchCommentsReducer,
    images:fetchImageReducer,
    createdComment
})

export default createStore(rootReducer, applyMiddleware(thunk))