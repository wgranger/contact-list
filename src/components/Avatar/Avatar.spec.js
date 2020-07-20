import React from 'react'
import Avatar from './Avatar'
import { shallow } from 'enzyme'

describe('Component > Avatar', function () {
  it('should render without crashing', function () {
    const wrapper = shallow(<Avatar />)
    expect(wrapper).toBeDefined()
  })

  describe('when given a name', function () {
    it('should render initials', function () {
      const wrapper = shallow(<Avatar name={'John Doe'} />)
      const span = wrapper.find('span')
      expect(span.text()).toEqual('JD')
    })
  })
})
