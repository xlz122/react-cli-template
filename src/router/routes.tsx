import { Link, useRoutes, Outlet } from 'react-router-dom';
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
            { path: '/about/foo', element: <Foo /> }
          ]
        },
        { path: '/nested-route/*', element: <NestedRoute /> },
        { path: '/parameter/:id', element: <Parameter userId={1} /> },
        { path: '/search-params', element: <SearchParams /> },
        { path: '/auth/*', element: <Auth /> },
        { path: '/use-navigate', element: <UseNavigate /> }
      ]
    },
    { path: '*', element: <NotFound /> }
  ]);

  return routes;
}

function Layout(): React.ReactElement {
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
      <Link to="/use-navigate">useNavigate</Link>
      <Outlet />
    </>
  );
}
