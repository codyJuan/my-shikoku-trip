// src/components/ShikokuMapSmall.jsx
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import shikokuGeo from "../data/shikoku-merged.geojson";

export default function ShikokuMapSmall({ highlightRegions = [] }) {
  const regionColors = {
    香川県: "#F4A261",
    徳島県: "#2A9D8F",
    愛媛県: "#E76F51",
    高知県: "#6B7280", // 預設灰色
  };

  return (
    <ComposableMap
      projection="geoMercator"
      projectionConfig={{
        scale: 15000,
        center: [133.4, 33.5],
      }}
      style={{ width: "100%", height: "auto" }}
    >
      <Geographies geography={shikokuGeo}>
        {({ geographies }) =>
          geographies.map((geo) => {
            const name = geo.properties.N03_001;
            const isHighlighted = highlightRegions.includes(name);

            return (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                tabIndex={-1}
                style={{
                  default: {
                    fill: isHighlighted ? regionColors[name] : "#eee",
                    outline: "none",
                    pointerEvents: "none",
                  },
                  hover: {
                    fill: isHighlighted ? regionColors[name] : "#eee",
                    cursor: "default", // 不可點擊
                  },
                  pressed: {
                    fill: isHighlighted ? regionColors[name] : "#eee",
                  },
                }}
              />
            );
          })
        }
      </Geographies>
    </ComposableMap>
  );
}