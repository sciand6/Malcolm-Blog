import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Posts extends Component {
    // Setting an initial state
    state = {
        posts: []
    }

    componentDidMount() {
        // Get all posts
        axios.get('http://localhost:4000/posts')
            .then(data => {
                this.setState({
                    posts: data.data.slice(0, 10) // Displaying 10 posts here
                })
            }); 
    }

    render() {
        // Pull posts from this.state
        const { posts } = this.state;
        // Check if there are posts. If there are, populate the postList array. If not, just put an html snippet in the postList arr that says 'No posts yet'
        const postList = posts.length ? ( // If there are posts then go through posts array and store an html snippet of its data in the postList arr
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
        ) : ( // If no posts: 
            <div className="center">No posts yet</div>
        )

        // Display posts
        return (
            <div className="container">
                {postList}
            </div>
        );
    }
}

export default Posts;