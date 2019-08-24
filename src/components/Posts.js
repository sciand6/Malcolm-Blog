import React, { Component } from 'react';
import axios from 'axios';

class Posts extends Component {
    state = {
        posts: []
    }

    componentDidMount() {
        axios.get('http://localhost:4000/posts')
            .then(data => {
                console.log(data);
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
                <div className="post-card" key={post.id}>
                    <div className="card-content">
                        <span className="card-title">{post.title}</span>
                        <p>{post.content}</p>
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