// @flow

import React from 'react'
import classNames from 'classnames'
import type { ButtonType } from './Button.types'

const Button = ({ type = 'button', url = '', className = '', theme = '', children }: ButtonType) => {

	const buttonClass = classNames('btn', className, {
		'btn--primary': theme === 'primary',
		'btn--secondary': theme === 'secondary'
	})
	
	const renderButton = () =>
		<button type={type} className={buttonClass}>{children}</button>

	const isAnchorElement = url && (url.includes('http') || url.startsWith('mailto') || url.startsWith('/'))

	const renderAnchor = () =>
		<a href={url} className={buttonClass}>{children}</a>

	return (
		isAnchorElement ? renderAnchor() : renderButton()
	)
}

export default Button