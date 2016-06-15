/*  App.react.js
 *  This component is the skeleton around the actual pages, and should only
 *  contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React, {PropTypes} from 'react'
import NavigationBar from 'components/NavigationBar'

export default class App extends React.Component {
  static propTypes = {
    children: PropTypes.node
  }

  render () {
    return (
      <div className='container is-fluid is-fullheight is-marginless'>
        <NavigationBar />
        {this.props.children}
      </div>
    )
  }
}
