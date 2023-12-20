import { createContext, useReducer } from 'react';

export const BlogList = createContext({
  blogList: [],
  addBlog: () => {},
  deleteBlog: () => {},
});
const postListReducer = () => {};
const BlogListProvider = ({ children }) => {
  const [blogList, dispatcherBlogList] = useReducer(
    postListReducer,
    DEFAULT_BLOG_LIST
  );
  const addBlog = () => {};
  const deleteBlog = () => {};

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
    tags: ['enjoy', 'started'],
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
