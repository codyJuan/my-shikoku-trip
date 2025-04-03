const foodData = [
    {
      id: "olive-ice-cream",
      name: "橄欖霜淇淋",
      type: "冰品",
      images: ["./images/food/Shodoshima-olive-ice-cream.jpeg"],
      description: "小豆島限定，橄欖香氣淡雅",
      location: "小豆島橄欖公園",
      googleMapUrl: "https://www.google.com/maps?q=小豆島橄欖公園",
      days: ["2025-01-05"],
      imagePositionPercent: 20  // 0 = bottom, 100 = top
    },
    {
      id: "Shodoshima-noodle",
      name: "橄欖生素麵",
      type: "烏龍麵",
      images: [
        { src: "./images/food/Shodoshima-noodle1.jpeg", position: 80},
        { src: "./images/food/Shodoshima-noodle2.jpeg", position: 80},
        { src: "./images/food/Shodoshima-noodle3.jpeg", position: 60},
      ],
      description: "手工製麵 Q 彈，配上清爽的醬汁",
      location: "小豆島",
      googleMapUrl: "https://maps.app.goo.gl/mZYp7Jv9HGayYQjGA",
      days: ["2025-01-05"],
    },
    {
      id: "Shodoshima-mochi",
      name: "醬油之鄉麻糬",
      type: "其他",
      images: [
        { src: "./images/food/Shodoshima-mochi.jpeg", position: 80},
      ],
      description: "炭火慢烤麻糬配上現釀醬油，鹹香中帶點煙燻氣息，氛圍感十足。",
      location: "醬油之鄉",
      googleMapUrl: "https://maps.app.goo.gl/ZgNrRUNofZXbBdMs6",
      days: ["2025-01-05"],
    },
    {
      id: "Shodoshima-udon",
      name: "三太郎手打烏龍麵",
      type: "烏龍麵",
      images: [
        { src: "./images/food/Shodoshima-udon-1.jpeg", position: 20},
        { src: "./images/food/Shodoshima-udon-2.jpeg", position: 60},
      ],
      description: "在地人氣烏龍麵店，老闆娘親切熱情，麵條Q彈有勁，吃得出手打的誠意。",
      location: "草壁港",
      googleMapUrl: "https://maps.app.goo.gl/Shv5W6QEJN131eKo8",
      days: ["2025-01-05"],
    },
    {
      id: "Shodoshima-gelato",
      name: "Minori Gelato",
      type: "冰品",
      images: [
        { src: "./images/food/Shodoshima-gelato.jpeg", position: 45},
      ],
      description: "傳說中最強冰店！米倉改建的港口小店，用在地食材做出像魔法一樣的義式冰淇淋。",
      location: "草壁港",
      googleMapUrl: "https://maps.app.goo.gl/xDB6oCpjFm9uBAqXA",
      days: ["2025-01-05"],
    },
    {
      id: "takamatsu-ramen-dragon",
      name: "麺や神龍",
      type: "拉麵",
      images: [
        { src: "./images/food/takamatsu-ramen-dragon.jpeg", position: 15},
      ],
      description: "坐落在紅燈區的拉麵店，營業時間到很晚，但味道普通。",
      location: "馬場通",
      googleMapUrl: "https://maps.app.goo.gl/xDB6oCpjFm9uBAqXA",
      days: ["2025-01-05"],
    },
    {
      id: "takamatsu-night-snake",
      name: "超市宵夜",
      type: "其他",
      images: [
        { src: "./images/food/takamatsu-snake-fish.jpeg", position: 45},
        { src: "./images/food/takamatsu-snake-beef.jpeg", position: 95},
      ],
      description: "香川名產炙燒鰹魚刺身，風味濃郁，略帶海味。和牛油脂太豐富，搭配小豆島香料鹽才不會膩口。",
      location: "マルナカ 田町店",
      googleMapUrl: "https://maps.app.goo.gl/uewS5mY54hogVR837",
      days: ["2025-01-05"],
    },

  ];
  
  export default foodData;