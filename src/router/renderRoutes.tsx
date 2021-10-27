import { Switch, Route, Redirect } from 'react-router-dom';
import type { Routes } from '@router/routes';
import type { Props } from '@/types/index';

/**
 * @descriptio 渲染路由
 * @param { Array } - routes 路由数据
 */
function renderRoutes(routes: Routes[] = []): React.ReactElement | boolean {
  if (routes.length === 0) {
    return false;
  }

  return (
    <Switch>
      {routes.map(route => (
        <Route
          key={route.name}
          path={route.path}
          exact={route.exact}
          render={(props: Props) =>
            route.render ? (
              route.render({ ...props, route: route.children })
            ) : (
              <route.component {...props} route={route.children} />
            )
          }
        />
      ))}
      <Redirect exact from="/" to="/home" />;
      <Redirect to="/404" />
    </Switch>
  );
}

export default renderRoutes;
