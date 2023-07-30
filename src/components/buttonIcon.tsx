interface ButtonProps {
  icon?: any;
  text?: string;
  buttonClass?: string;
  // handleClick?: (string) => void;
  handleClick?: () => void;
}

export const ButtonIcon = (props: ButtonProps) => (
  <button className={props.buttonClass} onClick={() => props.handleClick?.()}>
    {props.icon} <span>{props.text}</span>
  </button>
);
