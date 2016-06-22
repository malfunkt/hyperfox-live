/* TableBody */

import React from 'react'
import TableRow from './TableRow'

export default class TableBody extends React.Component {
  render () {
    const columns = this.props.columns
    const data = this.props.data

    return (
    <tbody>
      {data.map(function (item, idx) {
        return <TableRow key={idx} data={item} columns={columns} />
      })}
    </tbody>
    )
  }
}
