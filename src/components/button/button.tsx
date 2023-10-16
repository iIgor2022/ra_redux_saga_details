import { MouseEvent } from 'react';
import './button.scss';

type ButtonType = {
  className: string,
  action?: (event: MouseEvent<HTMLButtonElement>) => void,
  nameButton: string,
  typeButton: 'submit' | 'button',
};

function Button({
  className, action,
  nameButton, typeButton,
}: ButtonType): JSX.Element {
  return (
    <button
      className={`button ${className}`}
      type={typeButton}
      onClick={action}
    >
      {nameButton}
    </button>
  );
}

Button.defaultProps = {
  action: null,
};

export default Button;