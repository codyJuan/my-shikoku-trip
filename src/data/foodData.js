const foodData = [
    {
      id: "olive-ice-cream",
      name: "橄欖霜淇淋",
      type: "冰品",
      images: ["/images/food/olive-ice-cream.jpeg"],
      description: "小豆島限定，橄欖香氣淡雅",
      location: "小豆島橄欖公園",
      googleMapUrl: "https://www.google.com/maps?q=小豆島橄欖公園",
      days: ["2025-01-07"],
      imagePositionPercent: 20  // 0 = bottom, 100 = top
    },
    {
      id: "Shodoshima-noodle",
      name: "橄欖生素麵",
      type: "烏龍麵",
      images: [
        { src: "/images/food/Shodoshima-noodle1.jpeg", position: 80},
        { src: "/images/food/Shodoshima-noodle2.jpeg", position: 80},
        { src: "/images/food/Shodoshima-noodle3.jpeg", position: 60},
      ],
      description: "手工製麵 Q 彈，配上清爽的醬汁",
      location: "小豆島",
      googleMapUrl: "https://maps.app.goo.gl/mZYp7Jv9HGayYQjGA",
      days: ["2025-01-07"],
    },
    {
      id: "awa-ramen",
      name: "阿波豚骨拉麵",
      type: "拉麵",
      image: "/images/food/awa-ramen.jpg",
      description: "當地名物，豚骨湯底濃厚卻不膩",
      location: "德島車站附近",
      googleMapUrl: "https://www.google.com/maps?q=阿波拉麵 德島",
      days: ["2024-12-30"],
      imagePositionPercent: 20  // 0 = bottom, 100 = top
    }
  ];
  
  export default foodData;