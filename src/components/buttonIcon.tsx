interface ButtonProps {
  icon?: any;
  text?: string;
  buttonClass?: string;
  handleClick?: () => void;
}

export const ButtonIcon = (props: ButtonProps) => (
  <button
    type='button'
    className={props.buttonClass}
    onClick={() => props.handleClick?.()}
    aria-label='icon'
  >
    {props.icon} <span>{props.text}</span>
  </button>
);
