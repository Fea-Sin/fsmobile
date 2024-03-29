import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/lib/renderRoutes';
import history from '@tmp/history';

const Router = DefaultRouter;

const routes = [
  {
    path: '/',
    component: __IS_BROWSER
      ? dynamic({
          loader: () =>
            import(/* webpackChunkName: "layouts__index" */ '../../layouts/index.js'),
        })
      : require('../../layouts/index.js').default,
    routes: [
      {
        path: '/discover',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__discover__index" */ '../discover/index.js'),
            })
          : require('../discover/index.js').default,
      },
      {
        path: '/home',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__home__index" */ '../home/index.js'),
            })
          : require('../home/index.js').default,
      },
      {
        path: '/',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__index" */ '../index.js'),
            })
          : require('../index.js').default,
      },
      {
        path: '/order',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__order__index" */ '../order/index.js'),
            })
          : require('../order/index.js').default,
      },
      {
        path: '/profile',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__profile__index" */ '../profile/index.js'),
            })
          : require('../profile/index.js').default,
      },
      {
        component: () =>
          React.createElement(
            require('/Users/chengqunzhong/Desktop/SUBGOT/fsmobile/node_modules/_umi-build-dev@1.10.14@umi-build-dev/lib/plugins/404/NotFound.js')
              .default,
            { pagesPath: 'pages', hasRoutesInConfig: false },
          ),
      },
    ],
  },
  {
    component: () =>
      React.createElement(
        require('/Users/chengqunzhong/Desktop/SUBGOT/fsmobile/node_modules/_umi-build-dev@1.10.14@umi-build-dev/lib/plugins/404/NotFound.js')
          .default,
        { pagesPath: 'pages', hasRoutesInConfig: false },
      ),
  },
];
window.g_routes = routes;
const plugins = require('umi/_runtimePlugin');
plugins.applyForEach('patchRoutes', { initialValue: routes });

// route change handler
function routeChangeHandler(location, action) {
  plugins.applyForEach('onRouteChange', {
    initialValue: {
      routes,
      location,
      action,
    },
  });
}
history.listen(routeChangeHandler);
routeChangeHandler(history.location);

export { routes };

export default function RouterWrapper(props = {}) {
  return <Router history={history}>{renderRoutes(routes, props)}</Router>;
}
