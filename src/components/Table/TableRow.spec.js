import React from 'react'
import { shallow } from 'enzyme'
import TableRow from './TableRow'
import mockData from './info'

describe('Component > TableRow', function () {
  let wrapper
  let setActiveRowsSpy = jest.fn()

  beforeEach(function () {
    wrapper = shallow(
      <TableRow
        activeRows={[]}
        row={mockData[0]}
        setActiveRows={setActiveRowsSpy}
      />)
  })

  afterEach(() => jest.resetAllMocks())

  it('should render without crashing', function () {
    expect(wrapper).toBeDefined()
  })

  describe('input element onKeyDown', function () {
    describe('when the enter button', function () {
      it('should toggle rows', function () {
        const input = wrapper.find('input').first()
        input.simulate('keydown', { key: 'Enter' })
        expect(setActiveRowsSpy).toHaveBeenCalledWith([mockData[0]])
      })
    })

    describe('when any other key that is not space', function () {
      it('should not toggle rows', function () {
        const input = wrapper.find('input').first()
        input.simulate('keydown', { key: 'Esc' })
        expect(setActiveRowsSpy).not.toHaveBeenCalled()
      })
    })

    describe('with row already active', function () {
      it('should deactivate the row', function () {
        wrapper = shallow(
          <TableRow
            activeRows={[mockData[0]]}
            row={mockData[0]}
            setActiveRows={setActiveRowsSpy}
          />)
        const input = wrapper.find('input').first()
        input.simulate('keydown', { key: 'Enter' })
        expect(setActiveRowsSpy).toHaveBeenCalledWith([])
      })
    })
  })
})
