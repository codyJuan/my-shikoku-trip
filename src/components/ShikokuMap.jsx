// src/components/ShikokuMap.jsx
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import { useNavigate } from "react-router-dom";
import shikokuGeo from "../data/shikoku-merged.geojson";

export default function ShikokuMap() {
  const navigate = useNavigate();

  const regionColors = {
    香川県: "#F4A261",
    徳島県: "#2A9D8F",
    愛媛県: "#E76F51",
    高知県: "#6B7280",
  };

  const regionLinks = {
    香川県: "/takamatsu",
    徳島県: "/tokushima",
    愛媛県: "/matsuyama",
    高知県: null, // 禁用跳轉
  };

  const labelPositions = {
    香川県: [134.0, 34.2],
    徳島県: [134.29, 33.87],
    愛媛県: [132.9, 33.7],
    高知県: [133.5, 33.65],
  };

  return (
    <div className="flex justify-center items-center -mb-20">
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 11000,
          center: [133.4, 33.45],
        }}
        style={{ width: "100%", height: "auto" }}
      >
        <Geographies geography={shikokuGeo}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const name = geo.properties.N03_001;
              const coords = labelPositions[name] || [133.8, 33.6];
              const isClickable = !!regionLinks[name];

              return (
                <g
                  key={geo.rsmKey}
                  className={isClickable ? "group" : ""}
                >
                  <Geography
                    geography={geo}
                    onClick={() => {
                      if (isClickable) navigate(regionLinks[name]);
                    }}
                    style={{
                      default: {
                        fill: regionColors[name] || "#ccc",
                        outline: "none",
                      },
                      hover: isClickable
                        ? {
                            fill: "#f0e68c",
                            cursor: "pointer",
                            outline: "none",
                          }
                        : {
                            fill: regionColors[name] || "#ccc",
                            cursor: "default",
                            outline: "none",
                          },
                      pressed: {
                        fill: isClickable ? "#e76f51" : regionColors[name],
                        outline: "none",
                      },
                    }}
                  />
                  <Marker coordinates={coords}>
                    <text
                      textAnchor="middle"
                      className={
                        isClickable
                          ? "transition-transform duration-300 group-hover:scale-110"
                          : ""
                      }
                      style={{
                        fontSize: 10,
                        fill: "#111",
                        pointerEvents: "none",
                        fontWeight: "bold",
                      }}
                    >
                      {name.replace("県", "")}
                    </text>
                  </Marker>
                </g>
              );
            })
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
}