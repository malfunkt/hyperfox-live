/* TableHeader */

import React from 'react'

export default class TableHeader extends React.Component {
  sort (column) {
    return function (event) {
      const sortDir = this.props.sortDir
      this.props.onSort(column, sortDir)
    }.bind(this)
  }

  render () {
    const columns = this.props.columns
    const cell = function () {
      return columns.map(function (c, i) {
        return <th onClick={this.sort(c)} key={c}>
                 {c}
               </th>
      }, this)
    }.bind(this)

    return (
    <tr key='headerRow'>
      {cell(this.props.item)}
    </tr>
    )
  }
}
