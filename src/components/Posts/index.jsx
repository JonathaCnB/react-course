import './style.css'

import { PostCard } from "../PostCard";

export const Posts = ({ posts }) => (
    <div className="posts">
        {/* Apenas para uma linha */}
        {/* {posts.map(post => <h1 key={post.id}>{post.title}</h1>)} */}
        
        {/* Para mais de uma linha */}
        {posts.map(post => (
        <PostCard
            // title={post.title} 
            // body={post.body} 
            // id={post.id} 
            // cover={post.cover} 
            key={post.id}
            post={post}
        />
        ))}
    </div>
);