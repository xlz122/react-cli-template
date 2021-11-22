import React from 'react';
import { BrowserRouter, Routes, Route, Link, Navigate, Outlet } from 'react-router-dom';
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
// 常规JavaScript对象写法
// import Element from './routes';

/**
 * @description Switch 改名为 Routes，匹配规则更改：由按顺序匹配更改为最佳匹配
 * @description 直接嵌套，parent route 的 path 不用加*
 * @description 分散在子组件中嵌套，parent route 的 path 需要加*
 * @param { String } path 只支持两种动态占位符: /user/:id /user/*
 * @param { Boolean } element 原先 render/component 改为 element
 * @param { Boolean } index 表示是否是主路由，如果设置为 true 的话不能有 children
 * @param { Boolean } caseSensitive Route参数，路径是否区分大小写
*/
function AppRouter(): React.ReactElement {
  return (
    <BrowserRouter>
      {/* <Element /> */}
      <Routes >
        <Route path="/" element={<Layout />}>
          {/* 默认页面 */}
          <Route index element={<Home />} />

          {/* 基础演示 */}
          <Route path="/basic/*" element={<Basic />} />

          {/* 延迟加载 */}
          <Route path="/lazy-loading/*" element={<LazyLoading />} />

          {/* 直接嵌套，parent route 的 path 不用加* */}
          <Route path="/about" element={<About />}>
            <Route index element={<Default />} />
            <Route path="/about/bar" element={<Bar />} />
            <Route path="/about/foo" element={<Foo />} />
            {/* 重定向示例 */}
            <Route path="*" element={<Navigate to="/use-navigate" />} />
          </Route>

          {/* 直接嵌套，parent route 的 path 不用加* */}
          <Route path="/nested-route/*" element={<NestedRoute />} />

          {/* 携带参数 */}
          <Route path="/parameter/:id" element={<Parameter userId={1} />} />

          {/* url ?拼接参数 */}
          <Route path="/search-params" element={<SearchParams />} />

          {/* 权限验证 */}
          <Route path="/auth/*" element={<Auth />} />

          {/* useHistory */}
          <Route path="/use-navigate" element={<UseNavigate />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

/**
 * @param { Boolean } to 跳转路径
 * @param { Boolean } state 即点击后可以给 to 传对应的 state
 * @param { Boolean } replace 默认 false，即跳转路由要用 push 还是 replace
 * @param { String } target _self | _blank | _parent | _top
*/
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

export default AppRouter;
