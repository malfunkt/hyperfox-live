/* TableRow */

import React from 'react'

export default class TableRow extends React.Component {
  render () {
    const columns = this.props.columns
    const data = this.props.data
    const td = function (item) {
      return columns.map(function (c, i) {
        return <td key={i}>
                 {item[c]}
               </td>
      }, this)
    }.bind(this)

    return (
    <tr key={data}>
      {td(data)}
    </tr>
    )
  }
}
