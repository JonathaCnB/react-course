import P from 'prop-types';
import './style.css';
import React from 'react';
import { PostCard } from '../PostCard';

export const Posts = ({ posts = [] }) => (
  <div className="posts">
    {/* Apenas para uma linha */}
    {/* {posts.map(post => <h1 key={post.id}>{post.title}</h1>)} */}

    {/* Para mais de uma linha */}
    {posts.map((post) => (
      <PostCard
        title={post.title}
        body={post.body}
        id={post.id}
        cover={post.cover}
        key={post.id}
        // post={post}
      />
    ))}
  </div>
);

Posts.defaultProps = {
  posts: [],
};

Posts.propTypes = {
  posts: P.array,
};
