import React from 'react';

function Card({ blog }) {
  return (
    <div>
      <div className="card cardMain" style={{ width: '350px' }}>
        <div className="card-body ">
          <h5 className="card-title">{blog.title}</h5>

          <p className="card-text">
            {blog.body}
          </p>
          <a href="#" className="card-link">
            Card link
          </a>
          <a href="#" className="card-link">
            Another link
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
