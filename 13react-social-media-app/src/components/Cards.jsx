import React, { useContext } from 'react';
import Card from './Card';
import Heading from './Heading';
import { BlogList } from '../store/BlogContextProvider';

function Cards() {
  const heading = 'Blogs';
  const { blogList } = useContext(BlogList);
  return (
    <div>
      <center>
        <Heading heading={heading} />
      </center>
      <div className="cardStyle container-fluid">
        {blogList.map((blog) => (
          <Card key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
}

export default Cards;
