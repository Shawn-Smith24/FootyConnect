import React from 'react';
import './SplashPage.css'; // Import your CSS file
import { Link } from 'react-router-dom'

const SplashPage = () => {



  return (
    <div className="splash-container">
      <h1>Welcome to Footy Connect!</h1>
      <p>
        Post about your opinions related to soccer. Whether it is transfers, games, goals, etc.
      </p>

      <Link to="/posts">
        <button className='splash-button'> See Posts</button>
      </Link>
      
    </div>
  );
};

export default SplashPage;