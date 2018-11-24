import React from 'react'
import { Polygon } from 'react-leaflet'

const CustomPolygon = ({ positions, children, ...rest }) => {
  return (
    <Polygon positions={positions} onClick={(e) => console.log(e.latlng)} {...rest}>
      { children }
    </Polygon>
  )
}

export default CustomPolygon
