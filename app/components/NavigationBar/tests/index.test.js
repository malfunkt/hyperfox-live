/* Testing our NavigationBar component */

import NavigationBar from '../index'

import Logo from 'components/Icons/Logo'
import styles from '../styles.css'

import expect from 'expect'
import { shallow } from 'enzyme'
import React from 'react'

describe('<NavigationBar />', () => {
  it('should render the Logo', () => {
    const navLogo = (<Logo className={styles.Logo} width={"38px"} height={"38px"} />)
    const renderedComponent = shallow(
      <NavigationBar />
    )
    expect(renderedComponent.contains(navLogo)).toEqual(true)
  })
})
