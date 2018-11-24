import React from 'react'
import { Polygon, Popup } from 'react-leaflet'

let np = []
const CustomPolygon = ({ positions, children, data, desc, ...rest }) => {
  const handleClick = e => {
    const npt = {desc:"sens " + e.latlng, coords:[e.latlng.lat, e.latlng.lng]}
    np.push(npt)
    console.log(JSON.stringify(np))
  };
  const isMarkerInsidePolygon = (marker, poly) => {
  	//console.log("l ", marker, poly)
    var polyPoints = poly    
    var x = marker.lat, y = marker.lng;

    var inside = false;
    for (var i = 0, j = polyPoints.length - 1; i < polyPoints.length; j = i++) {
        var xi = polyPoints[i][0], yi = polyPoints[i][1]
        var xj = polyPoints[j][0], yj = polyPoints[j][1]

        var intersect = ((yi > y) != (yj > y))
            && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
        if (intersect) inside = !inside;
    }
    return inside;
  }
  const calcPeople = () => {
  	return Math.floor(data.filter(p => isMarkerInsidePolygon(p, positions)).reduce((sum, p) => sum+p.devices, 0))
  }

  return (
    <Polygon positions={positions} onClick={handleClick} fillOpacity={0.3} {...rest}>
    	<Popup>{desc} <br/>People:{calcPeople()} </Popup>
      { children }
    </Polygon>
  )
}

export default CustomPolygon
