import './App.css';
import { Component } from 'react';

class App extends Component {
  state = {
    posts: [ ]
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        posts: [
          {
            id: 1,
            title: 'O titulo 1',
            body: 'O corpo 1'
          },
          {
            id: 2,
            title: 'O titulo 2',
            body: 'O corpo 2'
          },
          {
            id: 3,
            title: 'O titulo 3',
            body: 'O corpo 3'
          },
        ]
      })
    }, 5000)
  }

  render() {
    const { posts } = this.state;
    return (
      <div className="App">
        {/* Apenas para uma linha */}
        {/* {posts.map(post => <h1 key={post.id}>{post.title}</h1>)} */}
        
        {/* Para mais de uma linha */}
        {posts.map(post => (
          <div key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
