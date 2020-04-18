import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
class Home extends Component {
  state = {
    posts: [],
  };
  componentDidMount() {
    axios.get("http://jsonplaceholder.typicode.com/posts").then((res) => {
      console.log(res);
      this.setState({ posts: res.data.slice(0, 10) });
    });
  }
  render() {
    const { posts } = this.state;
    const postList = posts.length ? (
      posts.map((post) => {
        return (
          <div className="post card" key={post.id}>
            <div className="card-content">
              <span className="card-title"> {post.title}</span>
              <p>{post.body}</p>
            </div>
          </div>
        );
      })
    ) : (
      <div>No post yet</div>
    );
    return (
      <div className="container">
        <h4 className="center">Home</h4>
        <div>
          <span>
            <Link to="/redirect">Redirect</Link>
          </span>{" "}
          <br />
          <span>{postList}</span>
        </div>
      </div>
    );
  }
}

export default Home;