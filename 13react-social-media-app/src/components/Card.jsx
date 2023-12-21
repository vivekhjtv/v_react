import React, { useContext } from 'react';
import { MdDelete } from 'react-icons/md';
import { BlogList } from '../store/BlogContextProvider';
function Card({ blog }) {
  const { deleteBlog } = useContext(BlogList);
  return (
    <div>
      <div className="card cardMain" style={{ width: '350px' }}>
        <div className="card-body ">
          <h5 className="card-title">
            {blog.title}
            <span
              className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
              onClick={() => deleteBlog(blog.id)}
            >
              <MdDelete />
            </span>
          </h5>
          <p className="card-text">{blog.body}</p>

          {blog.tags.map((tag) => (
            <span key={tag} className="badge bg-warning text-dark hashTag">
              {tag}
            </span>
          ))}
          <div className="alert alert-primary reactionTag" role="alert">
            {`${blog.reactions} Likes on your this post.`}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
