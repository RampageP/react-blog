import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/app'
import PostIndex from './components/posts_index';
import PostsNew from './components/posts_new';



export default (
  <Route path = '/' component = {App} >
    <IndexRoute component = {PostIndex} />
    <Route path = "post/new" component = {PostsNew} />
  </Route>



);
