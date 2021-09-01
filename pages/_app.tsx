import React, { useState, useEffect } from 'react';
import { AppProps } from 'next/dist/shared/lib/router/router';
import '../node_modules/react-vis/dist/style.css';
import '../styles/globals.css';
import { CoordinatesContext } from '../context/CoordinatesContecst';
import Navigation from '../components/MainMenu';

interface IGetGeolocationSuccess {
  coords: {
    latitude: number
    longitude: number
  }
}

export default function App({ Component, pageProps }: AppProps) {
  const [coords, setCoords] = useState(null);

  const getGeolocationSuccess = ({ coords }: IGetGeolocationSuccess): void => {
    setCoords({
      lat: coords.latitude,
      lng: coords.longitude,
    });
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(getGeolocationSuccess);
  }, []);
  
  return (
    <CoordinatesContext.Provider value={{ coords, setCoords }}>
      <main className="main">
        <Navigation />
        <Component {...pageProps} />
      </main>
    </CoordinatesContext.Provider>
  );
}
