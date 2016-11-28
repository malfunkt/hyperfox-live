/* Testing our NavigationBar component */

import Notification from '../index'

import expect from 'expect'
import { shallow } from 'enzyme'
import React from 'react'

const message = {
  id: 'hyperfox.test',
  description: 'Major Tom',
  defaultMessage: 'Ground Control To Major Tom'
}

describe('<Notification />', () => {
  it('should render the Notification with is-danger class', () => {
    const renderedComponent = shallow(
      <Notification alertStyle='danger' message={message} />
    )
    expect(renderedComponent.hasClass('is-danger')).toEqual(true)
  })
  it('should render the Notification with is-success class', () => {
    const renderedComponent = shallow(
      <Notification
        alertStyle='success'
        message={message}
      />
    )
    expect(renderedComponent.hasClass('is-success')).toEqual(true)
  })
})
