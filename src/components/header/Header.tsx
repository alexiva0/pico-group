import React from 'react';

import './Header.css';

interface Props {
  text: string;
};

function Header({ text }: Props) {
  return <h1 className="header">{text}</h1>;
}

export default Header;
