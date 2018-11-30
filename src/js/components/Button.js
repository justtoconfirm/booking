import React from 'react'

const Button = ({ type = 'button', url = '' }) => {
	
	const renderButton = () =>
		<button type={type}>Button</button>

	const isAnchorElement = url && (url.includes('http') || url.startsWith('mailto') || url.startsWith('/'))

	const renderAnchor = () =>
		<a href={url}>Button</a>

	return (
		isAnchorElement ? renderAnchor() : renderButton()
	)
}

export default Button