import React, { PropTypes } from 'react'

import Logo from 'components/Icons/Logo'

import styles from './styles.css'

export default class NavigationBar extends React.Component {
  static propTypes = {
    className: PropTypes.string
  }

  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        <Logo className={styles.Logo} width={"65px"} height={"65px"} />
      </div>
    )
  }
}
