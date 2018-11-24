import React from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import Polygon from './Polygon'
import HeatmapLayer from 'react-leaflet-heatmap-layer'
import polygonCoords from './polygonCoords';

export const addressPoints = [
  [61.492635, 23.763434, '10'],
  [61.492635, 23.763433, '10'],
  [61.492635, 23.7633, '10'],
  [61.492625, 23.763434, '30'],
  [61.4927, 23.76039, '100010'],
];

const CustomMap = () => {
  const middlePosition = [61.492600, 23.762500];
  const mapBounds = [[61.494761, 23.758024], [61.491382, 23.767546]]

  const handleClick = (e) => {
    console.log(e.latlng)
  }

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
      <TileLayer
        url="https://korona.geog.uni-heidelberg.de/tiles/roads/x={x}&y={y}&z={z}"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <HeatmapLayer
        points={addressPoints}
        longitudeExtractor={m => m[1]}
        latitudeExtractor={m => m[0]}
        intensityExtractor={m => parseFloat(m[2])}
        gradient={{ 0.4: 'green', 0.8: 'orange', 1.0: 'red' }}
        blur={1}
        radius={10}
        minOpacity={0.01}
      />
      <Marker position={middlePosition}>
        <Popup>
          A pretty CSS3 popup.
          <br />
          Easily customizable.
        </Popup>
      </Marker>

      {polygonCoords.polyPositions.map(pos => (
        <Polygon key = {pos.desc} positions={pos.coords}>
          <Popup>{pos.desc}</Popup>
        </Polygon>
      ))}

      <Polygon positions={mainStagePos}>
        <Popup>
          Main stage.
          <br />
          1000 hlö.
        </Popup>
      </Polygon>

      <Polygon positions={foodOne}>
        <Popup>
          Food place one.
          <br />
          40 hlö.
        </Popup>
      </Polygon>

      <Polygon positions={stalls}>
        <Popup>
          WC.
          <br />
          60 hlö.
        </Popup>
      </Polygon>

      <Polygon positions={stadionExitTwo}>
        <Popup>
          Stadion exit two.
          <br />
          450 hlö.
        </Popup>
      </Polygon>

      <Polygon positions={stadionExitOne}>
        <Popup>
          Stadion exit one.
          <br />
          350 hlö.
        </Popup>
      </Polygon>

      <Polygon positions={bridge}>
        <Popup>
          Bridge.
          <br />
          400 hlö.
        </Popup>
      </Polygon>

      <Polygon positions={toilet1}>
        <Popup>
          Toilet.
          <br />
          150 hlö.
        </Popup>
      </Polygon>

      <Polygon positions={firstAid}>
        <Popup>
          First Aid.
          <br />
          50 hlö.
        </Popup>
      </Polygon>

      <Polygon positions={entrance1}>
        <Popup>
          Entrance 1.
          <br />
          400 hlö.
        </Popup>
      </Polygon>

      <Polygon positions={yleStudio}>
        <Popup>
          Yle Studio.
          <br />
          60 hlö.
        </Popup>
      </Polygon>

      <Polygon positions={toilet2}>
        <Popup>
          Toilet 2.
          <br />
          40 hlö.
        </Popup>
      </Polygon>

      <Polygon positions={vipArea}>
        <Popup>
          Vip Area.
          <br />
          300 hlö.
        </Popup>
      </Polygon>

      <Polygon positions={tentStage}>
        <Popup>
          Tent Stage.
          <br />
          600 hlö.
        </Popup>
      </Polygon>

      <Polygon positions={exclusiveArea}>
        <Popup>
          Exclusive Area.
          <br />
          240 hlö.
        </Popup>
      </Polygon>

      <Polygon positions={sonera}>
        <Popup>
          Sonera Tent.
          <br />
          30 hlö.
        </Popup>
      </Polygon>

      <Polygon positions={entrance2}>
        <Popup>
          Entrance for basic ticket, exclusive ticket and VIP ticket.
          <br />
          80 hlö.
        </Popup>
      </Polygon>

      <Polygon positions={streetStage}>
        <Popup>
          Street Stage.
          <br />
          30 hlö.
        </Popup>
      </Polygon>

      <Polygon positions={servingArea}>
        <Popup>
          Serving area for alcohol.
          <br />
          340 hlö.
        </Popup>
      </Polygon>

    </Map>
  );
};

export default CustomMap;
