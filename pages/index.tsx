import React from "react";
import ForecastWidget from "../components/ForecastWidget";
import MapWidget from "../components/MapWidget";

export default function Home() {
  return (
    <div className="home">
      <div className="home__section">
        <ForecastWidget />
      </div>
      <div className="home__section">
        <MapWidget />
      </div>
    </div>
  )
}
