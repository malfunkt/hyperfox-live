/* TableRow */

import React, {PropTypes} from 'react'

export default function TableRow (props) {
  const columns = props.columns
  const data = props.data

  const td = (item) => {
    return columns.map((c, i) => {
      return <td key={i}>{item[c]}</td>
    })
  }

  return (
    <tr key={data}>
      {td(data)}
    </tr>
  )
}

TableRow.propTypes = {
  columns: PropTypes.array,
  data: PropTypes.object
}
