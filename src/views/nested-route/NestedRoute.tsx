import React from 'react';
import { Routes, Route, Link, Outlet } from 'react-router-dom';

function NestedRoute(): React.ReactElement {
  return (
    <>
      <p>子组件嵌套路由示例</p>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Index />} />
          <Route path="/about" element={<About />}>
            <Route index element={<Default />} />
            <Route path=":id" element={<Parameter />} />
            <Route path="/about/bar" element={<Bar />}></Route>
            <Route path="/about/foo" element={<Foo />}></Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
}

function Layout(): React.ReactElement {
  return (
    <>
      <Link to="/nested-route">index | </Link>
      <Link to="/nested-route/about">about  | </Link>
      <Link to="/nested-route/about/123">parameter  | </Link>
      <Outlet />
    </>
  );
}

function Index(): React.ReactElement {
  return (
    <p>index page</p>
  );
}

function About(): React.ReactElement {
  return (
    <>
      <p>about page</p>
      <Link to="/nested-route/about/bar">/nested-route/about/bar | </Link>
      <Link to="/nested-route/about/foo">/nested-route/about/foo</Link>
      <Outlet />
    </>
  );
}

function Default(): React.ReactElement {
  return (
    <p>default page</p>
  );
}

// 携带参数
function Parameter(): React.ReactElement {
  return (
    <p>Parameter page</p>
  );
}

function Bar(): React.ReactElement {
  return (
    <p>bar page</p>
  );
}

function Foo(): React.ReactElement {
  return (
    <p>foo page</p>
  );
}

export default NestedRoute;
