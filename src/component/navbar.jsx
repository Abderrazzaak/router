import React from 'react'

export const navbar = () => {
  return (
    <nav>
      <link to="/">website</link>
      <ul>
        <li>
          <link to = "/about">about</link>
        </li>
        <li>
        <link to = "/services">services</link>
        </li>
        <li>
        <link to = "/contact">contact</link>
        </li>

        
      </ul>
    </nav>
  );
}
