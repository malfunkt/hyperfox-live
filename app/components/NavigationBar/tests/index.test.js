/* Testing our NavigationBar component */

import NavigationBar from '../index'

import Logo from 'components/Icons/Logo'
import styles from '../styles.css'

import expect from 'expect'
import { shallow } from 'enzyme'
import React from 'react'

describe('<NavigationBar />', () => {
  it('should render the Logo', () => {
    const navLogo = (<Logo className={styles.Logo} width={"65px"} height={"65px"} />)
    const renderedComponent = shallow(
      <NavigationBar />
    )
    expect(renderedComponent.contains(navLogo)).toEqual(true)
  })

  /* it('should adopt the className', () => {
    const renderedComponent = shallow(<NavigationBar className='test' />)
    expect(renderedComponent.find('a').hasClass('test')).toEqual(true)
  })

  it('should adopt the href', () => {
    const renderedComponent = shallow(<NavigationBar href='mxstbr.com' />)
    expect(renderedComponent.prop('href')).toEqual('mxstbr.com')
  })

  it('should adopt the target', () => {
    const renderedComponent = shallow(<NavigationBar target='_blank' />)
    expect(renderedComponent.prop('target')).toEqual('_blank')
  }) */
})
