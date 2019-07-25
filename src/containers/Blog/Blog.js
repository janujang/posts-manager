import React, { Component } from "react";
// import axios from 'axios';
import { Route, NavLink, Switch, Redirect } from "react-router-dom";

import "./Blog.css";
import Posts from "./Posts/Posts";
//import NewPost from "./NewPost/NewPost";
//import FullPost from "./FullPost/FullPost";
import asyncComponent from "../../hoc/asyncComponent";
const AsyncNewPost = asyncComponent(() => {
  return import("./NewPost/NewPost");
});
//const NewPost = React.lazy(() => import("./NewPost/NewPost"));
class Blog extends Component {
  state = { isAuth: false };
  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              {/*exact means full path is '/' */}
              <li>
                <NavLink
                  to="/posts"
                  exact
                  activeClassName="my-active"
                  activeStyle={{
                    color: "#fa923f"
                  }}
                >
                  Posts
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={{
                    //relative path when /new-post added to current url
                    //this.props.match.url + '/new-post'

                    //below is an absolute path
                    pathname: "/new-post",
                    hash: "#submit",
                    search: "?quick-submit=true"
                  }}
                  activeStyle={{
                    color: "#fa923f"
                  }}
                >
                  New Post
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        {/* <Route path="/" exact render={() => <h1>Home</h1>} />
                <Route path="/" render={() => <h1>Home 2</h1>} /> */}
        <Switch>
          {this.state.isAuth ? (
            <Route path="/new-post" component={AsyncNewPost} />
          ) : null}
          
          <Route path="/posts" component={Posts} />
          <Route render={() => <h1>Page not found</h1>} />
          {/* <Redirect from="/" to="/posts" /> */}
        </Switch>
      </div>
    );
  }
}

export default Blog;
