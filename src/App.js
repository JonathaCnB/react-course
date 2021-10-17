import './App.css';
import { Component } from 'react';

class App extends Component {
  state = {
    counter: 0,
    posts: [ ]
  };

  componentDidMount() {
    this.loadPosts();
  }

  loadPosts = async () => {
    const postsResponse = fetch('https://jsonplaceholder.typicode.com/posts');
    const photosResponse = fetch('https://jsonplaceholder.typicode.com/photos')

    const [posts, photos] = await Promise.all([postsResponse, photosResponse]);

    const postsJson = await posts.json();
    const photosJson = await photos.json();

    const postsAndPhotos = postsJson.map((post, index) => {
      return { ...post, cover: photosJson[index].url }
    })

    this.setState({ posts: postsAndPhotos })
  }


  render() {
    const { posts } = this.state;
    return (
      <section className='container'>
        <div className="posts">
          {/* Apenas para uma linha */}
          {/* {posts.map(post => <h1 key={post.id}>{post.title}</h1>)} */}
          
          {/* Para mais de uma linha */}
          {posts.map(post => (
            
          ))}
        </div>
      </section>
    );
  }
}

export default App;
