import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { LatLngTuple } from 'leaflet';
import L from 'leaflet';
import Link from 'next/link';

export default function Map() {
  const position: LatLngTuple = [-7.335134867396993, 108.21281882876447];
  const icon = L.icon({ iconUrl: '/icons/marker-icon.png' });
  return (
    <MapContainer
      center={position}
      zoom={13}
      scrollWheelZoom={true}
      className="h-full"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={icon}>
        <Popup>
          <Link href="https://maps.app.goo.gl/6RjgyyNbSw3yKeZD8">Kanabagi</Link>
        </Popup>
      </Marker>
    </MapContainer>
  );
}
