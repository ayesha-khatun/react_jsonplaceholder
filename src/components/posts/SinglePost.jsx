import React from 'react'
import { Link } from "react-router-dom";

export default function SinglePost(props) {

    return (
        <div className="col-md-4">
             <div className="card mb-4" style={{height:'90%'}}>
                <img className="card-img-top" src="http://placehold.it/750x300" alt="" />
                <div className="card-body">
                  <h2 className="card-title"><b>{props.title}</b></h2>
                  
                  <p className="card-text">{props.body}</p>
                  <p className="card-text">{props.name}</p>             
                  <Link to={`/${props.id}/post`} className="btn btn-primary">Read More →</Link>
                </div>
             </div>
        </div>
    )
}
