import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Posts extends Component {
    state = {
        posts: []
    }

    componentDidMount() {
        axios.get('http://localhost:4000/posts')
            .then(data => {
                this.setState({
                    posts: data.data.slice(0, 10)
                })
            }); 
    }

    render() {
        const { posts } = this.state;
        const postList = posts.length ? (
            posts.map(post => {
                return (
                <div className="post-card" key={post._id}>
                    <div className="card-content">
                        <span className="card-title"><Link to={`/posts/${post._id}`}>{post.title}</Link></span>
                        <p dangerouslySetInnerHTML={{__html: post.content.slice(0, 150) + "..."}}></p>
                    </div>
                </div>
                );
            })
        ) : (
            <div className="center">No posts yet</div>
        )

        return (
            <div className="container">
                {postList}
            </div>
        );
    }
}

export default Posts;