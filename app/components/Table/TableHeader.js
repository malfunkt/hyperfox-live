/* TableHeader */

import React, {PropTypes} from 'react'

export default function TableHeader (props) {
  const columns = props.columns
  const sort = (column) => {
    return (event) => {
      const sortDir = props.sortDir
      props.onSort(column, sortDir)
    }
  }

  return (
    <tr key='headerRow'>
      {columns.map((c, i) => {
        return <th onClick={sort(c)} key={c}>{c}</th>
      })}
    </tr>
  )
}

TableHeader.propTypes = {
  columns: PropTypes.array,
  sortDir: PropTypes.func
}
