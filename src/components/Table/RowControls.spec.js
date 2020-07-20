import React from 'react'
import RowControls from './RowControls'
import { mount } from 'enzyme'
import { act } from 'react-dom/test-utils'

describe('Component > RowControls', function () {
  it('should render without crashing', function () {
    const wrapper = mount(<RowControls />)
    expect(wrapper).toBeDefined()
  })

  describe('when clicking the control', function () {
    let wrapper
    const events = {}

    beforeAll(function () {
      window.addEventListener = jest.fn((evt, cb) => events[evt] = cb);
      wrapper = mount(<RowControls visible />)
    })

    it('should open the dropdown', function () {
      const initialBtnCount = wrapper.find('button').length
      expect(initialBtnCount).toBe(1)
      wrapper.find('button').simulate('click')
      const nextBtnCount = wrapper.find('button').length
      expect(nextBtnCount).toBe(4)
    })

    describe('when selecting a control', function () {
      it('should select the control and close the dropdown', function () {
        const finalButton = wrapper.find('button').last()
        finalButton.simulate('click')

        const buttonCount = wrapper.find('button').length
        expect(buttonCount).toBe(1)
        const activeControl = wrapper.find('span')
        expect(activeControl.text()).toBe('Call')
      })
    })

    describe('when pressing the escape key', function () {
      it('should close the dropdown', function () {
        wrapper.find('button').simulate('click')
        const initialBtnCount = wrapper.find('button').length
        expect(initialBtnCount).toBe(4)
        act(() => events.keyup({ keyCode: 27 }))
        wrapper.update()
        const nextBtnCount = wrapper.find('button').length
        expect(nextBtnCount).toBe(1)
      })
    })

    describe('when clicking off controls', function () {
      it('should close the dropdown', function () {
        wrapper.find('button').simulate('click')
        const initialBtnCount = wrapper.find('button').length
        expect(initialBtnCount).toBe(4)
        let mockNode = document.createElement('div')
        act(() => events.click(mockNode))
        wrapper.update()
        const nextBtnCount = wrapper.find('button').length
        expect(nextBtnCount).toBe(1)
      })
    })

    it('should unmount without crashing', function () {
      wrapper.unmount()
      expect(wrapper).toBeDefined()
    })
  })
})
