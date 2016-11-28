/* TableBody */

import React, {PropTypes} from 'react'
import TableRow from './TableRow'

export default function TableBody (props) {
  const columns = props.columns
  const data = props.data

  return (
    <tbody className={props.className}>
      {data.map((item, idx) => {
        return <TableRow key={idx} data={item} columns={columns} />
      })}
    </tbody>
  )
}

TableBody.propTypes = {
  columns: PropTypes.array,
  data: PropTypes.array,
  className: PropTypes.string
}
