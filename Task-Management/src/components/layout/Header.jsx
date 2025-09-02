import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase';

const Header = ({ user }) => {
  const defaultAvatar = 'https://via.placeholder.com/40';
  
  return (
    <header className="header">
      <div className="header-content">
        <h1>Dashboard</h1>
        
        <div className="user-profile">
          {user ? (
            <>
              <span>{user.displayName || 'User'}</span>
              <Link to="/profile">
                <img 
                  src={user.photoURL || defaultAvatar} 
                  alt="Profile" 
                />
              </Link>
            </>
          ) : (
            <button 
              className="btn btn-primary"
              onClick={() => auth.signInAnonymously()}
            >
              <span className="material-icons">login</span>
              Sign In
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;