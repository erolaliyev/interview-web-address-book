import PropTypes from 'prop-types';

const Button = ({ type, buttonText, onClick }) => (
	<button type={type} onClick={onClick}>
		{buttonText}
	</button>
);

Button.defaultProps = {
	type: 'button',
};

Button.propTypes = {
	type: PropTypes.string,
	buttonText: PropTypes.string.isRequired,
	onclick: PropTypes.func,
};

export default Button;
