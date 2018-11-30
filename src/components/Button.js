import React from 'react';

const Button = ({ type = 'button' }) => {
	
	const renderButton = () =>
		<button type={type}>Button</button>

	return (
		renderButton()
	)
}

export default Button