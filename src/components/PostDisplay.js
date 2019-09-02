import React, { Component } from 'react';
import axios from 'axios';

class PostDisplay extends Component {
    constructor(props) {
        super(props);
        // Setting an initial state in case of no posts
        this.state = {
            title: '',
            content: '',
            author: 'none',
            postDate: "Sorry, I couldn't find that post."
        }
    }

    componentDidMount() {
        // Get post by id
        axios.get(`http://localhost:4000/posts/${this.props.match.params.id}`)
            .then(post => {
                this.setState({ // Still thinking about how I can just reduce this down to just this: 'this.setState({ post.data });'
                    title: post.data.title,
                    content: post.data.content,
                    author: post.data.author,
                    postDate: post.data.postDate
                })
            }); 
    }

    render() {
        // Rendering the posting here
        let posting = this.state;
        return (
            <div className="container">
                <h2>{posting.title}</h2>
                <p>Posted by <strong>{posting.author}</strong> on: <em>{posting.postDate}</em></p>
                <div dangerouslySetInnerHTML={{ __html: posting.content }}></div>
            </div>
        );
    }
}

export default PostDisplay;