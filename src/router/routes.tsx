import React, { useState, Suspense } from 'react';
import { Link, Navigate, useRoutes, Outlet } from 'react-router-dom';
import Basic from '../views/basic/Basic';
import LazyLoading from '../views/lazy-loading/LazyLoading';
import About from '../views/about/About';
import Default from '../views/about/default/Default';
import Bar from '../views/about/bar/Bar';
import Foo from '../views/about/foo/Foo';
import NestedRoute from '../views/nested-route/NestedRoute';
import Parameter from '../views/parameter/Parameter';
import SearchParams from '../views/search-params/SearchParams';
import Auth from '../views/auth/Auth';
import UseNavigate from '../views/use-navigate/UseNavigate';
import UseLocation from '../views/use-location/UseLocation';
import UseOutletContext from '../views/use-outlet-context/UseOutletContext';
import NavLink from '../views/nav-link/NavLink';
import NotFound from '../views/not-found/NotFound';

function lazy(path: string): React.ReactElement {
  const Component = React.lazy(() => import(`../${path}.tsx`));

  return (
    <Suspense fallback={<></>}>
      <Component />
    </Suspense>
  );
}

export const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: lazy('../views/Home') },
      { path: '/basic/*', element: <Basic /> },
      { path: '/lazy-loading/*', element: <LazyLoading /> },
      {
        path: '/about',
        element: <About />,
        children: [
          { index: true, element: <Default /> },
          { path: '/about/bar', element: <Bar /> },
          { path: '/about/foo', element: <Foo /> },
          { path: '*', element: <Navigate to="/use-navigate" /> }
        ]
      },
      { path: '/nested-route/*', element: <NestedRoute /> },
      { path: '/parameter/:id', element: <Parameter userId={1} /> },
      { path: '/search-params', element: <SearchParams /> },
      { path: '/auth/*', element: <Auth /> },
      { path: '/use-navigate', element: <UseNavigate /> },
      { path: '/use-location', element: <UseLocation /> },
      { path: '/use-outlet-context', element: <UseOutletContext /> },
      { path: '/nav-link', element: <NavLink /> }
    ]
  },
  { path: '*', element: <NotFound /> }
];

function Layout(): React.ReactElement {
  const [count, setCount] = useState(0);

  return (
    <>
      <Link to="/">?????? | </Link>
      <Link to="/basic">???????????? | </Link>
      <Link to="/lazy-loading">???????????? | </Link>
      <Link to="/about">?????????????????? | </Link>
      <Link to="/nested-route">????????????????????? | </Link>
      <Link to="/parameter/123" state={{ name: 'xyc' }}>???????????? | </Link>
      <Link to="/search-params?name=xyc">url ????????????? | </Link>
      <Link to="/auth">???????????? | </Link>
      <Link to="/use-navigate">useNavigate | </Link>
      <Link to="/use-location">UseLocation | </Link>
      <Link to="/use-outlet-context">useOutletContext | </Link>
      <Link to="/nav-link">NavLink</Link>
      <Outlet context={[count, setCount]} />
    </>
  );
}

function Element(): React.ReactElement {
  return useRoutes(routes);
}

export default Element;
