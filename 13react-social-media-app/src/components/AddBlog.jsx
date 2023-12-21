import React, { useContext, useRef } from 'react';
import Heading from './Heading';
import { BlogList } from '../store/BlogContextProvider';

function AddBlog() {
  const { addBlog } = useContext(BlogList);
  const heading = 'Add Blogs';

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postContentElement = useRef();
  const reactionElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const userId = userIdElement.current.value;
    const title = postTitleElement.current.value;
    const content = postContentElement.current.value;
    const emotion = reactionElement.current.value;
    const tagWords = tagsElement.current.value.split(' ');

    addBlog(userId, title, content, emotion, tagWords);

    userIdElement.current.value = '';
    postTitleElement.current.value = '';
    postContentElement.current.value = '';
    reactionElement.current.value = '';
    tagsElement.current.value = '';
  };

  return (
    <div>
      <div className="container-fluid">
        <center className="row">
          <Heading heading={heading} />
        </center>
        <form action="" onSubmit={handleSubmit}>
          <div className="row addBlogContainer">
            <div className="addBlogsForm">
              <div className="mb-3">
                <label htmlFor="userId" className="form-label">
                  User ID
                </label>
                <input
                  ref={userIdElement}
                  type="text"
                  className="form-control"
                  id="userId"
                  placeholder="Enter User ID"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="title" className="form-label">
                  Title
                </label>
                <input
                  ref={postTitleElement}
                  type="text"
                  className="form-control"
                  id="title"
                  placeholder="Enter Title"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="content" className="form-label">
                  Content
                </label>
                <textarea
                  ref={postContentElement}
                  className="form-control"
                  id="content"
                  rows="4"
                  placeholder="Write Something about your Blog..."
                ></textarea>
              </div>

              <div className="mb-3">
                <label htmlFor="reaction" className="form-label">
                  Reaction
                </label>
                <input
                  ref={reactionElement}
                  type="number"
                  className="form-control"
                  id="reaction"
                  placeholder="How many people reacted to this post "
                />
              </div>

              <div className="mb-3">
                <label htmlFor="hashTag" className="form-label">
                  Hash Tag
                </label>
                <input
                  type="text"
                  ref={tagsElement}
                  className="form-control"
                  id="hashTag"
                  placeholder="Enter HashTag using space"
                />
              </div>
              <button type="submit" className="btn btn-warning">
                Post Blog
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddBlog;
