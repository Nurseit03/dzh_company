import React, { useState } from 'react';

function NavMenu({ items }) {
  const [activeLink, setActiveLink] = useState(null);

  const handleClick = (index) => {
    setActiveLink(index);
  };

  return (
    <nav className='nav__menu__links'>
      <ul className='menu'>
        {items.map((item, index) => (
          <li key={index}>
            <a
              href='#'
              onClick={() => handleClick(index)}
              className={`${activeLink === index ? 'active' : ''} ${item === 'СВЯЖИТЕСЬ С НАМИ' ? 'pulsate' : ''}`}
            >
              <span>{item}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavMenu;
