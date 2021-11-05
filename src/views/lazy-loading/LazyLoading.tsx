import React from 'react';
import { Routes, Route, Link, Outlet } from 'react-router-dom';

const Bar = React.lazy(() => import('../about/bar/Bar'));
const Foo = React.lazy(() => import('../about/foo/Foo'));

function LazyLoading(): React.ReactElement {
  return (
    <>
      <p>延迟加载示例</p>
      <Routes >
        <Route path="/" element={<Layout />}>
          <Route index element={<Index />} />
          <Route path="/bar" element={
            <React.Suspense fallback={<p>loading...</p>}>
              <Bar />
            </React.Suspense>
          } />
          <Route path="/foo" element={
            <React.Suspense fallback={<p>loading...</p>}>
              <Foo />
            </React.Suspense>
          } />
        </Route>
      </Routes>
    </>
  );
}

function Layout(): React.ReactElement {
  return (
    <>
      <Link to="/lazy-loading">index | </Link>
      <Link to="/lazy-loading/bar">bar | </Link>
      <Link to="/lazy-loading/foo">foo | </Link>
      <Outlet />
    </>
  );
}

function Index(): React.ReactElement {
  return <p>index page</p>;
}

export default LazyLoading;
