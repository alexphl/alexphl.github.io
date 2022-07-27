import '../styles/button.module.css'

const Button = (props?: any) => (
	<button className={props.classNames} onClick={props.onClick}>
		{props.text}
	</button>
);

export default Button;
