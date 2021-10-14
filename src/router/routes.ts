import React from 'react';

export type Routes = {
  path: string;
  name: string;
  meta?: {
    exact?: boolean;
  };
  component: React.ComponentType<{ route?: Routes[] }>;
  children?: Routes[];
  render?: Function;
};

const routes: Routes[] = [
  {
    path: '/home',
    name: 'home',
    component: React.lazy(() => import('../views/home/Home'))
  },
  {
    path: '/about',
    name: 'about',
    component: React.lazy(() => import('../views/about/About')),
    children: [
      {
        path: '/about',
        name: 'about',
        meta: {
          exact: true
        },
        component: React.lazy(() => import('../views/about//bar/Bar'))
      },
      {
        path: '/about/foo',
        name: 'about-foo',
        meta: {
          exact: true
        },
        component: React.lazy(() => import('../views/about//foo/Foo'))
      }
    ]
  }
];

export default routes;
