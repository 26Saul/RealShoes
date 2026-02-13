import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function Map() {
  return (
    <MapContainer
      center={[28.1235, -15.4363]}
      zoom={13}
      style={{ height: "400px", width: "100%", borderRadius: "15px" }}
    >
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[28.1235, -15.4363]}>
        <Popup>
          RealShoes Store 📍
        </Popup>
      </Marker>
    </MapContainer>

  );
}

export default Map;
