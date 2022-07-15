const Button = (props) => {
  return (
    <button type={props.type} className={props.className} onClick={props.callFunction}>
      {props.children}
    </button>
  );
};

export default Button;
