const data = [
  {
    name: "Chili Cha Cha 2",
    city: "San Francisco",
    neighborhood: "Mission",
    category: ["Dinner", "Lunch","Asian"],
    items: [
      { item: "Tom Yum" },
      { item: "Tom Kha" },
      { item: "Green Curry" },
      { item: "Pad Thai" },
    ],
    contact: [
      {
        phone: "415-829-2960",
        website: "http://www.chilisf.com/",
        order: "https://chilichacha2ca.smiledining.com/",
      },
    ],
  },
  {
    name: "Golden Flower Vietnamese Restaurant",
    city: "San Francisco",
    neighborhood: "Chinatown",
    category: ["Dinner", "Lunch","Asian"],
    items: [
      {
        item: "#1 Pho (rare slices of steak, well-done brisket, flank, tandon, tripe & beef balls)",
        isVeg: false,
      },
      { item: "Five Spice Chicken w/ Imperial Roll Rice Plate" },
    ],
    contact: [
      {
        phone: "415-433-6469",
        website: "https://goldenflowerrestaurant.com/",
        order: "https://goldenflowerrestaurant.com/order",
      },
    ],
  },
  {
    name: "Naploeon Super Bakery",
    city: "San Francisco",
    neighborhood: "Chinatown",
    category: ["Bakery", "Asian"],
    items: [
      { item: "Dan Tat" },
      { item: "Pineapple Bun" },
      { item: "Paper Wrapped Cake" },
      {
        item: "Hot Dog Bun",
        isVeg: false,
      },
    ],
    contact: [
      {
        directions:
          "https://www.google.com/maps/dir//Napoleon+Super+Bakery,+Stockton+Street,+San+Francisco,+CA/@37.7955931,-122.4784069,12z/data=!3m1!5s0x808580f340f51975:0x2c25ff46f863e1cc!4m8!4m7!1m0!1m5!1m1!1s0x808580f3405420a9:0xd674ad85d2d82e56!2m2!1d-122.408367!2d37.7956138",
      },
    ],
  },
  {
    name: "AA Bakery",
    city: "San Francisco",
    neighborhood: "Chinatown",
    category: ["Bakery", "Asian"],
    items: [
      { item: "Dan Tat" },
      { item: "Pineapple Bun" },
      { item: "Paper Wrapped Cake" },
      {
        item: "Hot Dog Bun",
        isVeg: false,
      },
    ],
    contact: [
      {
        website: "http://aa-bakery.com/",
        directions:
          "https://www.google.com/maps/dir//AA+Bakery+%26+Cafe,+Stockton+Street,+San+Francisco,+CA/@37.7998821,-122.3423055,12z/data=!3m1!5s0x808580f340f51975:0x2c25ff46f863e1cc!4m8!4m7!1m0!1m5!1m1!1s0x808580f3422c88f1:0x21683fb8bf4195fc!2m2!1d-122.4081166!2d37.7956809",
      },
    ],
  },
  {
    name: "Longbridge Pizza",
    city: "San Francisco",
    neighborhood: "Dogpatch",
    category: ["American", "Lunch", "Dinner"],
    items: [
      { item: "Hot N’ Honey Pizza" },
      { item: "Peperoni Pizza" },
      { item: "Margherita Pizza", isVeg: true },
    ],
    contact: [
      {
        phone: "415-829-8999",
        website: "https://www.longbridgepizza.com/",
        order: "https://long-bridge-pizza-company.square.site/",
      },
    ],
  },
  {
    name: "Golden Boy Pizza",
    city: "San Francisco",
    neighborhood: "North Beach",
    category: ["American", "Lunch", "Dinner"],
    items: [{ item: "Garlic and Clam Pizza" }],
    contact: [
      {
        website: "http://www.goldenboypizza.com/",
      },
    ],
  },
  {
    name: "Stella Pastry and Cafe",
    city: "San Francisco",
    neighborhood: "North Beach",
    category: ["Cafe", "Bakery"],
    items: [{ item: "Tiramisu" }],
    contact: [
      {
        directions:
          "https://www.google.com/maps/dir//Stella+Pastry,+Columbus+Avenue,+San+Francisco,+CA/@37.7638585,-122.5022574,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x80858142bbda3f7d:0x4e12e74cf9c2346c!2m2!1d-122.4083382!2d37.799169",
      },
    ],
  },
  {
    name: "San Tung",
    city: "San Francisco",
    neighborhood: "Inner Sunset",
    category: ["Asian", "Lunch", "Dinner"],
    items: [{ item: "Dry Fried Chicken Wings" }],
    contact: [
      {
        phone: "415-242-0828",
        website: "http://www.santung.net/",
        directions:
          "https://www.google.com/maps/dir//San+Tung,+Irving+Street,+San+Francisco,+CA/@37.7641199,-122.502134,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x8085875d83e10257:0x131f778c0e458770!2m2!1d-122.4690045!2d37.7637858",
      },
    ],
  },
  {
    name: "Kevin’s Noodle House",
    city: "San Francisco",
    neighborhood: "Outer Sunset",
    category: ["Asian", "Lunch", "Dinner"],
    items: [{ item: "Pho" }],
    contact: [
      {
        website: "https://kevinsnoodlehouse.com/",
      },
    ],
  },
  {
    name: "Perilla",
    city: "San Francisco",
    neighborhood: "Inner Sunset",
    category: ["Asian", "Lunch", "Dinner"],
    items: [{ item: "Five Spice Chicken Garlic Noodle" }, { item: "Imperial Rolls" }],
    contact: [
      {
        directions:
          "https://www.google.com/maps/dir//Perilla,+Irving+Street,+SF,+CA/@37.7641199,-122.502134,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x8085875daf0a5bdd:0x69ba3c819472d213!2m2!1d-122.4671125!2d37.7641365",
      },
    ],
  },
  {
    name: "Marugame Udon",
    city: "San Francisco",
    neighborhood: "Outer Sunet",
    category: ["Asian", "Lunch", "Dinner"],
    items: [
      { item: "Nikutama" },
      { item: "Mentai Kamatama" },
    ],
    contact: [
      {
        phone: "415-680-1280",
        website: "https://www.marugameudon.com/locations/stonestown/",
        directions:
          "https://www.google.com/maps/dir//3251+20th+Ave,+San+Francisco,+CA+94132/@37.7279079,-122.4794013,17z/data=!3m1!5s0x808f7dba6153b8d7:0x663c92cc6fb407d6!4m8!4m7!1m0!1m5!1m1!1s0x808f7dba526934d7:0x18865e554de03a1!2m2!1d-122.4772126!2d37.7279037",
        order: "https://www.marugameudon.com/locations/#loc-california",
      },
    ],
  },
  {
    name: "Tín Vietnamese Cuisine",
    city: "San Francisco",
    neighborhood: "SoMa",
    category: ["Asian", "Lunch", "Dinner"],
    items: [{ item: "Pho" }],
    contact: [
      {
        website: "https://www.tinsf.com/",
      },
    ],
  },
  {
    name: "Ebisu",
    city: "San Francisco",
    neighborhood: "Inner Sunset",
    category: ["Asian", "Lunch", "Dinner"],
    items: [
      { item: "Cherry Blossom" },
      { item: "49er" },
    ],
    contact: [
      {
        website: "https://ebisusushi.com/",
        order: "https://ebisu.menu11.com/sanfrancisco/order",
        directions:
          "https://www.google.com/maps/dir//Ebisu+Restaurant,+1283+9th+Ave,+San+Francisco,+CA+94122/@37.7637542,-122.5040199,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x8085875ce01473f7:0xaa625c17075c336!2m2!1d-122.4665028!2d37.7644577",
      },
    ],
  },
  {
    name: "San Francisco Hometown Creamery",
    city: "San Francisco",
    neighborhood: "Inner Sunset",
    category: ["Dessert"],
    items: [{ item: "Madagascar Vanilla ice cream" }],
    contact: [
      {
        website: "https://www.sfhometowncreamery.com/",
        directions:
          "https://www.google.com/maps/dir//San+Francisco's+Hometown+Creamery,+9th+Avenue,+San+Francisco,+CA/@37.7643856,-122.5362027,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x8085875c52789845:0x9748a34baf003117!2m2!1d-122.4662262!2d37.7644005",
      },
    ],
  },
  {
    name: "U:Dessert Story",
    city: "San Francisco",
    neighborhood: "Castro",
    category: ["Dessert", "Asian"],
    items: [{ item: "Monster Toast" }],
    contact: [
      {
        website: "https://udessertstory.com/",
        directions: "https://www.google.com/maps/dir//U:Dessert+Story,+16th+Street,+San+Francisco,+CA/@37.7642567,-122.5008165,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x808f7e1c0f3d1f21:0x6ae598016cd9b1fc!2m2!1d-122.4306049!2d37.7642775",
      },
    ],
  },
  {
    name: "Devil's Teeth Baking Company",
    city: "San Francisco",
    neighborhood: "Outer Sunset",
    category: ["American", "Bakery"],
    items: [
      {
        item: "Special Breakfast Sandwich",
        isVeg: false,
      },
    ],
    contact: [
      {
        website: "https://www.devilsteethbakingcompany.com/menu",
        directions:
          "https://www.google.com/maps/dir//Devil's+Teeth+Baking+Company,+Noriega+Street,+San+Francisco,+CA/@37.7531265,-122.5750677,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x8085878fa1412f4b:0xf7e59451c6c631fa!2m2!1d-122.5050278!2d37.7531472",
      },
    ],
  },
  {
    name: "Rolling Out Cafe",
    city: "San Francisco",
    neighborhood: "Outer Sunset",
    category: ["Bakery","Asian"],
    items: [
      {
        item: "Mochissant",
        isVeg: false,
      },
    ],
    contact: [
      {
        website: "https://www.rollingoutcafe.com/",
        directions:
          "https://www.google.com/maps/dir//Rolling+Out+Cafe,+Taraval+Street,+San+Francisco,+CA/@37.7531265,-122.5750677,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x808f7d84c97ee8f5:0x1f9c8fe78c3130b6!2m2!1d-122.4847348!2d37.7427892",
      },
    ],
  },
  {
    name: "Burma Superstar",
    city: "San Francisco",
    neighborhood: "Richmond",
    category: ["Asian", "Lunch", "Dinner"],
    items: [
      { item: "Tea Leaf Salad", isVeg: true },
      { item: "Platha and Dip" },
    ],
    contact: [
      {
        phone: "415-387-2147",
        website: "https://www.burmasuperstar.com/",
        order: "https://direct.chownow.com/order/20280/locations/",
      },
    ],
  },
  {
    name: "Super Star Restaurant",
    city: "San Francisco",
    neighborhood: "Outer Mission",
    category: ["Asian", "Lunch"],
    items: [
      { item: "Pork Chop Hong Kong Style"},
      { item: "Porksilog"},
    ],
    contact: [
      {
        directions: "https://goo.gl/maps/8rfQMGXthQxQeNca6",
      },
    ],
  },
  {
    name: "Han Il Kwan",
    city: "San Francisco",
    neighborhood: "Richmond",
    category: ["Asian", "Lunch", "Dinner"],
    items: [{ item: "Beef Tofu Soup" }],
    contact: [
      {
        directions:
          "https://www.google.com/maps/dir//Han+Il+Kwan,+1802+Balboa+St,+San+Francisco,+CA+94121/@37.7767645,-122.5133073,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x80858712366ca223:0x33fbb2cde7057379!2m2!1d-122.4782853!2d37.7767113",
      },
    ],
  },
  {
    name: "Manna",
    city: "San Francisco",
    neighborhood: "Inner Sunset",
    category: ["Asian", "Lunch", "Dinner"],
    items: [{ item: "Beef Tofu Soup" }],
    contact: [
      {
        directions:
          "https://www.google.com/maps/dir//Manna,+Irving+Street,+San+Francisco,+CA/@37.7767645,-122.5133073,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x8085875db0172dc1:0xaed20b939085cf6a!2m2!1d-122.4672514!2d37.7638913",
      },
    ],
  },
  {
    name: "Hinata",
    city: "San Francisco",
    neighborhood: "Civic Center",
    category: ["Asian", "Lunch", "Dinner"],
    items: [{ item: "Omakase" }],
    contact: [
      {
        website: "https://www.hinatasf.com/",
      },
    ],
  },
  {
    name: "Miss Saigon",
    city: "San Francisco",
    neighborhood: "Downtown",
    category: ["Asian", "Lunch", "Dinner"],
    items: [{ item: "Pho" }],
    contact: [
      {
        website: "http://ordermisssaigon.com/",
        directions:
          "https://www.google.com/maps/dir//Miss+Saigon,+6th+Street,+San+Francisco,+CA/@37.7807596,-122.4785894,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x80858084726a03d9:0xa0faa5fbb8d672fa!2m2!1d-122.4086976!2d37.7807987",
      },
    ],
  },
  {
    name: "Tú lan",
    city: "San Francisco",
    neighborhood: "Downtown",
    category: ["Asian", "Lunch", "Dinner"],
    items: [{ item: "Pho" }],
    contact: [
      {
        order: "https://us.orderspoon.com/tulan-vietnamese-restaurant",
        directions:
          "https://www.google.com/maps/dir//T%C3%BA+Lan,+6th+Street,+San+Francisco,+CA/@37.7818722,-122.4799594,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x80858084ff22d68d:0xb9b0634df179c9d2!2m2!1d-122.4100971!2d37.7818884",
      },
    ],
  },
  {
    name: "Taquería El Farlito",
    city: "San Francisco",
    neighborhood: "Mission",
    category: [ "Mexican", "Lunch", "Dinner"],
    items: [{ item: "Super Burrito" }],
    contact: [
      {
        website: "https://elfarolitosf.com/",
        directions:
          "https://www.google.com/maps/dir//Taqueria+El+Farolito,+24th+Street,+SF,+CA/@37.7528373,-122.4461775,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x808f7e48f251180f:0x4d563cdb72ff9be!2m2!1d-122.4111439!2d37.7527847",
      },
    ],
  },
  {
    name: "Panchita’s Pupuseria & Restaurant",
    city: "San Francisco",
    neighborhood: "Mission",
    category: ["Mexican", "Lunch", "Dinner"],
    items: [
      { item: "Pork Pupusa" },
      { item: "Pork + Cheese  Pupusa" },
    ],
    contact: [
      {
        website: "https://www.panchitaspupuseria.com/",
        directions:
          "https://www.google.com/maps/dir//Panchita's+Pupuser%C3%ADa+%26+Restaurant,+16th+Street,+San+Francisco,+CA/@37.7647848,-122.4566431,13z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x808f7e2251f715f7:0x542a4fc2580e66c!2m2!1d-122.4216237!2d37.76479",
        order:
          "https://www.clover.com/online-ordering/panchitas-restaurant-2-san-francisco/508SZP8BYPCKP",
      },
    ],
  },
  {
    name: "Andytown Coffee Roasters",
    city: "San Francisco",
    neighborhood: "Outer Sunset",
    category: ["Cafe"],
    items: [{ item: "Snowy Plover", isCaffeine: true }],
    contact: [
      {
        website: "https://www.andytownsf.com/",
        order: "https://www.andytownsf.com/online-cafe-orders",
      },
    ],
  },
  {
    name: "Just For You Cafe",
    city: "San Francisco",
    neighborhood: "Dogpatch",
    category: ["Brunch", "American", "Lunch"],
    items: [
      { item: "Crabby Bennie" },
      { item: "Beignets" },
    ],
    contact: [
      {
        website: "https://www.justforyoucafe.com/",
        phone: "415-647-3303",
      },
    ],
  },
  {
    name: "Zazie",
    city: "San Francisco",
    neighborhood: "Ashbury Heights",
    category: ["Brunch", "American", "Lunch"],
    items: [{ item: "Florentine Benedict with Home Fries" }],
    contact: [
      {
        website: "https://www.zaziesf.com/",
      },
    ],
  },
  {
    name: "Early to Rise",
    city: "San Francisco",
    neighborhood: "Nob Hill",
    category: ["Brunch", "American", "Lunch"],
    items: [
      { item: "Strawberry Pancakes" },
      { item: "Bagel + Smoked Salmon" },
    ],
    contact: [
      {
        website: "https://www.earlytorisesf.com/",
      },
    ],
  },
  {
    name: "Wise Sons Jewish Delicatessen",
    city: "San Francisco",
    neighborhood: "Mission",
    category: ["Brunch", "Lunch"],
    items: [{ item: "Classic Smoked Salmon Bagel Sandwich" }],
    contact: [
      {
        website: "https://www.wisesonsdeli.com/location/24thstreet/",
        order: "https://order.wisesonsdeli.com/",
      },
    ],
  },
  {
    name: "Daily Driver",
    city: "San Francisco",
    neighborhood: "Dogpatch",
    category: ["Bakery", "Cafe", "Lunch"],
    items: [
      { item: "Bagel + Cultured Butter" },
      { item: "Bagel + Gravlox" },
    ],
    contact: [
      {
        website: "https://dailydriver.com/",
        order: "https://dailydriver.com/order/",
      },
    ],
  },
  {
    name: "Ariscault",
    city: "San Francisco",
    neighborhood: "Richmond",
    category: ["Bakery", "American"],
    items: [
      { item: "Croissant" },
      { item: "Chocolate Chip Cookie" },
    ],
    contact: [
      {
        website: "https://arsicault-bakery.com/home",
      },
    ],
  },
  {
    name: "Home Cafe",
    city: "San Francisco",
    neighborhood: "Inner Sunset",
    category: ["Cafe"],
    items: [{ item: "Latte", isCaffeine: true }],
    contact: [
      {
        website: "https://homecoffeesf.com/",
      },
    ],
  },
  {
    name: "Neighbor Bakehouse",
    city: "San Francisco",
    neighborhood: "Dogpatch",
    category: ["Bakery"],
    items: [
      { item: "Croissant" },
      { item: "Pistachio Blackberry Twice-baked" },
      { item: "Ginger Pull-apart" },
      { item: "Creamy Mushroom Puff Hand Pie" },
      { item: "Sourdough Country Loaf" },
    ],
    contact: [
      {
        website: "https://www.neighborsf.com/",
        order: "https://direct.chownow.com/order/28481/locations/42152",
      },
    ],
  },
  {
    name: "Barebottle Brewing Company",
    city: "San Francisco",
    neighborhood: "Bernal Heights",
    category: ["Brewery"],
    items: [],
    contact: [
      {
        website: "https://www.barebottle.com/",
      },
    ],
  },
  {
    name: "Southern Pacific Brewing",
    city: "San Francisco",
    neighborhood: "Mission",
    category: ["Brewery"],
    items: [],
    contact: [
      {
        website: "https://www.southernpacificbrewing.com/",
      },
    ],
  },
  {
    name: "Harmonic Brewing",
    city: "San Francisco",
    neighborhood: "Dogpatch",
    items: [],
    contact: [
      {
        website: "http://harmonicbrewing.com/",
      },
    ],
  },
  {
    name: "Mikkeller Bar SF",
    city: "San Francisco",
    neighborhood: "Downtown",
    category: ["Brewery"],
    items: [],
    contact: [
      {
        website: "https://mikkeller.com/locations/mikkeller-bar-san-francisco",
      },
    ],
  },
  {
    name: "Seven Stills Outer Sunset Taproom",
    city: "San Francisco",
    neighborhood: "Outer Sunset",
    category: ["Brewery"],
    items: [],
    contact: [
      {
        website: "https://www.sevenstills.com/outer-sunset-taproom",
      },
    ],
  },
  {
    name: "Sunset Reservoir Brewing Company",
    city: "San Francisco",
    neighborhood: "Outer Sunset",
    category: ["Brewery", "American"],
    items: [],
    contact: [
      {
        website: "http://sunsetbeersf.com/",
      },
    ],
  },
  {
    name: "Spices 3",
    city: "Oakland",
    neighborhood: "Chinatown",
    category: ["Asian", "Lunch", "Dinner"],
    items: [
      { item: "Eggplant in Garlic", isVeg: true },
      { item: "Dices String Beans", isVeg: true },
      { item: "Spicy Fried Rice" },
    ],
    contact: [
      {
        website: "https://www.spices3-oakland.com/",
        directions:
          "https://www.google.com/maps/dir//Spices+3+%E8%BE%A3%E5%A6%B9%E5%AD%90,+12th+Street,+Oakland,+CA/@37.8022926,-122.3400862,12z/data=!3m1!5s0x808580f340f51975:0x2c25ff46f863e1cc!4m8!4m7!1m0!1m5!1m1!1s0x808f80b43ce2a90d:0x95429d5e7dd07c29!2m2!1d-122.2700345!2d37.8023157",
      },
    ],
  },
  {
    name: "Shan Dong",
    city: "Oakland",
    neighborhood: "Chinatown",
    category: ["Asian","Lunch", "Dinner"],
    items: [
      { item: "Special Shan Dong Dumplings" },
      { item: "Beef Chow Fun" },
    ],
    contact: [
      {
        website: "http://shandongoakland.com/",
        directions:
          "https://www.google.com/maps/dir//Shan+Dong,+10th+Street,+Oakland,+CA/@37.8022926,-122.3400862,12z/data=!3m1!5s0x808580f340f51975:0x2c25ff46f863e1cc!4m8!4m7!1m0!1m5!1m1!1s0x808f80b5c6d4610d:0x410ae1ade597863f!2m2!1d-122.2699918!2d37.8006064",
      },
    ],
  },
  {
    name: "Gum Kuo",
    city: "Oakland",
    neighborhood: "Chinatown",
    category: ["Asian","Lunch", "Dinner"],
    items: [
      { item: "Roast Pork" },
      { item: "Egg White and Dried Scallop Fried Rice" },
      { item: "Minced Pork Porridge" },
    ],
    contact: [
      {
        website: "https://www.gumkuorestaurant.com/",
        directions:
          "https://www.google.com/maps/dir//Gum+Kuo,+Ninth+Street,+Oakland,+CA/@37.8007105,-122.3415969,12z/data=!3m2!4b1!5s0x808580f340f51975:0x2c25ff46f863e1cc!4m8!4m7!1m0!1m5!1m1!1s0x808f80b67f1b9b13:0x1b52a04754542816!2m2!1d-122.271557!2d37.8007312",
      },
    ],
  },
  {
    name: "Vien Huong",
    city: "Oakland",
    neighborhood: "Chinatown",
    category: ["Asian","Lunch", "Dinner"],
    items: [{ item: "Chew Jew Noodle" }],
    contact: [
      {
        directions:
          "https://www.google.com/maps/dir//Vien+Huong+Restaurant,+Franklin+Street,+Oakland,+CA/@37.7992787,-122.3426945,12z/data=!3m2!4b1!5s0x808580f340f51975:0x2c25ff46f863e1cc!4m8!4m7!1m0!1m5!1m1!1s0x808f80b6405e6627:0x67c585ae1586ffa9!2m2!1d-122.2726506!2d37.7992977",
      },
    ],
  },
  {
    name: "Tian Jin Dumplings",
    city: "Oakland",
    neighborhood: "Chinatown",
    category: ["Asian","Lunch"],
    items: [
      { item: "Egg Crepe" },
      { item: "Soy Milk" },
    ],
    contact: [
      {
        directions:
          "https://www.google.com/maps/dir//Tian+Jin+Dumplings,+Franklin+Street,+Oakland,+CA/@37.8009505,-122.3419852,12z/data=!3m1!5s0x808580f340f51975:0x2c25ff46f863e1cc!4m8!4m7!1m0!1m5!1m1!1s0x808f80b69215195d:0x4e98fcd9fcf15d7f!2m2!1d-122.27194!2d37.8009624",
      },
    ],
  },
  {
    name: "Tay Ho",
    city: "Oakland",
    neighborhood: "Chinatown",
    category: ["Asian","Lunch", "Dinner"],
    items: [
      { item: "Spring Rolls" },
      { item: "Obama Bun Cha" },
    ],
    contact: [
      {
        website: "https://tayhooakland.com/",
        directions:
          "https://www.google.com/maps/dir//Tay+Ho+Oakland+Restaurant+%26+Bar,+12th+Street,+Oakland,+CA/@37.8060488,-122.3379589,12z/data=!3m1!5s0x808580f340f51975:0x2c25ff46f863e1cc!4m8!4m7!1m0!1m5!1m1!1s0x808f80b4487c7adb:0x4f8db75ed71f9817!2m2!1d-122.2694082!2d37.8020532",
      },
    ],
  },
  {
    name: "Napoleon Super Bakery",
    city: "Oakland",
    neighborhood: "Chinatown",
    category: ["Bakery","Asian"],
    items: [
      { item: "Dan Tat" },
      { item: "Pineapple Bun" },
      { item: "Paper Wrapped Cake" },
      {
        item: "Hot Dog Bun",
        isVeg: false,
      },
    ],
    contact: [
      {
        directions:
          "https://www.google.com/maps/dir//Napoleon+Super+Bakery,+Franklin+Street,+Oakland,+CA/@37.7992787,-122.3426945,12z/data=!3m1!5s0x808580f340f51975:0x2c25ff46f863e1cc!4m8!4m7!1m0!1m5!1m1!1s0x808f80b66f34d699:0xc0761441f85728e9!2m2!1d-122.2722656!2d37.7999028",
      },
    ],
  },
  {
    name: "Aburaya",
    city: "Oakland",
    neighborhood: "Downtown",
    category: ["Asian","Lunch", "Dinner"],
    items: [{ item: "Garlic Miso Fried Chicken" }],
    contact: [
      {
        website: "https://aburayaoakland.com/",
        order: "https://aburayaoakland.com/aburaya/order",
        directions:
          "https://www.google.com/maps/dir//Aburaya,+17th+Street,+Oakland,+CA/@37.8059992,-122.3376314,12z/data=!3m2!4b1!5s0x808580f340f51975:0x2c25ff46f863e1cc!4m8!4m7!1m0!1m5!1m1!1s0x808f80b395f50cf7:0x5b41ffb720148af5!2m2!1d-122.2675915!2d37.8060199",
      },
    ],
  },
  {
    name: "Lion Dance Cafe ⓥ",
    city: "Oakland",
    neighborhood: "Downtown",
    category: ["Asian","Lunch", "Dinner"],
    items: [
      { item: "Mushroom Goreng", isVegan: true },
      { item: "Laksa", isVegan: true },
    ],
    contact: [
      {
        website: "https://www.liondancecafe.com/",
        order: "https://lion-dance-cafe-llc.square.site/",
        directions:
          "https://www.google.com/maps/dir//Lion+Dance+Caf%C3%A9,+17th+Street,+Oakland,+CA/@37.8059992,-122.3376314,12z/data=!3m1!5s0x808580f340f51975:0x2c25ff46f863e1cc!4m8!4m7!1m0!1m5!1m1!1s0x808f817f59aa5fa9:0xc6930eb94f2d3188!2m2!1d-122.267932!2d37.8060489",
      },
    ],
  },
  {
    name: "Firebrand Artisan Breads",
    city: "Oakland",
    neighborhood: "Downtown",
    category: ["Bakery", "Lunch"],
    items: [
      { item: "Latte", isCaffeine: true },
      { item: "Croissant" },
      { item: "Han & Cheese Croissant" },
    ],
    contact: [
      {
        website: "https://www.firebrandbread.com/",
        order: "https://firebrand-artisan-breads.square.site/",
      },
    ],
  },
  {
    name: "Kamdesh Afghan Cuisine",
    city: "Oakland",
    neighborhood: "Downtown",
    category: ["Lunch", "Dinner"],
    items: [
      { item: "Mantoo" },
      { item: "Bolani" },
      { item: "Eggplant Borani", isVeg: true },
    ],
    contact: [
      {
        website: "http://orderkamdeshafghankababhouse.com/",
        order:
          "https://themenustar2.com/webspace/menus.php?code=orderkamdeshafghankababhouse.com",
      },
    ],
  },
  {
    name: "Little Giant Ice Cream",
    city: "Oakland",
    neighborhood: "Downtown",
    category: ["Dessert"],
    items: [{ item: "Bicycle Coffee" }],
    contact: [
      {
        website: "https://www.littlegianticecream.com/",
      },
    ],
  },
  {
    name: "Jong Ga House",
    city: "Oakland",
    neighborhood: "Lakeshore",
    category: ["Asian", "Lunch", "Dinner"],
    items: [
      { item: "Beef Tofu Soup" },
      { item: "AYCE Korean BBQ" },
    ],
    contact: [
      {
        website: "https://www.jonggahouse.com/",
        directions:
          "https://www.google.com/maps/dir//Jong+Ga+House,+Grand+Avenue,+Oakland,+CA/@37.8091237,-122.3250149,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x808f874f44f5f5ab:0xef5b06524b8dc754!2m2!1d-122.2549881!2d37.8090546",
      },
    ],
  },
  {
    name: "Pyeong Chang Tofu House",
    city: "Oakland",
    neighborhood: "Temescal",
    category: ["Asian", "Lunch", "Dinner"],
    items: [{ item: "Beef Tofu Soup" }],
    contact: [
      {
        website: "https://www.pctofu.com/",
        directions:
          "https://www.google.com/maps/dir//Pyeong+Chang+Tofu+House+Oakland+%EC%98%A4%ED%81%B4%EB%9E%9C%EB%93%9C+%ED%8F%89%EC%B0%BD+%EC%88%9C%EB%91%90%EB%B6%80,+Telegraph+Avenue,+Oakland,+CA/@37.8091237,-122.3250149,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x80857de188d10765:0x7fd9fe7483bb5e5a!2m2!1d-122.26335!2d37.8344778",
      },
    ],
  },
  {
    name: "Cholita Linda",
    city: "Oakland",
    neighborhood: "Temescal",
    category: ["Lunch", "Dinner"],
    items: [{ item: "Fish Tacos" }],
    contact: [
      {
        website: "https://cholitalinda.com/",
        directions:
          "https://www.google.com/maps/dir//Cholita+Linda,+Telegraph+Avenue,+Oakland,+CA/@37.827965,-122.3201026,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x80857de1a63bee9d:0x4bc65901361343a!2m2!1d-122.2627565!2d37.8361592",
      },
    ],
  },
  {
    name: "Bakesale Betty",
    city: "Oakland",
    neighborhood: "Temescal",
    category: ["Lunch"],
    items: [
      { item: "Buttermilk Fried Chicken and Coleslaw Sandwich" },
    ],
    contact: [
      {
        website: "https://cholitalinda.com/",
        directions:
          "https://www.google.com/maps/dir//Bakesale+Betty,+Telegraph+Avenue,+Oakland,+CA/@37.8361385,-122.3327964,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x80857dedfca72801:0xc9891af5696244bc!2m2!1d-122.2621299!2d37.8370658",
      },
    ],
  },
  {
    name: "Burma Superstar",
    city: "Oakland",
    neighborhood: "Temescal",
    category: ["Asian", "Lunch", "Dinner"],
    items: [
      { item: "Tea Leaf Salad", isVeg: true },
      { item: "Platha and Dip" },
    ],
    contact: [
      {
        website: "https://www.burmasuperstar.com/",
        order: "https://direct.chownow.com/order/20280/locations/",
      },
    ],
  },
  {
    name: "Fenton’s Creamery",
    city: "Oakland",
    neighborhood: "Temescal",
    category: ["Dessert", "American"],
    items: [{ item: "Old Fashion Sundae" }],
    contact: [
      {
        website: "https://www.fentonscreamery.com/",
        directions:
          "https://www.google.com/maps/dir//Fentons+Creamery,+Piedmont+Avenue,+Oakland,+CA/@37.827965,-122.3201026,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x80857df6c43cdebb:0x91f2ea4405beec30!2m2!1d-122.2500627!2d37.8279857",
      },
    ],
  },
  {
    name: "Homeroom",
    city: "Oakland",
    neighborhood: "Temescal",
    category: ["American", "Lunch", "Dinner"],
    items: [
      { item: "Garlicky Bacon Mac" },
      { item: "Gilroy Garlic Mac" },
    ],
    contact: [
      {
        website: "https://homeroom510.com/menu",
        directions:
          "https://www.google.com/maps/dir//Homeroom,+40th+Street,+Oakland,+CA/@37.8370134,-122.3320389,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x80857dfc830c9779:0x86db31d9371af332!2m2!1d-122.2599287!2d37.8285946",
      },
    ],
  },
  {
    name: "Kingston 11 Cuisine",
    city: "Oakland",
    neighborhood: "Uptown",
    category: ["Dinner"],
    items: [
      { item: "Jerk Chicken" },
      { item: "Plantains" },
    ],
    contact: [
      {
        website: "https://kingston11eats.com/",
        directions:
          "https://www.google.com/maps/dir//Kingston+11+Cuisine,+Telegraph+Avenue,+Oakland,+CA/@37.8285739,-122.3299686,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x808f80ac5ea61f5f:0x7c07a5611a873f31!2m2!1d-122.26858!2d37.81229",
      },
    ],
  },
  {
    name: "Arizmendi",
    city: "Oakland",
    neighborhood: "Lakeshore",
    category: ["Bakery"],
    items: [
      { item: "Pizza", isVeg: true },
      { item: "Cranberry Scone", isVeg: true },
    ],
    contact: [
      {
        website: "https://www.arizmendibakery.com/",
        directions:
          "https://www.google.com/maps/dir//Arizmendi+Bakery,+Lakeshore+Avenue,+Oakland,+CA/@37.8106761,-122.3148399,12z/data=!3m2!4b1!5s0x808580f340f51975:0x2c25ff46f863e1cc!4m8!4m7!1m0!1m5!1m1!1s0x808f874190045807:0x2eeb5a2233b2e795!2m2!1d-122.2447939!2d37.8106856",
      },
    ],
  },
  {
    name: "Bare Kunckle Pizza",
    city: "Oakland",
    neighborhood: "Downtown",
    category: ["Dinner", "American"],
    items: [{ item: "Mushroom Impossible", isVegan: true }],
    contact: [
      {
        website: "https://bareknucklepizza.com/",
      },
    ],
  },
  {
    name: "Tierra Mia Coffee",
    city: "Oakland",
    neighborhood: "Downtown",
    category: ["Cafe"],
    items: [{ item: "Chai Latte", isCaffeine: true }],
    contact: [
      {
        website: "http://www.tierramiacoffee.com/",
      },
    ],
  },
  {
    name: "Modern Coffee",
    city: "Oakland",
    neighborhood: "Downtown",
    category: ["Cafe"],
    items: [{ item: "Latte", isCaffeine: true }],
    contact: [
      {
        website: "http://moderncoffeeoakland.com/",
      },
    ],
  },
  {
    name: "Timeless Coffee ⓥ",
    city: "Oakland",
    neighborhood: "Downtown",
    category: ["Cafe"],
    items: [{ item: "Blueberry Donut", isVegan: true }],
    contact: [
      {
        website: "https://timelesscoffee.com/",
        directions:
          "https://www.google.com/maps/dir//Timeless+Coffee,+Webster+Street,+Oakland,+CA/@37.8058803,-122.3371005,12z/data=!3m2!4b1!5s0x80857e735be18845:0x8ccf98710399e5dd!4m8!4m7!1m0!1m5!1m1!1s0x808f81ca4cba39bd:0x6beae6b2d4009e0a!2m2!1d-122.2671504!2d37.8057538",
      },
    ],
  },
  {
    name: "Drake’s Dealership",
    city: "Oakland",
    neighborhood: "Downtown",
    category: ["Bar", "Dinner"],
    items: [{ item: "Pizza" }],
    contact: [
      {
        website: "https://drinkdrakes.com/places/dealership/",
      },
    ],
  },
  {
    name: "Bar Shiru",
    city: "Oakland",
    neighborhood: "Downtown",
    category: ["Bar"],
    items: [],
    contact: [
      {
        website: "https://www.barshiru.com/",
        directions:
          "https://www.google.com/maps/dir//Bar+Shiru,+Telegraph+Avenue,+Oakland,+CA/@37.8122693,-122.3386199,12z/data=!3m1!5s0x80857e735be18845:0x8ccf98710399e5dd!4m8!4m7!1m0!1m5!1m1!1s0x808f81fafcc1c5ef:0x19e6e77cf4dbaea!2m2!1d-122.2706835!2d37.8063737",
      },
    ],
  },
  {
    name: "The Kon-Tiki",
    city: "Oakland",
    neighborhood: "Downtown",
    category: ["Bar"],
    items: [],
    contact: [
      {
        website: "hhttps://www.thekon-tikioakland.com//",
        directions:
          "https://www.google.com/maps/dir//The+Kon-Tiki,+14th+Street,+Oakland,+CA/@37.8031524,-122.3386667,12z/data=!3m2!4b1!5s0x80857e735be18845:0x8ccf98710399e5dd!4m8!4m7!1m0!1m5!1m1!1s0x808f80b4641b3b2d:0x51201d0f4f68e6ff!2m2!1d-122.2686474!2d37.8031992",
      },
    ],
  },
  {
    name: "Yin Ji",
    city: "Manhattan",
    neighborhood: "Chinatown",
    category: ["Asian", "Lunch", "Dinner"],
    items: [
      { item: "Shrimp Rice Roll" },
      { item: "Beef Rice Roll" },
      { item: "Pork and Preserved Egg Congee" },
      { item: "Dough Stick", isVeg: true },
      { item: "HK Style Milk Tea" },
    ],
    contact: [
      {
        website: "https://yinjiusa.com/",
        directions:
          "https://www.google.com/maps/dir//Yin+Ji+Chang+Fen,+91+Bayard+St,+New+York,+NY+10013/@40.7158015,-74.0344028,13z/data=!3m1!5s0x89c25a2718a74be5:0x394bba93b8c2c0a4!4m9!4m8!1m0!1m5!1m1!1s0x89c25b0cae7d21cd:0x7f601d520ae50d2d!2m2!1d-73.9992701!2d40.7157971!3e0",
      },
    ],
  },
  {
    name: "Bodhi ⓥ",
    city: "Manhattan",
    neighborhood: "Chinatown",
    category: ["Asian", "Lunch", "Dinner"],
    items: [
      { item: "Sticky Rice Shiumai", isVegan: true },
      { item: "Veg Meat Rice Roll", isVegan: true },
      { item: "Steamed Veg Shrimp Dumpling", isVegan: true },
      { item: "Veg Jelly Fish", isVegan: true },
    ],
    contact: [
      { phone: "212-233-2921", website: "https://buddhavegetarian.com/" },
    ],
  },
  {
    name: "Joe’s Steam Rice Roll",
    city: "Manhattan",
    neighborhood: "Chinatown",
    category: ["Asian", "Lunch", "Dinner"],
    items: [
      { item: "Joe’s Signature Steam Rice Roll" },
      { item: "Curry Fish Ball" },
    ],
    contact: [
      {
        directions:
          "https://www.google.com/maps/dir/37.7074058,-122.4127362/joe's+steam+rice+roll+nyc/@33.8884054,-134.3360527,3z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x89c259ac48704171:0x8e776a0dff9c17ca!2m2!1d-74.0008922!2d40.7188844",
      },
    ],
  },
  {
    name: "Golden Unicorn Dim Sum",
    city: "Manhattan",
    neighborhood: "Chinatown",
    category: ["Asian", "Lunch"],
    items: [
      { item: "Ha Gao (Shrimp Dumpling)" },
      { item: "Shumai (Pork Dumpling)" },
      { item: "Bean Curd Skin Rolls" },
      { item: "Gai Gurk (Chicken Feet)" },
      { item: "Dan Tat (Egg Tart)" },
    ],
    contact: [
      {
        website: "https://www.goldenunicornrestaurant.com/",
        order: "https://order.online/sl/GoldenUnicorn-24279",
      },
    ],
  },
  {
    name: "Tasty Dumpling",
    city: "Manhattan",
    neighborhood: "Chinatown",
    category: ["Asian", "Lunch", "Dinner"],
    items: [{ item: "Pan Fried Pork Dumpling" }],
    contact: [
      {
        directions:
          "https://www.google.com/maps/dir//tasty+dumpling+nyc/@33.8884054,-134.3335494,3z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89c25a26dfa3a383:0x65e91ab05b8238c0!2m2!1d-73.9995503!2d40.7149266",
      },
    ],
  },
  {
    name: "Wah Fung No. 1",
    city: "Manhattan",
    neighborhood: "Chinatown",
    category: ["Asian", "Lunch", "Dinner"],
    items: [{ item: "Cha Sui + Rice" }],
    contact: [
      {
        directions:
          "https://www.google.com/maps/dir//Wah+Fung+Fast+Food,+Chrystie+Street,+New+York,+NY/@40.7173136,-74.0294843,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89c25987ffa99e09:0xfbce3ee954c0d58a!2m2!1d-73.9944521!2d40.7173132",
      },
    ],
  },
  {
    name: "Congee Village",
    city: "Manhattan",
    neighborhood: "Chinatown",
    category: ["Asian", "Lunch", "Dinner"],
    items: [{ item: "Congee" }],
    contact: [
      {
        directions:
          "https://www.google.com/maps/dir//Congee+Village,+Allen+Street,+New+York,+NY/@40.7186537,-74.0253734,13z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x89c25987185dccc7:0x337115f296625e4f!2m2!1d-73.990354!2d40.718659",
      },
    ],
  },
  {
    name: "Tai Pan Bakery",
    city: "Manhattan",
    neighborhood: "Chinatown",
    category: ["Bakery", "Asian"],
    items: [
      { item: "Dan Tat" },
      { item: "Portuguese Egg Tart" },
    ],
    contact: [
      {
        phone: "212-732-2222",
        website: "http://taipanbakery.com/",
      },
    ],
  },
  {
    name: "Saigon Shack",
    city: "Manhattan",
    neighborhood: "West Village",
    category: ["Asian", "Lunch", "Dinner"],
    items: [
      { item: "S.S. Classic Bánh Mì" },
      { item: "Vietnamese Ice Coffee", isCaffeine: true },
    ],
    contact: [
      { phone: "212-228-0588", website: "https://www.saigonshack.com/" },
    ],
  },
  {
    name: "Los Tacos No 1.",
    city: "Manhattan",
    neighborhood: "Chelsea Market",
    category: ["Lunch", "Dinner"],
    items: [
      { item: "Adobada Quesadilla" },
      { item: "Carne Asada Quesadilla" },
    ],
    contact: [
      {
        website: "https://www.lostacos1.com/",
        order: "https://www.lostacos1.com/order-now/",
      },
    ],
  },
  {
    name: "Raku",
    city: "Manhattan",
    neighborhood: "Soho",
    category: ["Asian", "Lunch", "Dinner"],
    items: [{ item: "Sansai Hot Udon", isVeg: true }],
    contact: [
      {
        website: "https://rakunyc.com/",
        order: "https://order.online/store/raku-34942/en-US",
      },
    ],
  },
  {
    name: "Russ & Daughters",
    city: "Manhattan",
    neighborhood: "Lower East Side",
    category: ["Bakery", "Lunch"],
    items: [
      { item: "Bagel with Cream Cheese" },
      { item: "Bagel with Cream Cheese and Lox" },
    ],
    contact: [
      {
        phone: "212-475-4880",
        website: "https://www.russanddaughters.com/",
        order: "https://www.toasttab.com/russanddaughterscafe/v3/",
      },
    ],
  },
  {
    name: "Joe’s Pizza",
    city: "Manhattan",
    neighborhood: "Financial District",
    category: [ "American", "Lunch", "Dinner", "Late Night"],
    items: [
      { item: "Cheese Slice", isVeg: true },
      { item: "Peperoni Slice" },
    ],
    contact: [{ website: "http://www.joespizzanyc.com/" }],
  },
  {
    name: "Prince Street Pizza",
    city: "Manhattan",
    neighborhood: "Soho",
    category: ["American", "Lunch", "Dinner","Late Night"],
    items: [{ item: "Peperoni Square" }],
    contact: [
      {
        website: "https://www.eatprincestreetpizza.com/",
        order:
          "https://www.toasttab.com/prince-street-pizza-ny-27-prince-st/v3/",
      },
    ],
  },
  {
    name: "Scarr’s Pizza",
    city: "Manhattan",
    neighborhood: "Lower East Side",
    category: ["American", "Lunch", "Dinner","Late Night"],
    items: [
      { item: "Grandma Pie" },
      { item: "Hotboi" },
    ],
    contact: [
      { phone: "212-334-3481", website: "hhttps://www.scarrspizza.com/" },
    ],
  },
  {
    name: "Mala Project",
    city: "Manhattan",
    neighborhood: "East Village",
    category: ["Asian", "Lunch", "Dinner"],
    items: [{ item: "Dry Pot (Mild)" }],
    contact: [{ website: "https://www.malaproject.nyc/" }],
  },
  {
    name: "Love Mama",
    city: "Manhattan",
    neighborhood: "East Village",
    category: ["Asian", "Lunch", "Dinner"],
    items: [{ item: "Rendang Nasi Lemak" }],
    contact: [
      {
        website: "https://lovemamanyc.com/",
        order: "https://simplemenu.com/simplemenu/menus/78/71/lovemama_106",
      },
    ],
  },
  {
    name: "Ha Noi House",
    city: "Manhattan",
    neighborhood: "East Village",
    category: ["Asian", "Lunch", "Dinner"],
    items: [{ item: "Bone Marrow Pho" }],
    contact: [
      {
        directions:
          "https://www.google.com/maps/dir//Hanoi+House,+Saint+Marks+Place,+New+York,+NY/@40.7270032,-74.018655,13z/data=!3m1!5s0x89c25a26dc8f2331:0x60cc500167b26e03!4m8!4m7!1m0!1m5!1m1!1s0x89c2599d668a6c05:0x1e72d38c83ee191e!2m2!1d-73.9835497!2d40.7270085",
        website: "https://www.hanoihousenyc.com/",
      },
    ],
  },
  {
    name: "Junior’s Restaurant and Bakery",
    city: "Manhattan",
    neighborhood: "Times Square",
    category: ["American", "Lunch", "Dinner"],
    items: [{ item: "Original NY Plain Cheesecake" }],
    contact: [
      {
        order: "https://www.juniorscheesecake.com/all-items/",
        website:
          "https://www.juniorscheesecake.com/blog/restaurants/times-square/",
      },
    ],
  },
  {
    name: "Dominique Ansel",
    city: "Manhattan",
    neighborhood: "Soho",
    category: ["Bakery"],
    items: [{ item: "Brown Sugar DKA" }],
    contact: [
      {
        website: "https://www.dominiqueansel.com/",
      },
    ],
  },
  {
    name: "Kona Coffee",
    city: "Manhattan",
    neighborhood: "East Village",
    category: ["Cafe"],
    items: [{ item: "Hawaiian Latte", isCaffeine: true }],
    contact: [
      {
        website: "https://www.konacoffee.nyc/",
      },
    ],
  },
  {
    name: "Abraco",
    city: "Manhattan",
    neighborhood: "East Village",
    items: [{ item: "Sparkling Espresso Cream", isCaffeine: true }],
    category: ["Cafe"],
    contact: [
      {
        website: "https://www.abraconyc.com/",
        order: "https://www.abraconyc.com/s/order",
      },
    ],
  },
  {
    name: "7th Street Burger",
    city: "Manhattan",
    neighborhood: "East Village",
    category: ["American", "Dinner", "Late Night"],
    items: [{ item: "Cheeseburger" }],
    contact: [
      {
        order:
          "https://www.toasttab.com/7th-street-burger-91-e-7th-st/v3/?mode=fulfillment",
        website: "https://www.7thstreetburger.com/",
      },
    ],
  },
  {
    name: "Hidden Lane Bar",
    city: "Manhattan",
    neighborhood: "East Village",
    category: ["Bar"],
    items: [{ item: "Jim Collins", isAlcohol: true }],
    contact: [
      { phone: "201-749-1876", website: "https://www.hiddenlanebar.com/" },
    ],
  },
  {
    name: "Mr. Purple",
    city: "Manhattan",
    neighborhood: "Lower East Side",
    category: ["Bar"],
    items: [{ item: "Cider-car", isAlcohol: true }],
    contact: [
      { phone: "212-237-1790", website: "https://www.mrpurplenyc.com/" },
    ],
  },
  {
    name: "Attaboy",
    city: "Manhattan",
    neighborhood: "Lower East Side",
    category: ["Bar"],
    items: [{ item: "Custom Drink at the Bar", isAlcohol: true }],
    contact: [{ website: "http://attaboy.us/nyc/" }],
  },
  {
    name: "Cooper’s Craft and Kitchen",
    city: "Manhattan",
    neighborhood: "East Village",
    category: ["Bar"],
    items: [{ item: "Hudson North Standard Cider", isAlcohol: true }],
    contact: [{ website: "http://coopersnyc.com/" }],
  },
  {
    name: "Clinton Hall",
    city: "Manhattan",
    neighborhood: "Financial District",
    category: ["Bar"],
    items: [
      { item: "Flyjack IPA", isAlcohol: true },
      { item: "Original Blend Cider", isAlcohol: true },
    ],
    contact: [
      { phone: "212-363-6000", website: "https://clintonhallny.com/fidi/" },
    ],
  },
  {
    name: "Barn Joo",
    city: "Manhattan",
    neighborhood: "Union Square",
    category: ["Bar"],
    items: [
      { item: "Charlie Collins", isAlcohol: true },
      { item: "Truffle Fries", isVeg: true },
    ],
    contact: [{ website: "https://www.barnjoo.com/" }],
  },
  {
    name: "Dead Rabbit",
    city: "Manhattan",
    neighborhood: "Financial District",
    category: ["Bar", "Dinner"],
    items: [
      { item: "Dead Rabbit Dark Ale", isAlcohol: true},
      { item: "Brooklyn Lager", isAlcohol: true},
      { item: "Tuna Tartare Tacos" , isAlcohol: true},
      { item: "Crispy Fish and Chips" , isAlcohol: true},
    ],
    contact: [{ website: "https://www.deadrabbitnyc.com/" }],
  },
  {
    name: "Loreley Beer Garden",
    city: "Manhattan",
    neighborhood: "Bowery",
    category: ["Bar"],
    items: [
      { item: "Bourbon Apple Cider", isAlcohol: true },
      { item: "Braufactum Progusta IPA", isAlcohol: true },
    ],
    contact: [
      {
        website: "https://www.loreleynyc.com/",
        order:
          "https://www.loreleynyc.com/online-ordering/loreley-beer-garden/menu/order-settings",
      },
    ],
  },
  {
    name: "Pocha 32",
    city: "Manhattan",
    neighborhood: "Korea Town",
    category: ["Bar", "Dinner", "Late Night"],
    items: [
      { item: "Watermelon Soju", isAlcohol: true },
      { item: "Pineapple Soju", isAlcohol: true },
      { item: "Honeydew Soju", isAlcohol: true },
    ],
    contact: [
      {
        website: "https://www.pocha32.com/",
        order: "https://www.makeitbutter.com/pocha/main",
      },
    ],
  },
  {
    name: "Nong’s Khao Man Gai",
    city: "Portland",
    neighborhood: "South East Side",
    category: ["Asian", "Lunch", "Dinner"],
    items: [
      { item: "Khao Man Gai (Thai Chicken & Rice)" },
      { item: "Khao Kha Muu (Pork and Rice)" },
    ],
    contact: [
      {
        website: "https://khaomangai.com/",
        order: "https://nongskhaomangai.square.site/",
        directions:"https://goo.gl/maps/JBvsD1YWvum6tYb78"
      },
    ],
  },
  {
    name: "Pambiche",
    city: "Portland",
    neighborhood: "Kerns",
    category: ["Lunch", "Dinner"],
    items: [
      { item: "Arroz Con Pollo" },
      { item: "Ropa Veja" },
      { item: "Vaca Frita" },
      { item: "Tres Leches" },
    ],
    contact: [
      {
        website: "https://www.pambiche.com/",
        directions: "https://goo.gl/maps/iEo8xbQ9M353D7Ci9"
      },
    ],
  },
  {
    name: "Broder Cafe",
    city: "Portland",
    neighborhood: "Hosford-Abernethy",
    category: ["Brunch", "Lunch"],
    items: [
      { item: "Aebleskiver (Danish Pancakes)" },
      { item: "Lefse (Norwegian Potato Crepe)" },
      { item: "Fölorade Ägg (Lost Eggs)" },
    ],
    contact: [
      {
        website: "https://www.broderpdx.com/",
        directions:"https://goo.gl/maps/caPmd5PvbkrwU2Cg7"
      },
    ],
  },
  {
    name: "Jen’s Pastries",
    city: "Portland",
    neighborhood: "South Portland",
    category: ["Bakery"],
    items: [
      { item: "Berry Poptart" },
      { item: "Maple Oat Scone" },
      { item: "Garlic Croissant" },
    ],
    contact: [
      {
        website: "https://www.jenspdx.com/",
        directions:"https://goo.gl/maps/syyvcoxoMEk235FF7"
      },
    ],
  },
  {
    name: "Sabor Casero Pupuseria",
    city: "Portland",
    neighborhood: "Woodlawn",
    category: ["Lunch", "Food Truck"],
    items: [
      { item: "Pupusa with pork and cheese" },
      { item: "Pupusa with bean and cheese" },
    ],
    contact: [
      {
        directions:"https://goo.gl/maps/4yXTe6DMNQMRbnpV9"
      },
    ],
  },
  {
    name: "Ken’s Artisan Pizza",
    city: "Portland",
    neighborhood: "Kerns",
    category: ["American", "Dinner", "Lunch"],
    items: [
      { item: "Margherita" },
      { item: "Fennel Sausage & Onions" },
    ],
    contact: [
      {
        website: "https://kensartisan.com/pizza",
        order: "https://nongskhaomangai.square.site/",
        directions:"https://goo.gl/maps/y9HT8JeqVWT6zxK57"
      },
    ],
  },
  {
    name: "Lechon",
    city: "Portland",
    neighborhood: "Downtown",
    category: ["Dinner"],
    items: [
      { item: "White Corn And Cheese Fritters", isVeg: true },
      { item: "Peruvian Fried Chicken Bites" },
      { item: "Pork Belly Baocitos" },
    ],
    contact: [
      {
        website: "https://lechonpdx.com/menu",
        directions:
          "https://goo.gl/maps/v4fH7FptqYrRJhA5A",
      },
    ],
  },
  {
    name: "Gravy",
    city: "Portland",
    neighborhood: "Boise",
    category: ["Brunch", "Lunch"],
    items: [{ item: "Fried Chicken with Gravy" }],
    contact: [
      {
        website: "https://gravyrestaurant.com/",
        directions:
          "https://goo.gl/maps/hkAqJs31srWvvk8V9",
      },
    ],
  },
  {
    name: "Blue Star Donut",
    city: "Portland",
    neighborhood: "South East Side",
    category: ["Bakery"],
    items: [
      { item: "Lemon Poppy Buttermilk Old-Fashioned" },
      { item: "Chocolate Buttermilk Old Fashioned" },
      { item: "Orange Olive Oil" },
    ],
    contact: [
      {
        website: "https://bluestardonuts.com/",
      },
    ],
  },
  {
    name: "Screen Door",
    city: "Portland",
    neighborhood: "South East Side",
    category: ["Dinner"],
    items: [
      { item: "Chicken Dinner" },
      { item: "Screen Door Mac & Cheese" },
    ],
    contact: [
      {
        website: "https://screendoorrestaurant.com/",
        order: "https://direct.chownow.com/order/11490/locations/15935",
        directions:"https://goo.gl/maps/dJq2Cc58KGCbwfK17"
      },
    ],
  },
  {
    name: "Jam on Hawthorne",
    city: "Portland",
    neighborhood: "Hawthorne",
    category: ["Brunch", "Lunch", "American"],
    items: [
      { item: "Bennie Hashbrowns" },
      { item: "Corned Beef Hash" },
    ],
    contact: [
      {
        website: "https://www.jamonhawthorne.com/",
        directions:"https://goo.gl/maps/sVcseZNkezWzXW3D8"
      },
    ],
  },
  {
    name: "Sengatera Ethiopian Restaurant",
    city: "Portland",
    neighborhood: "Kings",
    category: ["Dinner"],
    items: [{ item: "Senga-tera Special" }],
    contact: [
      {
        directions:"https://goo.gl/maps/6bsTMM7JEVcrcsB67",
        website: "https://sengateraethiopianrestaurant.com/index.html",
      },
    ],
  },
  {
    name: "Fried Egg I’m In Love",
    city: "Portland",
    neighborhood: "Hawthorne",
    category: ["Brunch", "Lunch", "American", "Food Truck"],
    items: [
      { item: "Yolko Ono" },
      { item: "Egg Zeppelin" },
    ],
    contact: [
      {
        website: "https://www.friedegglove.com/",
        order: "https://www.friedegglove.com/orderonline",
        directions:"https://goo.gl/maps/9doGaCS2pNef3N429"
      },
    ],
  },
  {
    name: "Nicholas Restaurant",
    city: "Portland",
    neighborhood: "Buckman Neighborhood",
    category: ["Lunch", "Dinner", "Asian"],
    items: [
      { item: "Meat Mezza" },
      { item: "Vegetarian Mezza", isVeg: true },
    ],
    contact: [
      {
        website: "https://www.nicholasrestaurant.com/",
        order: "https://www.nicholasrestaurant.com/order-now",
        directions:"https://goo.gl/maps/VnaJBm9ZKmznfJcCA"
      },
    ],
  },
  {
    name: "Stammisch",
    city: "Portland",
    neighborhood: "Kerns",
    category: ["Dinner"],
    items: [
      { item: "Currywurst" },
      { item: "Wienerschnitzel" },
    ],
    contact: [
      {
        website: "https://www.stammtischpdx.com/",
        directions:"https://goo.gl/maps/7w7wfQdhUaC9Ljfx5"
      },
    ],
  },
  {
    name: "Nepali Kitchen and Chai Garden",
    city: "Portland",
    neighborhood: "Beaumont-Wilshire",
    category: ["Asian", "Lunch", "Dinner"],
    items: [
      { item: "Pork Momo" },
      { item: "Chicken Curry" },
      { item: "Chai" , isCaffeine: true},
    ],
    contact: [
      {
        directions:"https://goo.gl/maps/dRaSgRUFg4eCXrBT8",
        website: "https://cybergardencafenepali-kitchen.business.site/",
      },
    ],
  },
  {
    name: "Sushi Ohana",
    city: "Portland",
    neighborhood: "Irvington",
    category: ["Dinner", "Asian"],
    items: [{ item: "Salmon Nigiri" }],
    contact: [
      {
        website: "https://www.sushiohanapdx.com/",
        order: "https://www.sushiohanapdx.com/order-online-takeout-delivery",
        directions:"https://goo.gl/maps/WSWBv4gkDtkazLax8"
      },
    ],
  },
  {
    name: "Pine State Biscuit",
    city: "Portland",
    neighborhood: "Ladd’s Addition",
    category: ["Brunch", "Lunch", "American"],
    items: [
      { item: "The Reggie" },
      { item: "Biscuit and Jam", isVeg: true },
    ],
    contact: [
      {
        website: "https://pinestatebiscuits.com/",
        order: "https://pine-state-biscuits.square.site/",
        directions:"https://goo.gl/maps/KzKE5fp45PJJT5Uq7"
      },
    ],
  },
  {
    name: "Botto’s BBQ",
    city: "Portland",
    neighborhood: "Hosford-Abernethy",
    category: ["American", "Lunch", "Dinner"],
    items: [
      { item: "Brisket" },
      { item: "Potato Salad" },
      { item: "Baked Mac+Cheese" },
    ],
    contact: [
      {
        website: "https://bottosbbq.com/",
        order: "https://bottosbbq.square.site/",
        directions:"https://goo.gl/maps/jhaBVRpEUq9xWktr6"
      },
    ],
  },
  {
    name: "Matt’s BBQ",
    city: "Portland",
    neighborhood: "Boise",
    category: ["American", "Food Truck", "Lunch", "Dinner"],
    items: [
      { item: "Sliced Brisket" },
      { item: "Cherry Chipotle BBQ Sauce" },
    ],
    contact: [
      {
        website: "https://www.mattsbbqpdx.com/",
        order: "https://www.mattsbbqpdx.com/order-now/",
        directions:"https://goo.gl/maps/V65rWYBiANV9Z8ND6"
      },
    ],
  },
  {
    name: "Jojo",
    city: "Portland",
    neighborhood: "Pearl District",
    category: ["American", "Lunch", "Dinner"],
    items: [
      { item: "Fried Chicken Sandwich with Jojo Sauce" },
    ],
    contact: [
      {
        website: "https://jojopdx.com/",
        directions: "https://goo.gl/maps/uy5P4MxVxD7FCcUn6"
      },
    ],
  },
  {
    name: "Paadee",
    city: "Portland",
    neighborhood: "Burnside",
    category: ["Asian", "Lunch", "Dinner"],
    items: [
      { item: "Khao Soi" },
      { item: "Pad See Ew" },
      { item: "Green Curry" },
      { item: "Bha Mee" },
    ],
    contact: [
      {
        website: "https://www.paadeepdx.com/",
        directions: "https://goo.gl/maps/VNiQBXhGnXJ8NJmZ7"
      },
    ],
  },
  {
    name: "Luc Lac Vietnamese Kitchen",
    city: "Portland",
    neighborhood: "Downtown",
    category: ["Asian", "Lunch", "Dinner"],
    items: [
      { item: "Bo Tai Chanh (Steak Salad)" },
      { item: "Sugar Cane Shrimp" },
      { item: "Luc Lac" },
      { item: "Asian Vacation", isAlcohol: true },
    ],
    contact: [
      {
        website: "https://luclackitchen.com/",
        directions: "https://goo.gl/maps/i8EyEkjSAjnNdiFK9"
      },
    ],
  },
  {
    name: "Excellent Cuisine",
    city: "Portland",
    neighborhood: "South Tabor",
    category: ["Asian", "Lunch", "Brunch"],
    items: [
      { item: "Sui Mai (Pork Dumplings)" },
      { item: "Pai Gwut (Spare ribs)" },
      { item: "Gai Gurk (Chicekn Feet)" },
    ],
    contact: [
      {
        website: "https://www.excellentcuisine-or.com/",
        directions: "https://goo.gl/maps/sY9MevSkFGL7qMnW9"
      },
    ],
  },
  {
    name: "Portland Farmers Market at PSU",
    city: "Portland",
    neighborhood: "Downtown",
    category: ["Lunch", "Food Truck"],
    items: [
      { item: "Molly’s Tamales - Pork Tamale" },
      { item: "Taste of Old Poland - Pierogi" },
    ],
    contact: [
      {
        directions:
          "https://www.google.com/maps/dir//Portland+Farmers+Market+at+PSU,+Southwest+Park+Avenue,+Portland,+OR/@45.5479557,-122.8739699,11.05z/data=!3m1!5s0x80857e735be18845:0x8ccf98710399e5dd!4m8!4m7!1m0!1m5!1m1!1s0x54950a171e104107:0xddcd62c44c34e5!2m2!1d-122.6848342!2d45.5123034",
      },
    ],
  },
  {
    name: "Stumptown Coffee Roasters",
    city: "Portland",
    neighborhood: "Belmont",
    category: ["Cafe"],
    items: [],
    contact: [
      {
        directions:
            "https://goo.gl/maps/ajWm9utgaz7XpMwL6",
        website:
            "https://www.stumptowntogo.com/",
      },
    ],
  },
  {
    name: "Portland Coffee Roasters",
    city: "Portland",
    neighborhood: "Buckman Neighborhood",
    category: ["Cafe"],
    items: [],
    contact: [
      {
        directions:
            "https://goo.gl/maps/JzQqQirdk4r9vLtUA",
        website:
            "https://www.portlandcoffeeroasters.com/consumer/",
      },
    ],
  },
  {
    name: "Coava Coffee Roasters",
    city: "Portland",
    neighborhood: "East Portland",
    category: ["Cafe"],
    items: [],
    contact: [
      {
        directions:
            "https://goo.gl/maps/cnwpsb22wej6x8ur6",
        website:
            "https://www.coavacoffee.com/",
      },
    ],
  },
  {
    name: "Sterling Coffee Roasters",
    city: "Portland",
    neighborhood: "Northwest District",
    category: ["Cafe"],
    items: [],
    contact: [
      {
        directions:
            "https://goo.gl/maps/CDyiUeTnXCnmZ1vCA",
        website:
            "https://www.sterling.coffee/",
      },
    ],
  },
  {
    name: "Never Coffee",
    city: "Portland",
    neighborhood: "Belmont",
    category: ["Cafe"],
    items: [],
    contact: [
      {
        directions:
            "https://goo.gl/maps/Zqsmi52FtzEhjBDW7",
        website:
            "https://www.nevercoffeelab.com/",
      },
    ],
  },
  {
    name: "Albina Press",
    city: "Portland",
    neighborhood: "Mt. Tabor",
    category: ["Cafe"],
    items: [],
    contact: [
      {
        directions:
            "https://goo.gl/maps/tRmjJUCtpLihNYio6",
      },
    ],
  },
  {
    name: "Deschutes",
    city: "Portland",
    neighborhood: "Pearl District",
    items: [{ item: "Fresh Squeezed IPA", isAlcohol: true }],
    category: ["Brewery", "American", "Dinner"],
    contact: [
      {
        website:
          "https://www.deschutesbrewery.com/visit-us/portland-public-house/",
      },
    ],
  },
  {
    name: "Breakside Brewery - NW Slabtown",
    city: "Portland",
    neighborhood: "Slabtown",
    items: [],
    category: ["Brewery", "American", "Dinner"],
    contact: [
      {
        website:
            "https://breakside.com/",
        directions: "https://goo.gl/maps/FhidFCC7gKBokSTU7"
      },
    ],
  },
  {
    name: "10 Barrel Brewing Portland",
    city: "Portland",
    neighborhood: "Pearl District",
    items: [],
    category: ["Brewery", "American", "Dinner"],
    contact: [
      {
        website:
            "https://10barrel.com/pub/portland-brewery/",
        directions:"https://goo.gl/maps/jbtZPZkG39z6oF657"
      },
    ],
  },{
    name: "Steeplejack Brewing Company",
    city: "Portland",
    neighborhood: "Sullivan's Gulch",
    items: [],
    category: ["Brewery", "American", "Dinner"],
    contact: [
      {
        website:
            "https://www.steeplejackbeer.com/",
        directions:"https://goo.gl/maps/pbWXCbCkxhEXg5rd7"
      },
    ],
  },
  {
    name: "Loyal Legion",
    city: "Portland",
    neighborhood: "East Portland",
    items: [],
    category: ["Brewery", "American", "Dinner"],
    contact: [
      {
        website:
            "https://loyallegionbeerhall.com/",
        directions:"https://goo.gl/maps/5FhdxA11pN74QUfj7"
      },
    ],
  },
  {
    name: "Migration Brewing - Glisan",
    city: "Portland",
    neighborhood: "Laurelhurst",
    items: [],
    category: ["Brewery", "American", "Dinner"],
    contact: [
      {
        website:
            "https://migrationbrewing.com/",
        directions: "https://goo.gl/maps/2T9avtFtXKMTTfNT8"
      },
    ],
  },
  {
    name: "Portland Cider House",
    city: "Portland",
    neighborhood: "Hawthorne",
    items: [],
    category: ["Brewery"],
    contact: [
      {
        website:
            "https://www.portlandcider.com/pdxciderhouse",
        directions:"https://goo.gl/maps/AR3s2HDFJbGaCwgi6"
      },
    ],
  },
  {
    name: "Roof Deck at Revolution Hall",
    city: "Portland",
    neighborhood: "Buckman Neighborhood",
    category: ["Bar"],
    items: [],
    contact: [
      {
        website: "https://www.revolutionhall.com/",
        directions:"https://goo.gl/maps/SrdFfjdXNrrgw7Xy6"
      },
    ],
  },
  {
    name: "A Roadside Attraction",
    city: "Portland",
    neighborhood: "Buckman Neighborhood",
    category: ["Bar"],
    items: [],
    contact: [
      {
        website: "https://www.instagram.com/roadsidepdx/?hl=en",
        directions: "https://goo.gl/maps/wGcxhmk6avTa6HUw7"
      },
    ],
  },
  {
    name: "Piroshky Piroshky",
    city: "Seattle",
    neighborhood: "Downtown",
    category: ["Bakery"],
    items: [{ item: "Salmon Piroshky" }],
    contact: [
      {
        website: "https://piroshkybakery.com/",
      },
    ],
  },
  {
    name: "Frelard Tamales",
    city: "Seattle",
    neighborhood: "Green Lake",
    category: ["Lunch"],
    items: [
      { item: "Pork Tamale" },
      { item: "Jalapeño & Cheese Tamale", isVeg: true },
    ],
    contact: [
      {
        website: "https://www.frelardtamales.com/",
        order: "https://www.frelardtamales.com/delivery.html",
      },
    ],
  },
  {
    name: "Seattle Fish Guys",
    city: "Seattle",
    neighborhood: "Downtown",
    category: ["Lunch", "Dinner", "Asian"],
    items: [
      { item: "Tuna Poke Bowl" },
      { item: "Chirashi Bowl" },
    ],
    contact: [
      {
        website: "https://www.seattlefishguys.com/",
        order: "https://www.seattlefishguys.com/store",
      },
    ],
  },
  {
    name: "Japonessa Sushi Cocina",
    city: "Seattle",
    neighborhood: "Downtown",
    category: ["Asian", "Lunch", "Dinner"],
    items: [
      { item: "Happy Hour Sushi Set B" },
      { item: "Happy Hour Sushi Set Deluxe" },
      { item: "Happy Hour Lucky 7" },
    ],
    contact: [
      {
        website: "https://www.japonessa.com/",
      },
    ],
  },
  {
    name: "Thai Tom",
    city: "Seattle",
    neighborhood: "University District",
    category: ["Lunch", "Dinner", "Asian"],
    items: [
      { item: "Pad See Ew" },
      { item: "Thai Iced Tea", isCaffeine: true },
    ],
    contact: [
      {
        phone: "(206) 548-9548",
      },
    ],
  },
  {
    name: "Dick’s Drive-in",
    city: "Seattle",
    neighborhood: "Wallingford",
    category: ["Dinner"],
    items: [{ item: "Deluxe Burger" }],
    contact: [
      {
        website: "https://www.ddir.com/",
      },
    ],
  },
  {
    name: "Sea Wolf Bakery",
    city: "Seattle",
    neighborhood: "Fremont",
    category: ["Cafe", "Bakery"],
    items: [
      { item: "Croissant" },
      { item: "Cheddar Lye Roll" },
      { item: "Latte", isCaffeine: true },
    ],
    contact: [
      {
        website: "https://www.seawolfbakers.com/menu",
      },
    ],
  },
  {
    name: "Fremont Coffee Company",
    city: "Seattle",
    neighborhood: "Fremont",
    category: ["Cafe"],
    items: [{ item: "Drip Coffee", isCaffeine: true }],
    contact: [
      {
        website: "https://www.fremontcoffee.net/",
      },
    ],
  },
  {
    name: "Theo Chocolate",
    city: "Seattle",
    neighborhood: "Downtown",
    category: ["Dessert"],
    items: [
      { item: "Snickerdoodle Cookie Bites" },
      { item: "Peanut Butter Cups" },
    ],
    contact: [
      {
        website: "https://theochocolate.com/",
      },
    ],
  },
  {
    name: "Hot Cakes",
    city: "Seattle",
    neighborhood: "Capital Hill",
    items: [{ item: "Dark Decadence" }],
    category: ["Dessert"],
    contact: [
      {
        website: "https://getyourhotcakes.com/",
        order: "https://hot-cakes-seattle.square.site/",
      },
    ],
  },
  {
    name: "Fremont Brewing’s Urban Beer Garden",
    city: "Seattle",
    neighborhood: "Fremont",
    category: ["Brewery"],
    items: [],
    contact: [
      {
        website: "https://www.fremontbrewing.com/new-page-1",
      },
    ],
  },
  {
    name: "Bale Breaker & Yonder Cider Taproom",
    city: "Seattle",
    neighborhood: "Ballard",
    category: ["Brewery"],
    items: [],
    contact: [
      {
        website: "https://www.bbycballard.com/",
      },
    ],
  },
  {
    name: "Optimism Brewing Company",
    city: "Seattle",
    neighborhood: "Capital Hill",
    category: ["Brewery"],
    items: [],
    contact: [
      {
        website: "https://optimismbrewing.com/",
      },
    ],
  },
  {
    name: "Oscars Mexican Seafood",
    city: "San Diego",
    neighborhood: "Hillcrest",
    category: ["Mexican", "Lunch", "Dinner", "Happy Hour"],
    items: [{item: "Battered Fish Tacos"}, {item: "Fish Stew"}],
    contact: [
      {
        website: "http://www.oscarsmexicanseafood.com/",
        directions: "https://www.google.com/maps/dir//Oscars+Mexican+Seafood,+University+Avenue,+San+Diego,+CA/@32.7486877,-117.1942486,13z/data=!3m1!5s0x80dc0185c4ff97a9:0x7a6b34bd65690811!4m8!4m7!1m0!1m5!1m1!1s0x80d954dafd4e35d5:0xefc6bacb98e8a3d6!2m2!1d-117.1591263!2d32.7486736"
      },
    ],
  },
  {
    name: "Con Pane Rustic Breads & Cafe",
    city: "San Diego",
    neighborhood: "Liberty Station",
    category: ["Lunch", "Bakery"],
    items: [{item: "Chocolate Hazelnut Twists", isVeg: true}],
    contact: [
      {
        website: "https://www.cohnrestaurants.com/conpane",
        directions: "https://www.google.com/maps/dir//Con+Pane+Rustic+Breads+%26+Cafe,+Dewey+Road,+San+Diego,+CA/@32.738092,-117.2475038,13z/data=!3m1!5s0x80dc0185c4ff97a9:0x7a6b34bd65690811!4m8!4m7!1m0!1m5!1m1!1s0x80deab045c505ce5:0x3c3555b90bf01aa9!2m2!1d-117.2125!2d32.7380556"
      },
    ],
  },
  {
    name: "Shank & Bone",
    city: "San Diego",
    neighborhood: "North Park",
    category: ["Asian", "Lunch", "Dinner", 'Happy Hour'],
    items: [{item: "Signature Pho"}],
    contact: [
      {
        website: "https://www.shankandbone.com/",
        directions: "https://www.google.com/maps/dir//Shank+%26+B%C3%B4ne,+University+Avenue,+San+Diego,+CA/@32.7380507,-117.2476053,13z/data=!3m1!5s0x80dc0185c4ff97a9:0x7a6b34bd65690811!4m8!4m7!1m0!1m5!1m1!1s0x80d95389f38e4a93:0x20b4b587508aaae2!2m2!1d-117.1306219!2d32.7486052"

      },
    ],
  },
  {
    name: "Realm of 52 Remedies",
    city: "San Diego",
    neighborhood: "Kearny Mesa",
    category: ["Asian", "Speakeasy", "Dinner"],
    items: [{item: "Tuna Sesame Noodles"},
      {item: "KFQ"},
      {item:"Earl Grey", isAlcohol: true}],
    contact: [
      {
        website: "https://www.52remedies.com/",
        directions: "https://www.google.com/maps/dir//Realm+Of+The+52+Remedies,+Convoy+Street,+San+Diego,+CA/@32.8134404,-117.2129837,12.83z/data=!3m1!5s0x80dc0185c4ff97a9:0x7a6b34bd65690811!4m8!4m7!1m0!1m5!1m1!1s0x80dbffe0ec1c891f:0xe8561447036d810b!2m2!1d-117.1528252!2d32.8293895"
      },
    ],
  },
  {
    name: "Hawaiian Fresh Seafood, Inc.",
    city: "San Diego",
    neighborhood: "Mira Mesa",
    category: ["Asian", "Lunch"],
    items: [{item: "Poke Plate"}],
    contact: [
      {
        website: "https://www.hawaiianfreshseafood.com/",
        directions: "https://www.google.com/maps/dir//Hawaiian+Fresh+Seafood,+Inc.,+6491+Weathers+Pl,+San+Diego,+CA+92121/@32.9052429,-117.2135073,13z/data=!3m1!5s0x80dc0185c4ff97a9:0x7a6b34bd65690811!4m8!4m7!1m0!1m5!1m1!1s0x80dc0720c6935b9d:0x4b184a99a18d1374!2m2!1d-117.178402!2d32.9052478"
      },
    ],
  },
  {
    name: "The Taco Stand",
    city: "San Diego",
    neighborhood: "La Jolla",
    category: ["Mexican", "Lunch", "Dinner"],
    items: [{item:"Carne Asada Taco", isVeg: true}, {item: "Al Pastor Taco"}],
    contact: [
      {
        website: "https://letstaco.com/",
        directions: "https://www.google.com/maps/dir//The+Taco+Stand,+Pearl+Street,+San+Diego,+CA/@32.8393469,-117.3119244,13z/data=!3m1!5s0x80dc0185c4ff97a9:0x7a6b34bd65690811!4m8!4m7!1m0!1m5!1m1!1s0x80dc03e5d1618ceb:0x73529c9f616b883!2m2!1d-117.2768086!2d32.839328"
      },
    ],
  },
  {
    name: "Neighborhood",
    city: "San Diego",
    neighborhood: "Downtown",
    category: ["Speakeasy"],
    items: [{item: "Pierogi"}],
    contact: [
      {
        website: "https://neighborhoodsd.com/",
        directions: "https://www.google.com/maps/dir//Neighborhood,+G+Street,+San+Diego,+CA/@32.7135739,-117.1661028,15.28z/data=!3m1!5s0x80dc0185c4ff97a9:0x7a6b34bd65690811!4m8!4m7!1m0!1m5!1m1!1s0x80d95359190f7ca1:0xff28dbd6bd67866!2m2!1d-117.157584!2d32.712406"
      },
    ],
  },
  {
    name: "Communal Coffee North Park",
    city: "San Diego",
    neighborhood: "North Park",
    category: ["Cafe"],
    items: [],
    contact: [
      {
        website: "https://communalcoffee.com/north-park",
        directions: "https://www.google.com/maps/dir//Communal+Coffee,+2335+University+Ave,+San+Diego,+CA+92104/@32.7483035,-117.1742826,13z/data=!3m1!5s0x80dc0185c4ff97a9:0x7a6b34bd65690811!4m8!4m7!1m0!1m5!1m1!1s0x80d954ee32187627:0x570eb5a679a17a63!2m2!1d-117.1391773!2d32.7483084"
      },
    ],
  },
  {
    name: "Isola Pizza Bar",
    city: "San Diego",
    neighborhood: "Little Italy",
    category: ["Italian", "Happy Hour", "Lunch", "Dinner"],
    items: [{item:"Margherita Pizza", isVeg: true}, {item: "Burrata Bruschetta"}],
    contact: [
      {
        website: "https://www.isolapizzabar.com/little-italy-menu",
        directions: "https://www.google.com/maps/dir//Isola+Pizza+Bar,+India+Street,+San+Diego,+CA/@32.7211991,-117.2036583,13z/data=!3m1!5s0x80dc0185c4ff97a9:0x7a6b34bd65690811!4m8!4m7!1m0!1m5!1m1!1s0x80d954adce62c5e7:0x2b40f7674f27058d!2m2!1d-117.168553!2d32.721204"
      },
    ],
  },
  {
    name: "Taco Surf PB",
    city: "San Diego",
    neighborhood: "Pacific Beach",
    category: ["Mexican", "Lunch", "Dinner"],
    items: [{item:"Fried Fish Taco", isVeg: true}, {item: "Grilled Fish Taco"}],
    contact: [
      {
        website: "https://www.tacosurftacoshop.com/",
        directions: "https://www.google.com/maps/dir//Taco+Surf+PB,+Mission+Boulevard,+San+Diego,+CA/@32.8393469,-117.3119244,13z/data=!3m1!5s0x80dc0185c4ff97a9:0x7a6b34bd65690811!4m8!4m7!1m0!1m5!1m1!1s0x80dc018d632673d1:0x1084755cff66bcbc!2m2!1d-117.2560451!2d32.7988385"
      },
    ],
  },
  {
    name: "Moniker Coffee Co",
    city: "San Diego",
    neighborhood: "Liberty Station",
    category: ["Cafe"],
    items: [],
    contact: [
      {
        website: "https://monikercoffee.com/menu",
        directions:"https://www.google.com/maps/dir//Moniker+Coffee+Co,+2860+Sims+Rd,+San+Diego,+CA+92106/@32.7988435,-117.2911536,13z/data=!3m1!5s0x80dc0185c4ff97a9:0x7a6b34bd65690811!4m8!4m7!1m0!1m5!1m1!1s0x80deab030cd844e9:0x5fbedb28e37eaede!2m2!1d-117.2113389!2d32.7409489"
      },
    ],
  },
  {
    name: "Menya Ultra",
    city: "San Diego",
    neighborhood: "Hillcrest",
    category: ["Asian", "Lunch", "Dinner"],
    items: [{item: "Tonkotsu Ramen"}],
    contact: [
      {
        website: "https://menya-ultra.com/",
        directions: "https://www.google.com/maps/dir//Menya+Ultra+Hillcrest+Ramen,+University+Avenue,+San+Diego,+CA/@32.7486684,-117.1938026,13z/data=!3m1!5s0x80dc0185c4ff97a9:0x7a6b34bd65690811!4m8!4m7!1m0!1m5!1m1!1s0x80d95511289b2f7b:0x618ef1cf1bf63e5c!2m2!1d-117.1586973!2d32.7486733",
      },
    ],
  },
  {
    name: "Buona Forchetta",
    city: "San Diego",
    neighborhood: "South Park",
    category: ["Italian", "Lunch", "Dinner"],
    items: [{item: "Pesto Gnocchi"}],
    contact: [
      {
        website: "https://buonaforchettasd.com/",
        directions: "https://www.google.com/maps/dir//Buona+Forchetta+-+South+Park,+Beech+Street,+San+Diego,+CA/@32.7211586,-117.1651439,13z/data=!3m1!5s0x80dc0185c4ff97a9:0x7a6b34bd65690811!4m8!4m7!1m0!1m5!1m1!1s0x80d9537e305d3911:0x2108857782e4a0ce!2m2!1d-117.1300386!2d32.7211635"
      },
    ],
  },
  {
    name: "Karl Strauss Brewing Company",
    city: "San Diego",
    neighborhood: "Mira Mesa",
    category: ["Brewery"],
    items: [],
    contact: [
      {
        website: "https://www.karlstrauss.com/",
        directions: "https://www.google.com/maps/dir//Karl+Strauss+Brewing+Company,+Scranton+Road,+San+Diego,+CA/@32.8965444,-117.2368862,13z/data=!3m1!5s0x80dc0185c4ff97a9:0x7a6b34bd65690811!4m8!4m7!1m0!1m5!1m1!1s0x80dc0715da411f5b:0xca385eb992acebdb!2m2!1d-117.2017809!2d32.8965493",
      },
    ],
  },
  {
    name: "Ballast Point Brewing",
    city: "San Diego",
    neighborhood: "Mire Mesa",
    category: ["Brewery"],
    items: [],
    contact: [
      {
        website: "https://ballastpoint.com/",
        directions: "https://www.google.com/maps/dir//Ballast+Point+Brewing+Miramar,+Carroll+Way,+San+Diego,+CA/@32.887553,-117.193255,13z/data=!3m1!5s0x80dc0185c4ff97a9:0x7a6b34bd65690811!4m8!4m7!1m0!1m5!1m1!1s0x80dbf8b17b55f869:0x356c09c52b8e2ecb!2m2!1d-117.1581497!2d32.8875579"
      },
    ],
  },
  {
    name: "Newtopia Cyder",
    city: "San Diego",
    neighborhood: "Mira Mesa",
    category: ["Brewery"],
    items: [],
    contact: [
      {
        website: "https://www.drinknewtopia.com/",
        directions: "https://www.google.com/maps/dir//Newtopia+Cyder,+Carroll+Canyon+Road+A,+San+Diego,+CA/@32.9032701,-117.1458613,13z/data=!3m1!5s0x80dc0185c4ff97a9:0x7a6b34bd65690811!4m8!4m7!1m0!1m5!1m1!1s0x80dbf93090c8e82f:0xb210709d7ebd0167!2m2!1d-117.110756!2d32.903275",
      },
    ],
  },
  {
    name: "OB Beans Coffee Roasters",
    city: "San Diego",
    neighborhood: "Ocean Beach",
    category: ["Cafe"],
    items: [],
    contact: [
      {
        directions: "https://www.google.com/maps/dir//OB+Beans+Coffee+Roasters,+Newport+Avenue,+San+Diego,+CA/@32.7486684,-117.1938026,13z/data=!3m1!5s0x80dc0185c4ff97a9:0x7a6b34bd65690811!4m8!4m7!1m0!1m5!1m1!1s0x80deaa37442caaa3:0x13685037cde3c062!2m2!1d-117.2490535!2d32.7454805"
      },
    ],
  },
  {
    name: "Azucar",
    city: "San Diego",
    neighborhood: "Ocean Beach",
    category: ["Cafe", "Bakery"],
    items: [],
    contact: [
      {
        website: "https://iloveazucar.com/",
        directions: "https://www.google.com/maps/dir//Azucar,+Newport+Avenue,+San+Diego,+CA/@32.7451661,-117.2829363,13z/data=!3m2!4b1!5s0x80dc0185c4ff97a9:0x7a6b34bd65690811!4m8!4m7!1m0!1m5!1m1!1s0x80deaa371187dc43:0x8e58455b62a6ef9c!2m2!1d-117.247831!2d32.745171"
      },
    ],
  },
  {
    name: "Cafe Moto",
    city: "San Diego",
    neighborhood: "Barrio Logan",
    category: ["Cafe"],
    items: [],
    contact: [
      {
        website: "https://cafemoto.com/",
        directions:"https://www.google.com/maps/dir//Cafe+Moto,+National+Avenue,+San+Diego,+CA/@32.6956558,-117.1728513,13z/data=!3m1!5s0x80dc0185c4ff97a9:0x7a6b34bd65690811!4m8!4m7!1m0!1m5!1m1!1s0x80d9530d8e32b95f:0x4691331edf665d13!2m2!1d-117.137746!2d32.6956607"
      },
    ],
  },
  {
    name: "Panchita's Bakery",
    city: "San Diego",
    neighborhood: "Barrio Logan",
    category: ["Cafe", "Bakery"],
    items: [{item: "Concha"}],
    contact: [
      {
        website: "http://www.panchitasbakery.com/",
        directions: "https://www.google.com/maps/dir//Panchita's+Bakery,+Logan+Avenue,+San+Diego,+CA/@32.7016543,-117.1799747,13z/data=!3m2!4b1!5s0x80dc0185c4ff97a9:0x7a6b34bd65690811!4m8!4m7!1m0!1m5!1m1!1s0x80d9536b8d65a353:0x3da331aee0904b9b!2m2!1d-117.1448496!2d32.7016454",
      },
    ],
  },
  {
    name: "Tacos El Trompo \"A Mexican Tradition\"",
    city: "San Diego",
    neighborhood: "Liberty Station",
    category: ["Mexican", "Lunch", "Dinner"],
    items: [],
    contact: [
      {
        directions: "https://www.google.com/maps/dir//Tacos+El+Trompo+%22A+Mexican+Tradition%22,+Logan+Avenue+suite+c,+San+Diego,+CA/@32.7013995,-117.1799081,13z/data=!3m2!4b1!5s0x80dc0185c4ff97a9:0x7a6b34bd65690811!4m8!4m7!1m0!1m5!1m1!1s0x80d9532751363779:0x6335ad3d72f2a600!2m2!1d-117.1448028!2d32.7014044"
      },
    ],
  },
  {
    name: "Bivouac Ciderworks",
    city: "San Diego",
    neighborhood: "North Park",
    category: ["Brewery"],
    items: [],
    contact: [
      {
        website: "https://www.bivouaccider.com/",
        directions: "https://www.google.com/maps/dir//Bivouac+Ciderworks,+30th+Street,+San+Diego,+CA/@32.7500461,-117.16551,13z/data=!3m1!5s0x80dc0185c4ff97a9:0x7a6b34bd65690811!4m8!4m7!1m0!1m5!1m1!1s0x80d954f6e5ea13ff:0xb0906cf5c9bba6c0!2m2!1d-117.1304047!2d32.750051"
      },
    ],
  },
  {
    name: "Tin Roof",
    city: "Hawaii",
    neighborhood: "Kahului, Maui",
    category: ["Lunch", "Asian"],
    items: [{item: "Mochiko Chicken"}, {item: "Garlic Noodles", isVeg: true}],
    contact: [
      {
        website: "https://www.tinroofmaui.com/",
        directions: "https://goo.gl/maps/i8adgCLUtnp97mb27"
      },
    ],
  },
  {
    name: "South Maui Fish Company",
    city: "Hawaii",
    neighborhood: "Kihei, Maui",
    category: ["Lunch", "Dinner", "Hawaiian"],
    items: [{item: "Daily Special Poke"}],
    contact: [
      {
        website: "https://www.southmauifishco.com/",
        directions: "https://goo.gl/maps/BjzFbuqUChznbWFo7"
      },
    ],
  },
  {
    name: "Maui Coffee",
    city: "Hawaii",
    neighborhood: "Kahului, Maui",
    category: ["Cafe", "Hawaiian"],
    items: [{item: "Kona Coffee", isCaffeine: true}],
    contact: [
      {
        website: "https://mauicoffeeroasters.com/",
        directions: "https://goo.gl/maps/Tae9JuQhdnCmXE9D9"
      },
    ],
  },
  {
    name: "Humble Market Kitchin",
    city: "Hawaii",
    neighborhood: "Wailea, Maui",
    category: ["Dinner", "Happy Hour", "Hawaiian"],
    items: [{item: "Brussels & Cauliflower"}, {item: "Crispy Calamari"}, {item: "Szechuan Spiced Baby Back Ribs"}, {item: "HMK Lilikoi Mai Tai", isAlcohol: true}],
    contact: [
      {
        website: "https://www.royyamaguchi.com/humble-market-kitchen-maui",
        directions: "https://goo.gl/maps/1gt2K2ZFfDqoo56E8"
      },
    ],
  },
  {
    name: "Lineage",
    city: "Hawaii",
    neighborhood: "Wailea, Maui",
    category: ["Dinner", "Dessert"],
    items: [{item: "Aji Tamago", isVeg: true}, {item: "Pandan Bread Pudding", isVeg: true}, {item: "Auntie Kine Tings", isAlcohol: true}],
    contact: [
      {
        website: "https://www.lineagemaui.com/",
        directions: "https://goo.gl/maps/9A6VXd3uBama7rc67"
      },
    ],
  },
  {
    name: "Kaka'ako Farmer's Market",
    city: "Hawaii",
    neighborhood: "Kaka'ako, Oahu",
    category: ["Lunch", "Asian"],
    items: [{item: "Sato Seafood Handrolls"}, {item: "Cane Lei"}, {item: "Ma'Ona Musubi"}, {item: "Mochi"}, {item: "Sugah Papi Farms"}],
    contact: [
      {
        website: "https://farmlovers-online-marketplace.myshopify.com/",
        directions: "https://goo.gl/maps/e6gUYZGGvnF1sRi7A"
      },
    ],
  },
  {
    name: "Siam Square",
    city: "Hawaii",
    neighborhood: "Waikiki, Oahu",
    category: ["Dinner", "Asian"],
    items: [{item: "Green Curry", isVeg: true}, {item: "Drunken Noodles", isVeg: true}],
    contact: [
      {
        directions: "https://goo.gl/maps/xTGZE2CExoubyrsX8"
      },
    ],
  },
  {
    name: "Liliha Bakery",
    city: "Hawaii",
    neighborhood: "Kaka'ako, Oahu",
    category: ["Dinner", "Hawaiian"],
    items: [{item: "Loco Moco"}],
    contact: [
      {
        website: "http://lilihabakery.com/",
        directions: "https://goo.gl/maps/3hkEqfkGP134KMqb9"
      },
    ],
  },
  {
    name: "Highway Inn Kaka'ako",
    city: "Hawaii",
    neighborhood: "Kaka'ako, Oahu",
    category: ["Lunch", "Dinner", "Hawaiian"],
    items: [{item: "Pork Lau Lau Tasting Plate ", isVeg: true}],
    contact: [
      {
        website: "https://www.myhighwayinn.com/",
        directions: "https://goo.gl/maps/QVs5UoocQeU7ecPC6"
      },
    ],
  },
  {
    name: "Helena's Hawaiian Food",
    city: "Hawaii",
    neighborhood: "Waikiki, Oahu",
    category: ["Lunch", "Dinner", "Hawaiian"],
    items: [{item: "Poi", isVeg: true}, {item: "Macaroni Salad" }, {item: "Pipikaula Shortribs"}, {item: "Haupia (Coconut Dessert)", isVeg: true}, {item: "Kalua Pork" }, {item: "Fried Butterfish Collar"}, {item: "Lomi Salmon"}],
    contact: [
      {
        website: "https://www.helenashawaiianfood.com/index.html",
        directions: "https://goo.gl/maps/PyhzSJ75UcBqWKbw5"
      },
    ],
  },
  {
    name: "Maguro Spot",
    city: "Hawaii",
    neighborhood: "Waikiki, Oahu",
    category: ["Lunch", "Dinner", "Hawaiian"],
    items: [{item: "Hawaiian Poke"}],
    contact: [
      {
        directions: "https://goo.gl/maps/2A3UEoG6bc2wvR6F6"
      },
    ],
  },
  {
    name: "Tamura's",
    city: "Hawaii",
    neighborhood: "Wahaiwa, Oahu",
    category: ["Lunch", "Dinner", "Hawaiian"],
    items: [{item: "Daily Special Poke"}],
    contact: [
      {
        website: "https://www.tamurasmarket.com",
        directions: "https://goo.gl/maps/j7h7B54xgNEyNkwm7"
      },
    ],
  },
  {
    name: "Fresh Catch",
    city: "Hawaii",
    neighborhood: "Aiea, Oahu",
    category: ["Lunch", "Dinner", "Hawaiian"],
    items: [{item: "Daily Special Poke"}],
    contact: [
      {
        website: "https://www.freshcatch808.com/",
        directions: "https://goo.gl/maps/RruM1ribeQeHKEr49"
      },
    ],
  },
  {
    name: "Leonard's Bakery",
    city: "Hawaii",
    neighborhood: "Kaimuki, Oahu",
    category: ["Bakery"],
    items: [{item: "Plain Malasada"}, {item: "Lilikoi Malasada"}],
    contact: [
      {
        website: "http://www.leonardshawaii.com/",
        directions: "https://goo.gl/maps/Xvt9TTMA7AYPXtPHA"
      },
    ],
  },
  {
    name: "BRUG Bakery Lanai",
    city: "Hawaii",
    neighborhood: "Kaka'ako, Oahu",
    category: ["Bakery"],
    items: [{item: "Japanese Loaf Bread"}],
    contact: [
      {
        website: "http://brugbakery.com/",
        directions: "https://goo.gl/maps/BUqSDja1qRwHwCio9"
      },
    ],
  },
  {
    name: "Henry's Place",
    city: "Hawaii",
    neighborhood: "Waikiki, Oahu",
    category: ["Dessert"],
    items: [{item: "Ube Ice Cream"}],
    contact: [
      {
        directions: "https://goo.gl/maps/Dyk2kY9ztNKHQ9368"
      },
    ],
  },
  {
    name: "Dole Plantation",
    city: "Hawaii",
    neighborhood: "Wahiawa, Oahu",
    category: ["Dessert"],
    items: [{item: "Dole Whip"}],
    contact: [
      {
        website: "https://www.doleplantation.com/",
        directions: "https://goo.gl/maps/1E6ifep4NnT61ACe9"
      },
    ],
  },
  {
    name: "Nisshodo",
    city: "Hawaii",
    neighborhood: "Kalihi - Palama, Oahu",
    category: ["Dessert", "Asian"],
    items: [{item: "Green Tea Mochi"}, {item: "Coconut Mochi"}, {item: "Habutai Mochi"}, {item: "Lychee Mochi"}, {item: "Ugu isu Mochi"}],
    contact: [
      {
        website: "https://www.nisshodomochicandy.com/",
        directions: "https://goo.gl/maps/8Z9Ho2LBx3j97red9"
      },
    ],
  },
  {
    name: "Izakaya Pau Hana Base",
    city: "Hawaii",
    neighborhood: "Waikiki, Oahu",
    category: ["Asian", "Dinner"],
    items: [{item: "Takoyaki"}, {item: "Grilled Yakitori Chicken"}, {item: "Beef with Onion Over Rice"}, {item: "Calpico Chu-hi", isAlcohol: true}],
    contact: [
      {
        directions: "https://goo.gl/maps/WsR14AubY2qUJXXj8"
      },
    ],
  },
  {
    name: "Ali'i Coffee Co",
    city: "Hawaii",
    neighborhood: "Arts District, Oahu",
    category: ["Cafe"],
    items: [{item: "Ube Latte", isCaffeine: true}],
    contact: [
      {
        website: "http://www.aliicoffee.com/",
        directions: "https://goo.gl/maps/rX7Mm91mmhmAUCdw6"
      },
    ],
  },
  {
    name: "The Curb Kaimuki",
    city: "Hawaii",
    neighborhood: "Kaimuki, Oahu",
    category: ["Cafe"],
    items: [{item: "Latte", isCaffeine: true}],
    contact: [
      {
        website: "https://thecurbkaimuki.com/",
        directions: "https://goo.gl/maps/Zzi9YdTtmPyMqgWc9"
      },
    ],
  },
  {
    name: "Kona Coffee Purveyors",
    city: "Hawaii",
    neighborhood: "Waikiki, Oahu",
    category: ["Cafe"],
    items: [{item: "Kouign Amann"}, {item: "Kona Coffee", isCaffeine: true}],
    contact: [
      {
        website: "http://konacoffeepurveyors.com/",
        directions: "https://goo.gl/maps/QwyEA9TahjoartVDA"
      },
    ],
  },
  {
    name: "Maui Brewing Co.",
    city: "Hawaii",
    neighborhood: "Waikiki, Oahu",
    category: ["Brewery", "Happy Hour"],
    items: [],
    contact: [
      {
        website: "https://www.mbcrestaurants.com/waikiki/",
        directions: "https://goo.gl/maps/uE3tTzbsfWggL4vRA"
      },
    ],
  },
  {
    name: "Waikiki Brewing Co.",
    city: "Hawaii",
    neighborhood: "Waikiki, Oahu",
    category: ["Brewery", "Happy Hour"],
    items: [],
    contact: [
      {
        website: "http://www.waikikibrewing.com/",
        directions: "https://goo.gl/maps/C1Dq8hrYD7cFmA3U9"
      },
    ],
  },
];

export default data;
