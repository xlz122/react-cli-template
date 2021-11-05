import React from 'react';
import { Routes, Route, Link, Navigate, Outlet } from 'react-router-dom';

function Auth(): React.ReactElement {
  return (
    <>
      <p>权限示例</p>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/user" element={
            <RequireAuth>
              <User />
            </RequireAuth>
          } />
        </Route>
      </Routes>
    </>
  );
}

function Layout(): React.ReactElement {
  return (
    <>
      <Link to="/auth/user">跳转用户页面</Link>
      <Outlet />
    </>
  );
}

// 权限验证
function RequireAuth({ children }: { children: JSX.Element }): React.ReactElement {
  if (!localStorage.getItem('token')) {
    return <Navigate to="/" />
  }

  return children;
}

function User(): React.ReactElement {
  return <p>用户页面</p>;
}

export default Auth;
