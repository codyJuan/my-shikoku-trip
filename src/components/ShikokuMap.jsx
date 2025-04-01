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
    高知県: "#264653",
  };

  const regionLinks = {
    香川県: "/takamatsu",
    徳島県: "/tokushima",
    愛媛県: "/ehime",
    高知県: "#", // 預設未開放
  };

  // 手動指定每個縣市的文字標籤位置
  const labelPositions = {
    香川県: [134.0, 34.2],
    徳島県: [134.29, 33.87],
    愛媛県: [132.9, 33.7],
    高知県: [133.5, 33.35],
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

              return (
                <g key={geo.rsmKey} className="group">
                  <Geography
                    geography={geo}
                    onClick={() =>
                      regionLinks[name] && navigate(regionLinks[name])
                    }
                    style={{
                      default: {
                        fill: regionColors[name] || "#ccc",
                        outline: "none",
                      },
                      hover: {
                        fill: "#f0e68c",
                        cursor: "pointer",
                      },
                      pressed: {
                        fill: "#e76f51",
                      },
                    }}
                  />
                  <Marker coordinates={coords}>
                    <text
                      textAnchor="middle"
                      className="transition-transform duration-300 group-hover:scale-110"
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