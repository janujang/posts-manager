import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
import axios from 'axios';

class Blog extends Component {
    state = {
        posts: []
    }
    componentDidMount(){
        //can't do const posts = axios.get() because axios.get() is asynchronous and JS runs code synchronously.
        //This means that JS won't wait for the data to be fetched

        //Function in then is executed once the promise is resolved
        //Promise is returned by .get()
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            this.setState({posts: response.data});
            console.log(response);
        });
    }
    render () {
        const posts = this.state.posts.map(post =>
            <Post title={post.title} key={post.id}/>
        );
        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;
