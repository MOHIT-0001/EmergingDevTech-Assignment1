import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <style>
        {`
          header {
            background-color: #001F3F;
            color: #fff;
            padding: 10px 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          .portfolio-title {
            font-size: 18px;
            font-weight: bold;
          }

          nav {
            display: flex;
            gap: 15px;
          }

          nav a {
            color: #fff;
            text-decoration: none;
            padding: 5px 10px;
            border-radius: 5px;
            transition: background-color 0.3s;
          }

          nav a:hover {
            background-color: #fff;
            color: #001F3F;
          }

          @media (max-width: 768px) {
            header {
              flex-wrap: wrap;
              text-align: center;
            }

            .portfolio-title {
              margin-bottom: 10px;
            }

            nav {
              justify-content: center;
              gap: 10px;
              flex-wrap: wrap;
            }
          }
        `}
      </style>
      <header>
        <div className="portfolio-title">Mohit's Portfolio</div>
        <nav>
          <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link>
          <Link to="/about" style={{ color: '#fff', textDecoration: 'none' }}>About</Link>
          <Link to="/projects" style={{ color: '#fff', textDecoration: 'none' }}>Projects</Link>
          <Link to="/contact" style={{ color: '#fff', textDecoration: 'none' }}>Contact</Link>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
