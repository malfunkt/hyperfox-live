/* Logger */

import React from 'react'
import Notification from 'components/Notification'

import messages from './messages'

export default class HomePage extends React.Component {

  render () {
    return (
      <div className='container'>
        <Notification
          alertStyle='danger'
          message={messages.noConnected}
        />
        <Notification
          alertStyle='warning'
          message={messages.noData}
        />
      </div>
    )
  }
}
