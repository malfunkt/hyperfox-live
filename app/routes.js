// import { getHooks } from 'utils/hooks'

const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err)
}

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default)
}

export default function createRoutes () {
  // const { injectReducer, injectSagas } = getHooks(store)

  return [
    {
      path: '/',
      name: 'home',
      getComponent (nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/Logger')
        ])

        const renderRoute = loadModule(cb)

        importModules.then(([component]) => {
          renderRoute(component)
        })

        importModules.catch(errorLoading)
      }
    }, {
      path: '*',
      name: 'notfound',
      getComponent (nextState, cb) {
        System.import('containers/NotFoundPage')
          .then(loadModule(cb))
          .catch(errorLoading)
      }
    }
  ]
}
