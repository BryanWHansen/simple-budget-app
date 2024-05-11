interface ButtonProps {
    children: string;
    color?: 'primary' | 'secondary' | 'warning';
    onclick: () => void
}

const Button = ({ children, color = 'primary', onclick }: ButtonProps) => {
  return (
    <button className={'btn btn-' + color} onClick={onclick}>{children}</button>
  )
}

export default Button