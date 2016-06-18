import React, {PropTypes} from 'react'
import {FormattedMessage} from 'react-intl'
import classNames from 'classnames'

export default class Notification extends React.Component {
  static propTypes = {
    alertStyle: PropTypes.string,
    message: PropTypes.object
  }

  constructor (props) {
    super(props)
  }

  render () {
    const alertStyles = {
      normal: '',
      info: 'is-info',
      success: 'is-success',
      warning: 'is-warning',
      danger: 'is-danger'
    }
    return (
      <div className={classNames('notification', alertStyles[this.props.alertStyle])}>
        <button className='delete'></button>
        <FormattedMessage {...this.props.message} />
      </div>
    )
  }
}
