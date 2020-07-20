import React from 'react'
import RowControls from './RowControls'
import { mount } from 'enzyme'
import Table from './Table'
import TableHeader from './TableHeader'

describe('Component > Table', function () {
  let wrapper
  let setStateSpy = jest.fn()

  beforeEach(function () {
    jest
      .spyOn(React, 'useState')
      .mockImplementation((value) => [value, setStateSpy])
    wrapper = mount(<Table />)
  })

  it('should render without crashing', function () {
    expect(wrapper).toBeDefined()
  })

  describe('when clicking a table row', function () {
    it('should set state', function () {
      const header = wrapper.find(TableHeader).first()
      header.props().setActiveRows()
      expect(setStateSpy).toHaveBeenCalled()
    })
  })
})
