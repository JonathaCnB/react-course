import P from 'prop-types';
import './style.css';
import React from 'react';
// pode passar os atribustos direto aqui, conforme comentando no App
export const PostCard = ({ cover, title, body, id }) => {
  // const post = props.post;
  // const { post } = props;
  return (
    <div className="post">
      <img src={cover} alt={title} />
      <div className="post-content">
        <h2>
          {title} {id}
        </h2>
        <p>{body}</p>
      </div>
    </div>
  );
};

PostCard.propTypes = {
  cover: P.string.isRequired,
  title: P.string.isRequired,
  body: P.string.isRequired,
  id: P.number.isRequired,
};
