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
            display: grid;
            grid-template-columns: 1fr auto;
            align-items: center;
          }

          .portfolio-title {
            font-size: 18px;
            font-weight: bold;
          }

          nav {
            display: grid;
            grid-template-columns: repeat(4, auto); /* Creates 4 columns for links */
            gap: 15px;
            justify-items: start; /* Aligns items to the left */
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
              grid-template-columns: 1fr;
              text-align: center;
            }

            .portfolio-title {
              margin-bottom: 10px;
            }

            nav {
              grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
              justify-items: center; /* Center the links on smaller screens */
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
