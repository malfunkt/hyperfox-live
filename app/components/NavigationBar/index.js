import React from 'react'

import classNames from 'classnames'
import styles from './styles.css'

import {FormattedMessage} from 'react-intl'
import messages from './messages'

import Logo from 'components/Icons/Logo'

export default function NavigationBar () {
  return (
    <nav className={classNames('nav', 'is-marginless', styles.NavigationBar)}>
      <div className={classNames('nav-left', styles.NavigationBar__Logo)}>
        <span className='nav-item'>
          <Logo className={styles.Logo} width={"38px"} height={"38px"} />
        </span>
        <span className={classNames('nav-item', styles.NavigationBar__Logo__Live)}>/ Live</span>
      </div>
      <div className={classNames('nav-right', styles.NavigationBar__Search)}>
        <div className='nav-item'>
          <p className={classNames('control', 'has-addons', styles.NavigationBar__Search__Input)}>
            <input className='input is-primary' type='text' placeholder='Keywords' />
            <a className='button is-primary'>
              <span><FormattedMessage {...messages.searchMessage} /></span>
              <span className='icon'><i className='fa fa-search'></i></span>
            </a>
          </p>
        </div>
      </div>
    </nav>
  )
}
