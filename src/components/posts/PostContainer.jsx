import React from 'react'
import { connect } from "react-redux";
import SinglePost from "./SinglePost";
import {  fetchPosts,fetchSinglePost,fetchUsers,fetchSingleUser,fetchComments,fetchImage} from "../../actions"

class PostContainer extends React.Component {

    componentDidMount(){
        this.props.fetchPosts()  
    }

    render(){
        let posts = this.props.posts.slice(0, 20)      
        return (
            <>
                <h1 className="my-4 text-center">All Posts</h1>
                <div className="row mr-2 ml-2">                   
                    {
                        posts.map(post => <SinglePost  key={post.id} id={post.id} title={post.title} body={post.body} />)
                    }              
                </div> 
            </>      
        )
    }
}

const mapStateToProps = state =>{
    return {
        posts:state.posts,
        images:state.images,
    }
}

export default connect(mapStateToProps, {fetchImage,fetchPosts,fetchSinglePost,fetchUsers,fetchSingleUser,fetchComments })(PostContainer)