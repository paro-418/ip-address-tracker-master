import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import positionContext from "../../contexts/data";
import { useContext } from "react";

const Map = () => {
  let position = [24.1913, 86.2996];
  return (
    <article className=" leafletContainer h-[70vh] flex-grow">
      <MapContainer
        className="h-full w-full "
        center={position}
        zoom={13}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>{position[0] + ` ` + position[1]}</Popup>
        </Marker>
      </MapContainer>
    </article>
  );
};

export default Map;
