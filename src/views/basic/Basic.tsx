import React from 'react';
import { Routes, Route, Link, Outlet } from 'react-router-dom';

function Basic(): React.ReactElement {
  return (
    <>
      <p>基础示例</p>
      <Routes >
        <Route path="/" element={<Layout />}>
          <Route index element={<Index />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </>
  );
}

function Layout(): React.ReactElement {
  return (
    <>
      <Link to="/basic">index | </Link>
      <Link to="/basic/about">user | </Link>
      <Outlet />
    </>
  );
}

function Index(): React.ReactElement {
  return <p>index page</p>;
}

function About(): React.ReactElement {
  return <p>about page</p>;
}

export default Basic;
