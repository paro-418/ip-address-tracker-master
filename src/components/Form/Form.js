import Button from "../Button/Button";
import positionContext from "../../contexts/data";
import { useContext, useRef } from "react";

const Form = () => {
  const inputRef = useRef();
  const ptnCtx = useContext(positionContext);

  const submitHandler = (event) => {
    event.preventDefault();
    ptnCtx.getIP(inputRef.current.value)
    inputRef.current.value = "";
  };

  return (
    <form
      onSubmit={submitHandler}
      className="flex items-center justify-center sm:w-2/4 rounded-lg overflow-hidden"
    >
      <input
        type="text"
        ref={inputRef}
        placeholder="Search for any IP address or domain"
        className= " sm:basis-[90%] p-2"
      />
      <Button className="basis-[10%] flex items-center justify-center bg-black p-[0.80rem]">
        <svg width="11" height="14">
          <path fill="none" stroke="#FFF" strokeWidth={3} d="M2 1l6 6-6 6" />
        </svg>
      </Button>
    </form>
  );
};

export default Form;
