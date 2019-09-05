import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';

class PostingPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            author: '',
            content: '',
            postDate: ''
        }
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name] : e.target.value });
    }

    submitHandler = (e) => {
        e.preventDefault();
        console.log(this.state);
        axios.post('http://localhost:4000/posts', this.state).then(res => console.log(res));
    }

  render() {
      const {title, author, content, postDate} = this.state;
      return (
            <form onSubmit={this.submitHandler}>
                <br></br>
                <input value={title} name="title" onChange={this.changeHandler} placeholder="title"></input><br></br><br></br>
                <input value={author} name="author" onChange={this.changeHandler} placeholder="author"></input><br></br><br></br>
                <textarea value={content} name="content" onChange={this.changeHandler} rows="8" cols="60"></textarea><br></br><br></br>
                <input value={postDate} name="postDate" onChange={() => this.setState({postDate: new Date() + ''})} placeholder="date"></input>
                <p>{postDate}</p>
                <button type="submit">Submit</button>
            </form>
        );
    }
}

export default PostingPage;