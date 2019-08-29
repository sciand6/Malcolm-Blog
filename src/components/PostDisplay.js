import React, { Component } from 'react';
import axios from 'axios';

// It works for now, may need to make some changes later

class PostDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: '',
            author: 'none',
            postDate: "Sorry, I couldn't find that post."
        }
    }

    componentDidMount() {
        axios.get(`http://localhost:4000/posts/${this.props.match.params.id}`)
            .then(data => {
                data.data.map(data => {
                    if (data._id === this.props.match.params.id) {
                        this.setState({
                            title: data.title,
                            content: data.content,
                            author: data.author,
                            postDate: data.postDate
                            
                        });
                    }
                })
            }); 
    }

    render() {
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