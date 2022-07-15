import Button from "../Button/Button";

const Form = () => {
  return (
    <form className="flex items-center justify-center w-2/4 rounded-lg overflow-hidden">
      <input
        type="text"
        placeholder="Search for any IP address or domain"
        className="basis-[90%] p-2"
      />
      <Button className="basis-[10%] flex items-center justify-center bg-black p-[0.80rem]">
        <svg width="11" height="14">
          <path fill="none" stroke="#FFF" stroke-width="3" d="M2 1l6 6-6 6" />
        </svg>
      </Button>
    </form>
  );
};

export default Form;
