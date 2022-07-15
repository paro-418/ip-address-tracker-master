import React, { useEffect, useState } from "react";

const positionContext = React.createContext({
  position: [],
  getIP: () => {},
  allInfo: {},
});

export const PositionContextProvider = (props) => {
  const [currentIP, setCurrentIP] = useState("");
  console.log(currentIP);
  const [position, setPosition] = useState([]);
  const [allInfo, setAllInfo] = useState({
    ip: undefined,
    location: undefined,
    isp: undefined,
    asn: undefined,
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setPosition([position.coords.latitude, position.coords.longitude]);
    });
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://geo.ipify.org/api/v2/country?apiKey=at_cjWwD6Rnzrf3ftmuxl8F5KhWyIQBN&ipAddress=${currentIP}`
      );

      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const data = await response.json();
      console.log(data);
      setCurrentIP(data.ip);
      setAllInfo({
        ip: data.ip,
        location: data.location,
        isp: data.isp,
        asn: data.as.asn,
      });
    };

    try {
      fetchData();
    } catch (err) {
      console.log(err);
    }
  }, [currentIP]);

  const getIP = (receiveIp) => {
    setCurrentIP(receiveIp);
  };

  return (
    <positionContext.Provider value={{ position, getIP, allInfo }}>
      {props.children}
    </positionContext.Provider>
  );
};

export default positionContext;
