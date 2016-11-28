/**
app.js
This is the entry file for the application, only setup and boilerplate code.
**/

import 'babel-polyfill'

// Load the manifest.json file and the .htaccess file
import 'file?name=[name].[ext]!./manifest.json'

// Import all the third party stuff
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { applyRouterMiddleware, Router, browserHistory, hashHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import FontFaceObserver from 'fontfaceobserver';
import { useScroll } from 'react-router-scroll';
import configureStore from './store'

// Import Language Provider
import LanguageProvider from 'containers/LanguageProvider'
// Import i18n messages
import { translationMessages } from './i18n'

// Import the CSS reset, which HtmlWebpackPlugin transfers to the build folder
// import 'sanitize.css/lib/sanitize.css'
import styles from 'containers/App/styles.css';
import 'bulma/css/bulma.css'

const openSansObserver = new FontFaceObserver('Open Sans', {});

// When Open Sans is loaded, add a font-family using Open Sans to the body
openSansObserver.load().then(() => {
  document.body.classList.add(styles.fontLoaded);
}, () => {
  document.body.classList.remove(styles.fontLoaded);
})

// Create redux store with history
// this uses the singleton browserHistory provided by react-router
// Optionally, this could be changed to leverage a created history
// e.g. `const browserHistory = useRouterHistory(createBrowserHistory)();`
const initialState = {}
const store = configureStore(initialState, browserHistory)

// Sync history and store, as the react-router-redux reducer
// is under the non-default key ("routing"), selectLocationState
// must be provided for resolving how to retrieve the "route" in the state
import { selectLocationState } from 'containers/App/selectors'
const history = syncHistoryWithStore(hashHistory, store, {
  selectLocationState: selectLocationState()
})

// Set up the router, wrapping all Routes in the App component
import App from 'containers/App'
import createRoutes from './routes'
const rootRoute = {
  component: App,
  childRoutes: createRoutes(store)
}
const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <LanguageProvider messages={translationMessages}>
        <Router history={history} routes={rootRoute} render={
          // Scroll to top when going to a new page, imitating default browser behaviour
          applyRouterMiddleware(useScroll())} />
      </LanguageProvider>
    </Provider>,
    document.getElementById('app')
  )
}
// Hot reloadable translation json files
if (module.hot) {
  module.hot.accept('./i18n', () => {
    render(translationMessages)
  })
}

// Chunked polyfill for browsers without Intl support
if (!window.Intl) {
  (new Promise((resolve) => {
    resolve(System.import('intl'));
  }))
    .then(() => Promise.all([
      System.import('intl/locale-data/jsonp/en.js'),
      System.import('intl/locale-data/jsonp/de.js'),
    ]))
    .then(() => render(translationMessages))
    .catch((err) => {
      throw err;
    });
} else {
  render(translationMessages);
}
// Install ServiceWorker and AppCache in the end since
// it's not most important operation and if main code fails,
// we do not want it installed
// import { install } from 'offline-plugin/runtime'
// install()
