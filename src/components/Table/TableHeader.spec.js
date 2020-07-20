import React from 'react'
import RowControls from './RowControls'
import { shallow } from 'enzyme'
import TableHeader from './TableHeader'
import mockData from './info'


describe('Component > TableHeader', function () {
  describe('with no rows selected', function () {
    let wrapper
    let setActiveRowsSpy = jest.fn()
    const mockRef = { current: {} }

    beforeEach(function () {
      jest
        .spyOn(React, 'useRef')
        .mockImplementation(() => mockRef)
      wrapper = shallow(
        <TableHeader
          activeRows={[]}
          rows={mockData}
          setActiveRows={setActiveRowsSpy}
        />)
    })

    afterEach(() => jest.resetAllMocks())

    it('should render without crashing', function () {
      expect(wrapper).toBeDefined()
    })

    it('should not check the input', function () {
      const input = wrapper.find('input')
      expect(input.props().checked).toBeFalsy()
      expect(mockRef.indeterminate).toBeFalsy()
    })

    describe('input element onKeyDown', function () {
      describe('when the enter button', function () {
        it('should toggle rows', function () {
          const input = wrapper.find('input').first()
          input.simulate('keydown', { key: 'Enter' })
          expect(setActiveRowsSpy).toHaveBeenCalledWith(mockData)
        })
      })

      describe('when any other key that is not space', function () {
        it('should not toggle rows', function () {
          const input = wrapper.find('input').first()
          input.simulate('keydown', { key: 'Esc' })
          expect(setActiveRowsSpy).not.toHaveBeenCalled()
        })
      })
    })
  })

  describe('with all rows selected', function () {
    it('should check the input', function () {
      const wrapper = shallow(<TableHeader activeRows={mockData} rows={mockData}/>)
      const input = wrapper.find('input')
      expect(input.props().checked).toBeTruthy()
    })
  })

  describe('with a row selected', function () {
    it('should not check the input', function () {
      const wrapper = shallow(<TableHeader activeRows={[mockData[0]]} rows={mockData}/>)
      const input = wrapper.find('input')
      expect(input.props().checked).toBeFalsy()
    })
  })
})
