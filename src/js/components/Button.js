import React from 'react'
import classNames from 'classnames'

const Button = ({ type = 'button', url = '', className = '', theme = '' }) => {

	const buttonClass = classNames('btn', className, {
		'btn--primary': theme === 'primary',
		'btn--secondary': theme === 'secondary'
	})
	
	const renderButton = () =>
		<button type={type} className={buttonClass}>Button</button>

	const isAnchorElement = url && (url.includes('http') || url.startsWith('mailto') || url.startsWith('/'))

	const renderAnchor = () =>
		<a href={url} className={buttonClass}>Button</a>

	return (
		isAnchorElement ? renderAnchor() : renderButton()
	)
}

export default Button