import React from 'react'
import { Polygon } from 'react-leaflet'

let np = []
const CustomPolygon = ({ positions, children, ...rest }) => {
  const handleClick = e => {
    const npt = {desc:"sens " + e.latlng, coords:[e.latlng.lat, e.latlng.lng]}
    np.push(npt)
    console.log(JSON.stringify(np))
  };
  return (
    <Polygon positions={positions} onClick={handleClick} {...rest}>
      { children }
    </Polygon>
  )
}

export default CustomPolygon
