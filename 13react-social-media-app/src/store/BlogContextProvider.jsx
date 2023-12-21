import { createContext, useReducer } from 'react';

export const BlogList = createContext({
  blogList: [],
  addBlog: () => {},
  deleteBlog: () => {},
});

//reducer
const postListReducer = (currBlogList, action) => {
  let newBlogList = currBlogList;
  if (action.type === 'DELETE_POST') {
    newBlogList = currBlogList.filter(
      (blog) => blog.id !== action.payload.blogId
    );
  } else if (action.type === 'ADD_POST') {
    newBlogList = [action.payload, ...currBlogList];
  }

  return newBlogList;
};

const BlogListProvider = ({ children }) => {
  const [blogList, dispatcherBlogList] = useReducer(
    postListReducer,
    DEFAULT_BLOG_LIST
  );
  const addBlog = (userId, title, content, emotion, tagWords) => {
    dispatcherBlogList({
      type: 'ADD_POST',
      payload: {
        id: Date.now(),
        title: title,
        body: content,
        reactions: emotion,
        userId: userId,
        tags: tagWords,
      },
    });
  };

  const deleteBlog = (blogId) => {
    dispatcherBlogList({
      type: 'DELETE_POST',
      payload: { blogId },
    });
  };

  return (
    <BlogList.Provider value={{ blogList, addBlog, deleteBlog }}>
      {children}
    </BlogList.Provider>
  );
};

const DEFAULT_BLOG_LIST = [
  {
    id: '1',
    title: 'First Post',
    body: 'This is the first post in our blog!',
    reactions: 10,
    userId: 12,
    tags: ['enjoy', 'started', 'new Revolution'],
  },
  {
    id: '2',
    title: 'Second Post',
    body: 'This is the second post in our blog!',
    reactions: 34,
    userId: 124,
    tags: ['enjoy', 'started'],
  },
  {
    id: '3',
    title: 'Third Post',
    body: 'This is the third post in our blog!',
    reactions: 30,
    userId: 123,
    tags: ['enjoy', 'started'],
  },
];
export default BlogListProvider;
