import React, { useContext } from 'react';
import GoogleMapReact from 'google-map-react';
import { CoordinatesContext } from '../../context/CoordinatesContecst';
import Pointer from './Pointer';
import {CircularProgress} from '@material-ui/core';

interface ISimpleMapProps {};

const SimpleMap: React.FC<ISimpleMapProps> = () => {
  const { coords } = useContext(CoordinatesContext);

  if (!coords) return (
    <CircularProgress />
  )

  return (
    <CoordinatesContext.Consumer>
      {({setCoords}) => (
      <div style={{ height: '100%', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCf_YYE7zOSD_P8gVtmW4RZ9Taf6RnUAZ8' }}
          defaultCenter={coords}
          defaultZoom={11}
          onClick={({lat, lng}) => {
            setCoords({
            lat: lat,
            lng: lng,
          })}}
        >
          <Pointer
            lat={coords.lat}
            lng={coords.lng}
          />
        </GoogleMapReact>
      </div>
      )}
    </CoordinatesContext.Consumer>
  );
}

export default SimpleMap;
