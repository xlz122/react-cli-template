import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function About(): React.ReactElement {
  return (
    <>
      <p>嵌套路由示例</p>
      <Link to="/about/bar">about/bar | </Link>
      <Link to="/about/foo">about/foo</Link>
      <Outlet />
    </>
  );
}

export default About;
