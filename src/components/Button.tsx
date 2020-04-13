import React from 'react';

interface Props
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  children?: JSX.Element | string | null;
}

const Button: React.FC<Props> = ({
  onClick,
  className = ``,
  children,
  ...rest
}) => (
  <button
    className={`btn outline-none ${className}`}
    onClick={onClick}
    {...rest}
  >
    {children}
  </button>
);

export default React.memo(Button);
