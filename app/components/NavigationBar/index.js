import React from 'react'
import {FormattedMessage} from 'react-intl'
import classNames from 'classnames'

import Logo from 'components/Icons/Logo'
import messages from './messages'
import styles from './styles.css'

export default class NavigationBar extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className='columns is-marginless'>
        <div className={classNames('column', styles.NavigationBar__Logo)}>
          <span><Logo className={styles.Logo} width={"65px"} height={"65px"} /></span>
          <span className={styles.NavigationBar__Logo__Live}>/ Live</span>
        </div>
        <div className={classNames('column', styles.NavigationBar__Search)}>
          <p className={classNames('control', 'has-addons', styles.NavigationBar__Search__Input)}>
            <input className='input is-normal' type='text' placeholder='Keywords' />
            <a className='button is-normal is-info'>
              <span><FormattedMessage {...messages.searchMessage} /></span>
              <span className='icon'><i className='fa fa-search'></i></span>
            </a>
          </p>
        </div>
      </div>
    )
  }
}
