import React from 'react'
import ErrorBanner from './ErrorBanner'
import { shallow } from 'enzyme'

describe('Components > ErrorBanner', function () {
  it('should render without crashing', function () {
    const wrapper = shallow(<ErrorBanner />)
    expect(wrapper).toBeDefined()
  })

  describe('Props', function () {
    let wrapper
    const toggleBannerSpy = jest.fn()
    const error = 'An error'

    beforeAll(function () {
      wrapper = shallow(
        <ErrorBanner
          message={error}
          toggleBanner={toggleBannerSpy}
        />
      )
    })

    it('should render a message', function () {
      const message = wrapper.find('span')
      expect(message.text()).toEqual(error)
    })

    describe('when clicking the close button', function () {
      it('should trigger toggleBanner', function () {
        const button = wrapper.find('button')
        button.simulate('click')
        expect(toggleBannerSpy).toHaveBeenCalled()
      })
    })
  })
})
