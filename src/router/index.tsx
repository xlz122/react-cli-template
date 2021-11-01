import React, { Suspense } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import routes from '@router/routes';
import renderRoutes from '@router/renderRoutes';
import NotFound from '@views/not-found/NotFound';

function AppRouter(): React.ReactElement {
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
