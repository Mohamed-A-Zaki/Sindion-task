import { Button, ButtonProps } from "react-bootstrap";
import "./mainButton.scss";

type MainButtonProps = {
  children: React.ReactNode;
} & ButtonProps;

export default function MainButton({
  onClick,
  children,
  ...rest
}: MainButtonProps) {
  return (
    <Button className="main-btn flex-grow-1" onClick={onClick} {...rest}>
      {children}
    </Button>
  );
}
