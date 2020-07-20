import React from 'react'
import App from './App'
import { shallow } from 'enzyme'

describe('App', function () {
  it('should render without crashing', function () {
    const wrapper = shallow(<App />)
    expect(wrapper).toBeDefined()
  })
})
