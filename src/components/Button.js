import './button.css';

const Button = ({ text, href }) => {
	return (
		<a href={href}>
			<button className='button'>{text}</button>
		</a>
	)
}

const ButtonFlat = ({ text, href }) => {
	return (
		<a href={href}>
			<button className='button flat'>{text}</button>
		</a>
	)
}

Button.defaultProps = {
	text: 'Button',
}

export { 
	Button,
	ButtonFlat,
}