import React from 'react'
import { shallow } from 'enzyme'
import Button from './Button'

describe('<Button/>', () => {
	it('should render without throwing an error', () => {
		expect(shallow(<Button/>).find('.btn').exists()).toBe(true)
	})
})