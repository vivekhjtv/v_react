import React from 'react';

function Header({ selectTab, setSelectTab }) {
  return (
    <div>
      <header className="p-3 text-bg-dark">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a
              href="/"
              className="d-flex align-items-center font-monospace fs-1 mb-2 mb-lg-0 text-decoration-none text-warning"
            >
              BlogBuddy
            </a>

            <ul className="nav col-12 col-lg-auto me-lg-auto ps-md-5 mb-2 justify-content-center mb-md-0">
              <li
                onClick={() => {
                  setSelectTab('Blogs');
                }}
              >
                <a
                  href="#"
                  className={`nav-link font-monospace px-2 ${
                    selectTab === 'Blogs' ? 'text-warning' : 'text-white'
                  }`}
                >
                  Blogs
                </a>
              </li>
              <li
                onClick={() => {
                  setSelectTab('Add Blogs');
                }}
              >
                <a
                  href="#"
                  className={`nav-link font-monospace px-2 ${
                    selectTab === 'Add Blogs' ? 'text-warning' : 'text-white'
                  }`}
                >
                  Add Blogs
                </a>
              </li>
            </ul>

            <div className="text-end">
              <button
                type="button"
                className="btn font-monospace btn-outline-light me-2"
              >
                Login
              </button>
              <button type="button" className="btn font-monospace btn-warning">
                Sign-up
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
