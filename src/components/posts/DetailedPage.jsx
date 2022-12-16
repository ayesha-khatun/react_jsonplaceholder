import React from 'react'
import Comments from "../comments/Comment"
import CommentBox from "../comments/commentBox"
import { connect } from "react-redux";
import {  
    fetchPosts,
    fetchSinglePost,
    fetchUsers,
    fetchSingleUser,
    fetchComments,
    fetchImage
} from "../../actions";

class DetailedPage extends React.Component {

    componentDidMount(){
        this.props.fetchComments(this.props.postId)   
    }

    render(){

        return (
            <div>
                <h1 className="mt-4">{this.props.title}</h1>
                <hr key="1hr"/>
                <p className="lead">
                    by<br key="1br"/>
                   {this.props.username}                 
                </p>
                <img className="img-fluid rounded" src={this.props.image.url} alt=""/>
                <hr key="2hr"/>
                <p className="lead">{this.props.body}</p>
                <hr key="3hr"/>
                <br key="5br"/>
                <h2>Add Comment</h2>
                <CommentBox postId={this.props.postId} />
                <br key="2br"/>
                <hr key="4hr"/>
                <h2>Comments</h2>
                <br key="3br"/>
                {
                    this.props.comments.map( comment => <Comments key={comment.id+1} name={comment.name} body={comment.body}/> )
                }
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return{
        comments: state.commentsAssociatedToPost,
        posts:state.posts,
        users:state.users,
        singlePost:state.singlePost,
        image:state.images,
    }
}

export default connect (mapStateToProps, { fetchImage,fetchPosts,fetchSinglePost,fetchUsers,fetchSingleUser,fetchComments })(DetailedPage)
