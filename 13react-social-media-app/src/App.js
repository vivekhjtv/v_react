import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

import Cards from './components/Cards';
import AddBlog from './components/AddBlog';
import { useState } from 'react';
import BlogListProvider from './store/BlogContextProvider';

function App() {
  const [selectTab, setSelectTab] = useState('Blogs');
  return (
    <>
      <BlogListProvider>
        <div className="mainContainer">
          <Header selectTab={selectTab} setSelectTab={setSelectTab} />
          {selectTab === 'Blogs' ? <Cards /> : <AddBlog />}
          <Footer />
        </div>
      </BlogListProvider>
    </>
  );
}

export default App;
