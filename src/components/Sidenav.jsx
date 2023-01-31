import React, { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';

export default function Sidenav() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    console.log('state changes:', nav);
  };

  return (
    <div>
      <AiOutlineMenu
        onClick={handleNav}
        className="z-[99] md:hidden absolute top-4 right-4 cursor-pointer"
      />
    </div>
  );
}
