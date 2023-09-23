import { Button, ButtonProps } from "react-bootstrap";

export default function CancelButton(props: ButtonProps) {
  return (
    <Button
      className="cancel flex-grow-1 bg-white text-black border"
      onClick={props.onClick}
    >
      Cancel
    </Button>
  );
}
