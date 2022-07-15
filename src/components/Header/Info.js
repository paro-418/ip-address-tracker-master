import { useContext } from "react";
import positionContext from "../../contexts/data";

const Info = () => {
  const ptnCtx = useContext(positionContext);

  if(ptnCtx.allInfo.ip === undefined){
    return <p className="text-white font-medium"> enter ip address to see infos</p>
  }
  return (
    <div className=" absolute top-2/4  sm:top-full sm:-translate-y-2/4 z-[1000] shadow-xl bg-white w-3/4 h-fit flex flex-col justify-between p-4 rounded-lg sm:flex-row sm:h-1/2">
      <span className="sm:border-r sm:border-gray-400 flex-grow flex flex-col justify-evenly items-center p-3 text-sm">
        <h5 className="uppercase font-semibold text-sm text-gray-400">
          ip address
        </h5>
        <p className="text-sm">{ptnCtx.allInfo.ip}</p>
      </span>
      <span className="sm:border-r sm:border-gray-400 flex-grow flex flex-col justify-evenly items-center p-3 text-sm">
        <h5 className="uppercase font-semibold text-sm text-gray-400 ">
          location
        </h5>
        <p className="text-sm">{ptnCtx.allInfo.location.region}, {ptnCtx.allInfo.location.country
        } {ptnCtx.allInfo.asn ? ptnCtx.allInfo.asn : ""}</p>
      </span>
      <span className="sm:border-r sm:border-gray-400 flex-grow flex flex-col justify-evenly items-center p-3 text-sm">
        <h5 className="uppercase font-semibold text-sm text-gray-400 ">
          timezone
        </h5>
        <p className="text-sm">UTC{ptnCtx.allInfo.location.timezone}</p>
      </span>
      <span className=" flex-grow flex flex-col justify-evenly items-center p-3 text-sm">
        <h5 className="uppercase font-semibold text-sm text-gray-400 ">isp</h5>
        <p className="text-sm">{ptnCtx.allInfo.isp}</p>
      </span>
    </div>
  );
};

export default Info;
