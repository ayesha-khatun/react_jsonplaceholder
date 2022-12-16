import React, { Component } from 'react'
import { connect } from "react-redux";
import {  fetchPosts,fetchSinglePost,fetchUsers,fetchSingleUser,fetchComments,fetchImage} from "../../actions";
import DetailedPage from "./DetailedPage";

class DetailedPost extends Component {

    componentDidMount(){
   
        let imageId = this.props.image[0]['id']
        this.props.fetchImage(imageId);  
        let postId = this.props.match.params.id
        this.props.fetchSinglePost(postId)
        let userId = this.props.post[0]['userId']        
        this.props.fetchSingleUser(userId)
   
    }

    render() {
        return (
            <div className="container">
                <div className="section">
                    <div className="row">
                        <div className="col-md-10">
                            <DetailedPage 
                            key={this.props.post.id} 
                            postId={this.props.post.id} 
                            imageUrl={this.props.image.url} 
                            userId={this.props.user.id} 
                            body={this.props.post.body}  
                            title={this.props.post.title}
                            username={this.props.user.name}   
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return {
        post: state.singlePost,
        user: state.singleUser,
        image:state.images
    }
}

export default connect(mapStateToProps, { fetchImage,fetchPosts,fetchSinglePost,fetchUsers,fetchSingleUser,fetchComments})(DetailedPost)