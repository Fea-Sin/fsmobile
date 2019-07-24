"use strict"

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '20190724_1539';

  // add your config here
  config.middleware = [];

  config.view = {
    mapping: {
      '.html': 'nunjucks',
    }
  };

  config.assets = {
    publicPath: '/public/',
    devServer: {
      debug: true,
      command: 'umi dev',
      port: 8000,
      env: {
        APP_ROOT: process.cwd() + '/app/web',
        BROWSER: 'none',
        ESLINT: 'none',
        SOCKET_SERVER: 'http://127.0.0.1:8000',
        PUBLIC_PATH: 'http://127.0.0.1:8000',
      },
    },
  };

  config.security = {
    csrf: false,
  };

  // egg listen port, and start the application 
  config.cluster = {
    listen: {
      port: 7001,
    }
  }

  return config;
}