import { Button, ButtonProps } from "react-bootstrap";
import "./mainButton.scss";

type MainButtonProps = {
  children: React.ReactNode;
} & ButtonProps;

export default function MainButton(props: MainButtonProps) {
  return (
    <Button className="main-btn flex-grow-1" onClick={props.onClick}>
      {props.children}
    </Button>
  );
}
