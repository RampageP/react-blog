import React,{Component} from 'react';
import {connect} from 'react-redux';
import fetchPosts from '../actions/index';
import { Link } from 'react-router';


class PostsIndex extends Component{
  componentWillMount(){
    this.props.fetchPosts();
  }
  render(){
    return(
      <div>
        <div className = 'text-xs-right'>
          <Link to = "/post/new" className = "btn btn-primary">
          Add a Post
        </Link>
        </div>
         List of posts
       </div>
    );
  }
}

export default connect(null, {fetchPosts})(PostsIndex);
