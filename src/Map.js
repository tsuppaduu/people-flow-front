import React from 'react';
import { Map, Marker, Popup, TileLayer, LayersControl, LayerGroup } from 'react-leaflet';
import Polygon from './Polygon';
import HeatmapLayer from 'react-leaflet-heatmap-layer';
import polygonCoords from './polygonCoords';
import PeopleHeatmap from './PeopleHeatmap';

export const addressPoints = [
  [61.492635, 23.763434, '10'],
  [61.492635, 23.763433, '10'],
  [61.492635, 23.7633, '10'],
  [61.492625, 23.763434, '30'],
  [61.4927, 23.76039, '100010'],
];

const { BaseLayer, Overlay } = LayersControl;

const CustomMap = props => {
  const middlePosition = [61.4926, 23.7625];
  const mapBounds = [[61.494761, 23.758024], [61.491382, 23.767546]];

  const handleClick = e => {
    console.log(e.latlng);
  };

  return (
    <Map
      center={middlePosition}
      zoom={17}
      minNativeZoom={18}
      maxBounds={mapBounds}
      minZoom={17}
      maxZoom={19}
      onClick={handleClick}
    >
      <LayersControl collapsed = {false}>
        <TileLayer
          url="https://korona.geog.uni-heidelberg.de/tiles/roads/x={x}&y={y}&z={z}"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Overlay name="Heatmap" checked = {true}>
          <PeopleHeatmap />
        </Overlay>
        <Marker position={middlePosition}>
          <Popup>
            Center Point
          </Popup>
        </Marker>

        <Overlay name="Ares of interest" checked = {true}>
          <LayerGroup>
            {polygonCoords.polyPositions.map(pos => (
              <Polygon key={pos.desc} positions={pos.coords}>
                <Popup>{pos.desc}</Popup>
              </Polygon>
            ))}
          </LayerGroup>
        </Overlay>
      </LayersControl>
    </Map>
  );
};

export default CustomMap;
