import { useEffect } from 'react';
import { NextRouter, useRouter } from 'next/router';
import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';
import OSM from 'ol/source/OSM';
import { CircularProgress } from '@material-ui/core';

export default function TempMap() {
  const router: NextRouter = useRouter();

  useEffect(() => {
    if (router.query.mapType) {
      const map = new Map({
        target: 'map',
        controls: null,
        layers: [
          new TileLayer({
            source: new OSM(),
          }),
        ],
        view: new View({
          center: [0, 0],
          zoom: 1,
        }),
      });

      var layer_cloud: TileLayer<XYZ> = new TileLayer({
        source: new XYZ({
          url: `https://tile.openweathermap.org/map/${router.query.mapType}_new/0/0/0.png?appid=2ada1f90a622c0779975a23993c8c6a8`,
          tileSize: [window.innerWidth, window.innerWidth],
        }),
      });
      map.addLayer(layer_cloud);

      const zoomEvent = map.getInteractions().array_[7];
      map.removeInteraction(zoomEvent);
      const zoom = map.getControls().array_[0];
      map.removeControl(zoom);
    }
  }, [router.query.mapType]);

  return (
    <div id="map" className="map">
      {router.query.mapType && <CircularProgress />}
    </div>
  );
}
