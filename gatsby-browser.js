const ReactGA = require('react-ga');
ReactGA.initialize('UA-68526607-5');

exports.onRouteUpdate = (state) => {
  ReactGA.pageview(state.pathname);
};
