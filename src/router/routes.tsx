import { useState } from 'react';
import { Link, Navigate, useRoutes, Outlet } from 'react-router-dom';
import Home from '../views/Home';
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

export default function Element() {
  const routes = useRoutes([
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
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
  ]);

  return routes;
}

function Layout(): React.ReactElement {
  const [count, setCount] = useState(0);

  return (
    <>
      <Link to="/">首页 | </Link>
      <Link to="/basic">基础示例 | </Link>
      <Link to="/lazy-loading">延迟加载 | </Link>
      <Link to="/about">组件嵌套路由 | </Link>
      <Link to="/nested-route">子组件嵌套路由 | </Link>
      <Link to="/parameter/123" state={{ name: 'xyc' }}>携带参数 | </Link>
      <Link to="/search-params?name=xyc">url ?拼接参数 | </Link>
      <Link to="/auth">权限验证 | </Link>
      <Link to="/use-navigate">useNavigate | </Link>
      <Link to="/use-location">UseLocation | </Link>
      <Link to="/use-outlet-context">useOutletContext | </Link>
      <Link to="/nav-link">NavLink</Link>
      <Outlet context={[count, setCount]} />
    </>
  );
}
