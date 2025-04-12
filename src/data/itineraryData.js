const itineraryData = [
  {
    title: "飛往四國的日落",
    description: "抵達高松前拍到的夕陽，機翼在雲海上劃過，這一幕就像幫我們這趟旅程按下開場的快門。",
    images: [
      {
        src: "./images/takamatsu/takamatsu-sky.jpeg",
        position: 30
      },
    ],
    days: ["2025-01-04"],
  },
  {
    title: "高松機場接駁巴士",
    description: "一下飛機就搭上前往高松市區的接駁巴士，大約 40 分鐘就能到高松站，旅行正式開始了！",
    images: [
      {
        src: "./images/takamatsu/takamatsu-airport-bus.jpeg",
        position: 50
      },
    ],
    days: ["2025-01-04"],
  },
  {
    title: "高松夜空",
    description: "在高松的夜裡抬頭一望，竟然能在市區看見這麼多星星。電線橫過天際，卻絲毫不減那份寧靜與美麗，像是旅途中無意間拾起的小驚喜。",
    images: [
      {
        src: "./images/takamatsu/takamatsu-star.jpeg",
        position: 30
      },
    ],
    days: ["2025-01-04"],
  },
  {
    title: "栗林超市",
    description: "旅途中最讓人安心的，是晚上還能隨時補貨的超市。今天晚餐與宵夜全靠它撐場！",
    images: [
      {
        src: "./images/takamatsu/takamatsu-supermarket.jpeg",
        position: 40
      },
    ],
    days: ["2025-01-04"],
  },
  {
    title: "琴電（ことでん）",
    description: "穿越城市與田野的復古電車。琴電是香川縣在地的生活鐵道，也是通往金刀比羅宮的旅人之路。緩緩駛過平交道的那一刻，就像進入了四國的日常時光。",
    images: [
      {
        src: "./images/takamatsu/takamatsu-train.mp4",
        type: "video"
      },
    ],
    days: ["2025-01-04"],
  },
  {
    title: "小豆島橄欖公園",
    description: "小豆島橄欖公園以地中海風情與橄欖歷史聞名，希臘風車是《魔女宅急便》拍攝地。園內可拍飛天照，還有橄欖霜淇淋與特色郵筒，是小豆島必訪景點！",
    images: [
      {
        src: "./images/takamatsu/takamatsu-olive-park.jpeg",
        position: "bottom"
      },
      {
        src: "./images/takamatsu/takamatsu-olive-broom.jpeg",
        position: "bottom"
      },
      {
        src: "./images/takamatsu/takamatsu-olive-witch.jpeg",
        position: 45
      },
    ],
    days: ["2025-01-05"],
  },
  {
    title: "醬油之鄉",
    description: "有百年歷史的釀造工廠，空氣中飄著濃濃醬香，感受小豆島的職人文化。",
    images: [
      {
        src: "./images/takamatsu/takamatsu-olive-soy-1.jpeg",
        position: 50
      },
      {
        src: "./images/takamatsu/takamatsu-olive-soy-2.jpeg",
        position: 40
      },
      {
        src: "./images/takamatsu/takamatsu-olive-soy-3.jpeg",
        position: 30
      },
    ],
    days: ["2025-01-05"],
  },
  {
    title: "ZAG ZAG",
    description: "在小豆島的藥妝店 ZAG ZAG 隨手的自拍！雖然是島上的小店，但商品超齊全，日用品、藥品通通有，逛起來一點也不輸市區！",
    images: [
      {
        src: "./images/takamatsu/takamatsu-zag.jpeg",
        position: 40
      },
    ],
    days: ["2025-01-05-s"],
  },
  {
    title: "草壁港",
    description: "跟可愛的小豆島橄欖公車合照 🚌🫒📸",
    images: [
      {
        src: "./images/takamatsu/takamatsu-port-1.jpeg",
        position: 40
      },
      {
        src: "./images/takamatsu/takamatsu-port-2.jpeg",
        position: 40
      },
      {
        src: "./images/takamatsu/takamatsu-port-3.jpeg",
        position: 30
      },
    ],
    days: ["2025-01-05-s"],
  },
  {
    title: "丸龜城",
    description: "擁有全日本最高石垣的丸龜城，天守雖小但氣勢十足，優雅的扇形石牆令人驚艷。",
    images: [
      {
        src: "./images/takamatsu/takamatsu-castle-1.jpeg",
        position: 50
      },
      {
        src: "./images/takamatsu/takamatsu-castle-2.jpeg",
        position: 70
      },
      {
        src: "./images/takamatsu/takamatsu-castle-3.jpeg",
        position: 45
      },
    ],
    days: ["2025-01-06"],
  },
  {
    title: "金刀比羅宮",
    description: "在霧雨中挑戰785階石梯，神社籠罩薄霧，更添神秘與莊嚴氣息。",
    images: [
      {
        src: "./images/takamatsu/takamatsu-temple-1.jpeg",
        position: 50
      },
      {
        src: "./images/takamatsu/takamatsu-temple-2.jpeg",
        position: 40
      },
      {
        src: "./images/takamatsu/takamatsu-temple-3.jpeg",
        position: 50
      },
      {
        src: "./images/takamatsu/takamatsu-temple-4.jpeg",
        position: 60
      },
    ],
    days: ["2025-01-06"],
  },
  {
    title: "栗林公園",
    description: "漫步於江戶時代的迴遊式日式庭園，松林倒映在池水中，是高松最優雅的片刻。",
    images: [
      {
        src: "./images/takamatsu/takamatsu-park-1.jpeg",
        position: 50
      },
      {
        src: "./images/takamatsu/takamatsu-park-2.jpeg",
        position: 80
      },
      {
        src: "./images/takamatsu/takamatsu-park-3.jpeg",
        position: 60
      },
      {
        src: "./images/takamatsu/takamatsu-park-4.jpeg",
        position: 50
      },
      {
        src: "./images/takamatsu/takamatsu-park-5.jpeg",
        position: 90
      },
    ],
    days: ["2025-01-07-1"],
  },
  {
    title: "阿波舞會館",
    description: "走進德島的舞蹈文化中心，能親自上台體驗阿波舞步！還有展示歷史的博物館、販售特產的物產館，以及通往眉山的纜車站，來德島不可錯過的文化設施。",
    images: [
      {
        src: "./images/tokushima/tokushima-dance-3.jpeg",
        position: 65
      },
      {
        src: "./images/tokushima/tokushima-dance-1.jpeg",
        position: 50
      },
      {
        src: "./images/tokushima/tokushima-dance-4.jpeg",
        position: 25
      },
      {
        src: "./images/tokushima/tokushima-dance-2.mp4",
        type: "video" 
      },
    ],
    days: ["2025-01-07-2"],
  },
  {
    title: "眉山纜車",
    description: "搭纜車登上眉山，在山頂俯瞰德島市景與河川交織，剛好遇到一場細雪，格外難忘。",
    images: [
      {
        src: "./images/tokushima/tokushima-cable-1.jpeg",
        position: 60
      },
      {
        src: "./images/tokushima/tokushima-cable-2.jpeg",
        position: 50 
      },
      {
        src: "./images/tokushima/tokushima-cable-3.jpeg",
        position: 70
      },
      {
        src: "./images/tokushima/tokushima-cable-4.jpeg",
        position: 40
      },
      {
        src: "./images/tokushima/tokushima-snow.mp4",
        type: "video"
      },
    ],
    days: ["2025-01-07-2"],
  },
  {
    title: "渦之道",
    description: "沿著橋體延伸出的「渦之道」，從 45 公尺高空俯瞰海流奔騰，感受壯麗又寧靜的自然景觀。",
    images: [
      {
        src: "./images/tokushima/tokushima-bridge-1.jpeg",
        position: 60
      },
      {
        src: "./images/tokushima/tokushima-bridge-2.jpeg",
        position: 50 
      },
      {
        src: "./images/tokushima/tokushima-bridge-3.jpeg",
        position: 45
      },
      {
        src: "./images/tokushima/tokushima-bridge-4.jpeg",
        position: 10
      },
    ],
    days: ["2025-01-08"],
  },
  {
    title: "Aeon Mall Tokushima",
    description: "德島最熱鬧的購物中心，從超市到美食街一應俱全，也是德島少數能逛到 UNIQLO 的地方。",
    images: [
      {
        src: "./images/tokushima/tokushima-mall-1.jpeg",
        position: 50
      },
      {
        src: "./images/tokushima/tokushima-mall-2.jpeg",
        position: 70
      },
    ],
    days: ["2025-01-08"],
  },
  {
    title: "梅津寺站",
    description: "梅津寺站月台緊鄰瀨戶內海，視野開闊，海天一色的美景近在眼前，尤其黃昏最為迷人，超適合拍照看海，一定要來！",
    images: [
      {
        src: "./images/matsuyama/matsuyama-beach.jpeg",
        position: 70
      },
      {
        src: "./images/matsuyama/matsuyama-station.gif",
        position: 70
      },
      {
        src: "./images/matsuyama/matsuyama-orange-shop.jpeg",
        position: 50
      },
    ],
    days: ["2025-01-09-2"],
  },
  {
    title: "高島屋摩天輪 Kururin",
    description: "高島屋頂樓的摩天輪，可 360 度眺望松山城、道後溫泉與瀨戶內海，是松山的超人氣地標。外國遊客還享半價優惠！",
    images: [
      {
        src: "./images/matsuyama/matsuyama-wheel.jpeg",
        position: 70
      },
    ],
    days: ["2025-01-09-2"],
  },
  {
    title: "松山城",
    description: "坐落山頂的松山城，是現存天守之一。可搭吊椅登城，還能試穿武士盔甲、體驗 VR，沉浸式感受濃濃的日本歷史氛圍。",
    images: [
      {
        src: "./images/matsuyama/matsuyama-catsle-1.jpeg",
        position: 40
      },
      {
        src: "./images/matsuyama/matsuyama-catsle-2.jpeg",
        position: 40
      },
      {
        src: "./images/matsuyama/matsuyama-catsle-3.jpeg",
        position: 40
      },
      {
        src: "./images/matsuyama/matsuyama-catsle-4.jpeg",
        position: 40
      },
      {
        src: "./images/matsuyama/matsuyama-catsle-5.jpeg",
        position: 50
      },
      {
        src: "./images/matsuyama/matsuyama-catsle-6.jpeg",
        position: 50
      },
    ],
    days: ["2025-01-10"],
  },
  {
    title: "道後溫泉本館",
    description: "據說是《神隱少女》取景靈感地，溫泉本館旁有免費泡腳池，走累了剛好放鬆。商店街常可見穿浴衣散步的旅客，充滿溫泉街的獨特氣氛。",
    images: [
      {
        src: "./images/matsuyama/matsuyama-onsen1.jpeg",
        position: "bottom"
      },
      {
        src: "./images/matsuyama/matsuyama-onsen2.jpeg",
        position: 100
      },
      {
        src: "./images/matsuyama/matsuyama-onsen3.jpeg",
        position: 70
      },
      {
        src: "./images/matsuyama/matsuyama-onsen4.jpeg",
        position: "center"
      },
      {
        src: "./images/matsuyama/matsuyama-onsen5.jpeg",
        position: 65
      },
      {
        src: "./images/matsuyama/matsuyama-onsen6.jpeg",
        position: 50
      },
    ],
    days: ["2025-01-10"],
  },
  {
    title: "大街道商店街",
    description: "松山市最熱鬧的拱廊商店街，百貨、伴手禮、雜貨店林立，從名產到手作通通找得到，雨天也能悠閒漫步其中。",
    images: [
      {
        src: "./images/matsuyama/matsuyama-street.jpeg",
        position: 45
      },
    ],
    days: ["2025-01-10"],
  },
  {
    title: "特急いしづち",
    description: "以靈山石鎚山為名的特急列車，行駛於松山與高松之間。銀色車身配藍紋標誌十分搶眼，搭車時記得確認編組，不小心會搭到開往岡山的另一半。",
    images: [
      {
        src: "./images/matsuyama/matsuyama-train-to-takamatsu.jpeg",
        position: 45
      },
    ],
    days: ["2025-01-11-1"],
  },
  {
    title: "JR高松駛",
    description: "四國交通的核心車站，連接松山、德島與本州，也可轉船前往小豆島與直島。現代化建築與海港相鄰，是我們旅程的起點與終點。",
    images: [
      {
        src: "./images/takamatsu/takamatsu-station.jpeg",
        position: 65
      },
    ],
    days: ["2025-01-11-2"],
  },
  {
    title: "高松機場",
    description: "跟印象中完全不同，高松機場超級樸素！只有幾個 check-in 櫃台、四個出境窗口，一個安檢機和登機門，小歸小但效率很高。",
    images: [
      {
        src: "./images/takamatsu/takamatsu-airplane-1.jpg",
        position: 40
      },
      {
        src: "./images/takamatsu/takamatsu-airplane-2.jpeg",
        position: 40
      },
      {
        src: "./images/takamatsu/takamatsu-airplane-3.jpeg",
        position: 50
      },
    ],
    days: ["2025-01-11-2"],
  },
];
  
  export default itineraryData;