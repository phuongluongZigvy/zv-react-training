
import CloseButton from "./CloseButton";

export default function Modal(props) {
  return (
    <>
          {props.children}
          <CloseButton onButtonClick={()=>{props.handleClick()}} />
    </>
  );
}
