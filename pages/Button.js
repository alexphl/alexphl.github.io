import "./button.css";

const Button = ({ text, onClick }) => {
	return (
		<button className="button" onClick={onClick}>
			{text}
		</button>
	);
};

const ButtonFlat = ({ text, onClick }) => {
	return (
		<button className="button flat" onClick={onClick}>
			{text}
		</button>
	);
};

Button.defaultProps = {
	text: "Button",
};

export { Button, ButtonFlat };
