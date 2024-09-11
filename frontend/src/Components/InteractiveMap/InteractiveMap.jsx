import "./InteractiveMap.css";
import { SVGMap } from "react-svg-map";
import USAMap from "@svg-maps/usa";
import mapData from "../../data/sourceData.json";

import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Annotation,
  ZoomableGroup,
} from "react-simple-maps";
import { Tooltip as ReactTooltip } from "react-tooltip";

// import USElectionData from "../../assets/uselection2020.png";

const InteractiveMap = () => {
 
  const geoUrl =
    "https://cdn.jsdelivr.net/npm/@d3ts/us-atlas@1/states-10m.json";

  return (
    <>
      <div className="InteractiveMap">
        <a href="/USElectionData2020.html">

        <SVGMap 
          onLocationClick={(e) => {
            console.log(
              "e",
              e.target.id,
              e.target.getAttribute("name"),
              e.target.ariaLabel
            );
          }}
          
          onLocationMouseOver={() => {}}
          onLocationMouseMove={() => {}}
          onLocationMouseOut={() => {}}
          className="svg-map"
          map={USAMap}
        />

        </a>
   
        {/* <div className="cmap">
          <ComposableMap data-tip="">
            <ZoomableGroup zoom={1}>
              <Geographies geography={geoUrl} scale={4}>
                {({ geographies }) =>
                  geographies.map((geo) => (
                    <Geography key={geo.rsmkey} geography={geo} />
                  ))
                }
              </Geographies>
              {markers.map((state) => (
                <Marker
                  key={state.zip}
                  coordinates={[state.longitude, state.latitude]}
                > */}
                  {/*Check if coordinates exist and are valid */}
                  {/* {state.longitude && state.latitude && (
                    <>
                      <circle r={5} fill="red" stroke="#fff" strokeWidth={1} />
                      <Annotation
                        subject={state.zip}
                        dx={-4}
                        dy={8}
                        connectorProps={{ stroke: "#000" }}
                        content={`Zip Code: ${state.zip}`}
                      />
                    </>
                  )}
                </Marker>
              ))}
            </ZoomableGroup>
          </ComposableMap> 
        </div>
        */}
      </div>
      
    </>
  );
};

export default InteractiveMap;
