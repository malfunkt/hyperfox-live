/* Table */

import React, {PropTypes} from 'react'
import TableHeader from './TableHeader'
import TableBody from './TableBody'

import styles from './styles.css'
import classNames from 'classnames'

export default class Table extends React.Component {
  static propTypes = {
    data: PropTypes.array
  }

  constructor (props) {
    super(props)
    this.state = {
      data: null,
      sortDir: {}
    }
    this.sortByColumn = this.sortByColumn.bind(this)
    this.sort = this.sort.bind(this)
  }

  componentWillMount () {
    this.setState({data: this.props.data})
  }

  getColumnNames () {
    var firstEl = this.state.data[0]
    return Object.keys(firstEl)
  }

  sortByColumn (array, column, sortDir) {
    return array.sort(function (a, b) {
      var x = a[column]
      var y = b[column]
      if (sortDir === 'asc') {
        return ((x > y) ? -1 : ((x < y) ? 1 : 0))
      } else {
        return ((x < y) ? -1 : ((x > y) ? 1 : 0))
      }
    })
  }

  sort (column) {
    var sortDir = this.state.sortDir
    var data = this.state.data
    var sortedData = this.sortByColumn(data, column, sortDir[column])
    this.setState({data: sortedData})
    sortDir[column] = (sortDir[column] === 'asc' ? 'dsc' : 'asc')
    this.setState({sortDir: sortDir})
  }

  render () {
    var columns = this.getColumnNames()
    var data = this.state.data

    return (
      <table className={classNames('table', 'is-marginless', styles.Table)}>
        <thead className={styles.Table__TableHead}>
          <TableHeader onSort={this.sort} columns={columns} />
        </thead>
        <TableBody data={data} columns={columns} className={styles.Table__TableBody} />
      </table>
    )
  }
}
