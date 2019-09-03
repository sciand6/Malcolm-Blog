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
                let { title, author, content, postDate } = post.data;
                this.setState({ // Still thinking about how I can just reduce this down to just this: 'this.setState({ post.data });'
                    title: title,
                    content: content,
                    author: author,
                    postDate: postDate
                })
            }); 
    }

    render() {
        // Rendering the here
        let { title, author, content, postDate } = this.state;
        return (
            <div className="container">
                <h2>{title}</h2>
                <p>Posted by <strong>{author}</strong> on: <em>{postDate}</em></p>
                <div dangerouslySetInnerHTML={{ __html: content }}></div>
            </div>
        );
    }
}

export default PostDisplay;