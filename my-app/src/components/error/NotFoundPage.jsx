import React from 'react';
import './unautho.css';

const NotFoundPage = () => {
  return (
    <div className="not-found-container">
      <h2>404 Not Found</h2>
      <p>The requested page does not exist.</p>
      <img src='https://blog.mozilla.org/wp-content/blogs.dir/278/files/2018/05/No_More_404s-1000x550.gif'/>
    </div>
  );
};

export default NotFoundPage;