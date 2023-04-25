import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/navigate.css';

function Navigation() {
  const links = [
    {
      url: '/',
      name: 'Home',
    },
    {
      url: '/archives',
      name: 'Archives',
    },
  ];
  return (
    <nav>
      <ul>
        {links.map((link) => (
          <li key={link.name}>
            <Link to={link.url} className="link">
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
