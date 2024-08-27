import React from 'react';
import { MapContainer, ImageOverlay } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import floorPlan from './floor_plan.png'; // Import your image like this

const mapBounds = [[0, 0], [559, 684]]; // Adjust these to your image dimensions

function FloorPlanMap() {
  return (
    <MapContainer
      center={[279.5, 342]} // Center of the image
      zoom={-2}
      minZoom={-2}
      maxZoom={1}
      style={{ height: '100vh', width: '100%' }}
      crs={L.CRS.Simple} // Using Simple CRS for pixel-based coordinates
    >
      <ImageOverlay
        url={floorPlan} // Use the imported image
        bounds={mapBounds}
      />
    </MapContainer>
  );
}

export default FloorPlanMap;
