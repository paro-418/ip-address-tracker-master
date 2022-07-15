const Info = () => {
  return (
    <div className=" absolute top-full -translate-y-2/4 z-10 bg-white w-3/4 h-1/2 flex justify-between p-4 rounded-lg ">
      <span className="border-r border-gray-400 flex-grow flex flex-col justify-evenly items-center">
        <h5 className="uppercase font-semibold text-sm text-gray-400">
          ip address
        </h5>
        <p className="text-2xl">172.127.68.25</p>
      </span>
      <span className="border-r border-gray-400 flex-grow flex flex-col justify-evenly items-center">
        <h5 className="uppercase font-semibold text-sm text-gray-400 ">
          location
        </h5>
        <p className="text-2xl">Brooklyn, NY 10001</p>
      </span>
      <span className="border-r border-gray-400 flex-grow flex flex-col justify-evenly items-center">
        <h5 className="uppercase font-semibold text-sm text-gray-400 ">
          timezone
        </h5>
        <p className="text-2xl">UTC-05:00</p>
      </span>
      <span className=" flex-grow flex flex-col justify-evenly items-center">
        <h5 className="uppercase font-semibold text-sm text-gray-400 ">isp</h5>
        <p className="text-2xl">SpaceX Starlink</p>
      </span>
    </div>
  );
};

export default Info;
