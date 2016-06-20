/* Logger */

import React from 'react'
import Notification from 'components/Notification'

import messages from './messages'

const logs = {
  date: '12:51:12',
  method: 'GET',
  origin: '11.1.1.143',
  destination: 'disney.com',
  path: '/',
  status: 311,
  size: '35.24Kb',
  type: 'application/text',
  time: '256.71'
}

export default class Logger extends React.Component {

  renderRow (item, i) {
    console.log(item)
    return (
      <tr key={i}>
        <td>{item.date}</td>
        <td>{item.method}</td>
        <td>{item.origin}</td>
        <td>{item.destination}</td>
        <td>{item.path}</td>
        <td>{item.status}</td>
        <td>{item.size}</td>
        <td>{item.type}</td>
        <td>{item.time}</td>
        <td className='is-icon'>
          <p className='control has-addons'>
            <a className='button is-primary'>
              <i className='fa fa-info-circle'></i>
            </a>
            <a className='button is-info'>
              <i className='fa fa-arrow-circle-down'></i>
            </a>
          </p>
        </td>
      </tr>
    )
  }

  render () {
    return (
      <div className='if-fluid is-marginless'>
        <Notification
          alertStyle='danger'
          message={messages.noConnected}
        />
        <Notification
          alertStyle='warning'
          message={messages.noData}
        />
      <table className='table'>
          <thead>
            <tr>
              <th>Date</th>
              <th>Method</th>
              <th>Origin</th>
              <th>Destination</th>
              <th>Path</th>
              <th>Status</th>
              <th>Size</th>
              <th>Type</th>
              <th>Time</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {Array.apply(null, Array(42)).map(() => { return logs }).map(this.renderRow)}
          </tbody>
        </table>
      </div>
    )
  }
}
