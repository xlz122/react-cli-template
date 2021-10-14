import React, { useRef, Suspense } from 'react';
import { Switch, Route, Link, useHistory } from 'react-router-dom';
import routes from '@router/routes';
import renderRoutes from '@router/renderRoutes';
import NotFound from '@views/not-found/NotFound';

function AppRouter(): React.ReactElement {
  const history = useHistory();
  const pathname = useRef();

  // 直接刷新页面触发
  if (!pathname.current) {
    // console.log('路由未改变');
    pathname.current = history.location.pathname;
  }

  // 路由改变时触发
  if (pathname.current && history.location.pathname !== pathname.current) {
    // console.log('路由改变');
    pathname.current = history.location.pathname;
  }

  return (
    <Switch>
      <Route path="/404" component={NotFound} />
      <Route
        render={() => (
          <div className="main">
            <Link to="/">home | </Link>
            <Link to="/about">about  | </Link>
            <Link to="/not-fountd">not-fountd</Link>
            <Suspense fallback={<div></div>}>{renderRoutes(routes)}</Suspense>
          </div>
        )}
      />
    </Switch>
  );
}

export default AppRouter;
