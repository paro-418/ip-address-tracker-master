import Form from "../Form/Form";
import Info from "./Info";
// import bg from "../../images/pattern-bg.png";

const Header = () => {
  return (
    <header className="bg-header-bg bg-cover relative  basis-[30vh] flex flex-col items-center  gap-8">
      <h1 className="text-4xl mt-4 text-white">IP Address Tracker</h1>
      <Form />
      <Info />
    </header>
  );
};

export default Header;
