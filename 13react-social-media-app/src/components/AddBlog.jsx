import React from 'react';
import Heading from './Heading';

function AddBlog() {
  const heading = 'Add Blogs';
  return (
    <div>
      <div className="container-fluid">
        <center className="row">
          <Heading heading={heading} />
        </center>
        <div className="row addBlogContainer">
          <div className="addBlogsForm">
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label"
              >
                Example textarea
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddBlog;
