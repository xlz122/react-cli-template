import React from 'react';
import { NavLink } from 'react-router-dom';

function NavLinkExample(): React.ReactElement {
  return (
    <>
      <p>NavLink示例</p>
      <p>NavLink 可使用函数</p>
      <NavLink to=".">
        {(isActive: boolean) => (isActive ? "Home (current)" : "Home")}
      </NavLink>
      <NavLink to=".">
        {(isActive: boolean) => (isActive ? "About (current)" : "About")}
      </NavLink>
    </>
  );
}

export default NavLinkExample;
