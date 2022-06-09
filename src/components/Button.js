const Button=({ text, href }) => {
	return (
		<a href={href}>
			<button className='button flat'>{text}</button>
		</a>
	)
}

Button.defaultProps = {
	text: 'Button',
}

export default Button