const data = [
  {
    name: "Chili Cha Cha 2",
    city: "San Francisco",
    neighborhood: "Mission",
    items: [
      { item: "Tom Yum", isVeg: true },
      { item: "Tom Kha", isVeg: true },
      { item: "Green Curry", isVeg: true },
      { item: "Pad Thai", isVeg: true },
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
    items: [
      {
        item: "#1 Pho (rare slices of steak, well-done brisket, flank, tandon, tripe & beef balls)",
        isVeg: false,
      },
      { item: "Five Spice Chicken w/ Imperial Roll Rice Plate", isVeg: false },
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
    items: [
      { item: "Dan Tat", isVeg: false },
      { item: "Pineapple Bun", isVeg: false },
      { item: "Paper Wrapped Cake", isVeg: false },
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
    items: [
      { item: "Dan Tat", isVeg: false },
      { item: "Pineapple Bun", isVeg: false },
      { item: "Paper Wrapped Cake", isVeg: false },
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
    items: [
      { item: "Hot N’ Honey Pizza", isVeg: false },
      { item: "Peperoni Pizza", isVeg: false },
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
    items: [{ item: "Garlic and Clam Pizza", isVeg: false }],
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
    items: [{ item: "Tiramisu", isVeg: false }],
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
    items: [{ item: "Dry Fried Chicken Wings", isVeg: false }],
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
    items: [{ item: "Pho", isVeg: false }],
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
    items: [{ item: "Five Spice Chicken Garlic Noodle", isVeg: false }],
    items: [{ item: "Imperial Rolls", isVeg: false }],
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
    items: [
      { item: "Nikutama", isVeg: false },
      { item: "Mentai Kamatama", isVeg: false },
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
    items: [{ item: "Pho", isVeg: false }],
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
    items: [
      { item: "Cherry Blossom", isVeg: false },
      { item: "49er", isVeg: false },
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
    items: [{ item: "Madagascar Vanilla Ice Cream", isVeg: false }],
    contact: [
      {
        website: "https://www.sfhometowncreamery.com/",
        directions:
          "https://www.google.com/maps/dir//San+Francisco's+Hometown+Creamery,+9th+Avenue,+San+Francisco,+CA/@37.7643856,-122.5362027,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x8085875c52789845:0x9748a34baf003117!2m2!1d-122.4662262!2d37.7644005",
      },
    ],
  },
  {
    name: "San Francisco Hometown Creamery",
    city: "San Francisco",
    neighborhood: "Inner Sunset",
    items: [{ item: "Madagascar Vanilla ice cream", isVeg: false }],
    contact: [
      {
        website: "https://www.sfhometowncreamery.com/",
        directions:
          "https://www.google.com/maps/dir//San+Francisco's+Hometown+Creamery,+9th+Avenue,+San+Francisco,+CA/@37.7643856,-122.5362027,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x8085875c52789845:0x9748a34baf003117!2m2!1d-122.4662262!2d37.7644005",
      },
    ],
  },
  {
    name: "Devil's Teeth Baking Company",
    city: "San Francisco",
    neighborhood: "Outer Sunset",
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
    items: [
      { item: "Tea Leaf Salad", isVeg: true },
      { item: "Platha and Dip", isVeg: false },
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
    name: "Han Il Kwan",
    city: "San Francisco",
    neighborhood: "Richmond",
    items: [{ item: "Beef Tofu Soup", isVeg: true }],
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
    items: [{ item: "Beef Tofu Soup", isVeg: true }],
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
    items: [{ item: "Omakase", isVeg: true }],
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
    items: [{ item: "Pho", isVeg: true }],
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
    items: [{ item: "Pho", isVeg: true }],
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
    items: [{ item: "Super Burrito", isVeg: false }],
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
    items: [
      { item: "Pork Pupusa", isVeg: false },
      { item: "Pork + Cheese  Pupusa", isVeg: false },
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
    items: [{ item: "Snowy Plover", isVeg: false }],
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
    items: [
      { item: "Crabby Bennie", isVeg: false },
      { item: "Beignets", isVeg: false },
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
    items: [{ item: "Florentine Benedict with Home Fries", isVeg: false }],
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
    items: [
      { item: "Strawberry Pancakes", isVeg: false },
      { item: "Bagel + Smoked Salmon", isVeg: false },
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
    items: [{ item: "Classic Smoked Salmon Bagel Sandwich", isVeg: false }],
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
    items: [
      { item: "Bagel + Cultured Butter", isVeg: false },
      { item: "Bagel + Gravlox", isVeg: false },
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
    items: [
      { item: "Croissant", isVeg: false },
      { item: "Chocolate Chip Cookie", isVeg: false },
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
    items: [{ item: "Latte", isVeg: false }],
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
    items: [
      { item: "Croissant", isVeg: false },
      { item: "Pistachio Blackberry Twice-baked", isVeg: false },
      { item: "Ginger Pull-apart", isVeg: false },
      { item: "Creamy Mushroom Puff Hand Pie", isVeg: false },
      { item: "Sourdough Country Loaf", isVeg: false },
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
    items: [],
    contact: [
      {
        website: "https://www.sevenstills.com/outer-sunset-taproom",
      },
    ],
  },
  {
    name: "Sunset Resevior Brewing Company",
    city: "San Francisco",
    neighborhood: "Outer Sunset",
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
    items: [
      { item: "Eggplant in Garlic", isVeg: true },
      { item: "Dices String Beans", isVeg: true },
      { item: "Spicy Fried Rice", isVeg: false },
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
    items: [
      { item: "Special Shan Dong Dumplings", isVeg: false },
      { item: "Beef Chow Fun", isVeg: false },
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
    items: [
      { item: "Roast Pork", isVeg: false },
      { item: "Egg White and Dried Scallop Fried Rice", isVeg: false },
      { item: "Minced Pork Porridge", isVeg: false },
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
    items: [{ item: "Chew Jew Noodle", isVeg: false }],
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
    items: [
      { item: "Egg Crepe", isVeg: false },
      { item: "Soy Milk", isVeg: true },
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
    items: [
      { item: "Spring Rolls", isVeg: false },
      { item: "Obama Bun Cha", isVeg: false },
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
    items: [
      { item: "Dan Tat", isVeg: false },
      { item: "Pineapple Bun", isVeg: false },
      { item: "Paper Wrapped Cake", isVeg: false },
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
    items: [{ item: "Garlic Miso Fried Chicken", isVeg: false }],
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
    items: [
      { item: "Mushroom Goreng", isVeg: true },
      { item: "Laksa", isVeg: true },
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
    items: [
      { item: "Latte", isVeg: false },
      { item: "Croissant", isVeg: false },
      { item: "Han & Cheese Croissant", isVeg: false },
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
    items: [
      { item: "Mantoo", isVeg: false },
      { item: "Bolani", isVeg: false },
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
    items: [{ item: "Bicycle Coffee", isVeg: false }],
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
    items: [
      { item: "Beef Tofu Soup", isVeg: false },
      { item: "AYCE Korean BBQ", isVeg: false },
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
    items: [{ item: "Beef Tofu Soup", isVeg: false }],
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
    items: [{ item: "Fish Tacos", isVeg: false }],
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
    items: [
      { item: "Buttermilk Fried Chicken and Coleslaw Sandwich", isVeg: false },
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
    items: [
      { item: "Tea Leaf Salad", isVeg: true },
      { item: "Platha and Dip", isVeg: false },
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
    items: [{ item: "Old Fashion Sundae", isVeg: false }],
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
    items: [
      { item: "Garlicky Bacon Mac", isVeg: false },
      { item: "Gilroy Garlic Mac", isVeg: false },
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
    neighborhood: "Uptwon",
    items: [
      { item: "Jerk Chicken", isVeg: false },
      { item: "Plantains", isVeg: false },
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
    items: [{ item: "Mushroom Impossible", isVeg: true }],
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
    items: [{ item: "Chai Latte", isVeg: false }],
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
    items: [{ item: "Latte", isVeg: false }],
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
    items: [{ item: "Blueberry Donut", isVeg: true }],
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
    items: [{ item: "Pizza", isVeg: false }],
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
    items: [
      { item: "Shrimp Rice Roll", isVeg: false },
      { item: "Beef Rice Roll", isVeg: false },
      { item: "Pork and Preserved Egg Congee", isVeg: false },
      { item: "Dough Stick", isVeg: true },
      { item: "HK Style Milk Tea", isVeg: false },
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
    items: [
      { item: "Sticky Rice Shiumai", isVeg: true },
      { item: "Veg Meat Rice Roll", isVeg: true },
      { item: "Steamed Veg Shrimp Dumpling", isVeg: true },
      { item: "Veg Jelly Fish", isVeg: true },
    ],
    contact: [
      { phone: "212-233-2921", website: "https://buddhavegetarian.com/" },
    ],
  },
  {
    name: "Joe’s Steam Rice Roll",
    city: "Manhattan",
    neighborhood: "Chinatown",
    items: [
      { item: "Joe’s Signature Steam Rice Roll", isVeg: false },
      { item: "Curry Fish Ball", isVeg: false },
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
    items: [
      { item: "Shrimp Dumpling", isVeg: false },
      { item: "Pork Shumai", isVeg: false },
      { item: "Bean Curd Skin Rolls", isVeg: false },
      { item: "Chicken Feet", isVeg: false },
      { item: "Dan Tat", isVeg: false },
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
    items: [{ item: "Pan Fried Pork Dumpling", isVeg: false }],
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
    items: [{ item: "Cha Sui + Rice", isVeg: false }],
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
    items: [{ item: "Congee", isVeg: false }],
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
    items: [
      { item: "Dan Tat", isVeg: false },
      { item: "Portuguese Egg Tart", isVeg: false },
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
    items: [
      { item: "S.S. Classic Bánh Mì", isVeg: false },
      { item: "Vietnamese Ice Coffee", isVeg: false },
    ],
    contact: [
      { phone: "212-228-0588", website: "https://www.saigonshack.com/" },
    ],
  },
  {
    name: "Los Tacos No 1.",
    city: "Manhattan",
    neighborhood: "Chelsea Market",
    items: [
      { item: "Adobada Quesadilla", isVeg: false },
      { item: "Carne Asada Quesadilla", isVeg: false },
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
    items: [{ item: "Sansai hot udon", isVeg: true }],
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
    items: [
      { item: "Bagel with cream cheese", isVeg: false },
      { item: "Bagel with cream cheese and lox", isVeg: false },
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
    items: [
      { item: "Cheese Slice", isVeg: true },
      { item: "Peperoni Slice", isVeg: false },
    ],
    contact: [{ website: "http://www.joespizzanyc.com/" }],
  },
  {
    name: "Prince Street Pizza",
    city: "Manhattan",
    neighborhood: "Soho",
    items: [{ item: "Peperoni Square", isVeg: false }],
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
    items: [
      { item: "Grandma Pie", isVeg: false },
      { item: "Hotboi", isVeg: false },
    ],
    contact: [
      { phone: "212-334-3481", website: "hhttps://www.scarrspizza.com/" },
    ],
  },
  {
    name: "Mala Project",
    city: "Manhattan",
    neighborhood: "East Village",
    items: [{ item: "Dry Pot (Mild)", isVeg: false }],
    contact: [{ website: "https://www.malaproject.nyc/" }],
  },
  {
    name: "Love Mama",
    city: "Manhattan",
    neighborhood: "East Village",
    items: [{ item: "Rendang Nasi Lemak", isVeg: false }],
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
    items: [{ item: "Bone Marrow Pho", isVeg: false }],
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
    items: [{ item: "Original NY Plain Cheesecake", isVeg: false }],
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
    items: [{ item: "Brown Sugar DKA", isVeg: false }],
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
    items: [{ item: "Hawaiian Latte", isVeg: false }],
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
    items: [{ item: "Sparkling Espresso Cream", isVeg: false }],
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
    items: [{ item: "Cheeseburger", isVeg: false }],
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
    items: [{ item: "Jim Collins", isVeg: false }],
    contact: [
      { phone: "201-749-1876", website: "https://www.hiddenlanebar.com/" },
    ],
  },
  {
    name: "Mr. Purple",
    city: "Manhattan",
    neighborhood: "Lower East Side",
    items: [{ item: "Cider-car", isVeg: false }],
    contact: [
      { phone: "212-237-1790", website: "https://www.mrpurplenyc.com/" },
    ],
  },
  {
    name: "Attaboy",
    city: "Manhattan",
    neighborhood: "Lower East Side",
    items: [{ item: "Custom Drink at the Bar", isVeg: false }],
    contact: [{ website: "http://attaboy.us/nyc/" }],
  },
  {
    name: "Cooper’s Craft and Kitchen",
    city: "Manhattan",
    neighborhood: "East Village",
    items: [{ item: "Hudson North Standard Cider", isVeg: false }],
    contact: [{ website: "http://coopersnyc.com/" }],
  },
  {
    name: "Clinton Hall",
    city: "Manhattan",
    neighborhood: "Financial District",
    items: [
      { item: "Flyjack IPA", isVeg: false },
      { item: "Original Blend Cider", isVeg: false },
    ],
    contact: [
      { phone: "212-363-6000", website: "https://clintonhallny.com/fidi/" },
    ],
  },
  {
    name: "Barn Joo",
    city: "Manhattan",
    neighborhood: "Union Square",
    items: [
      { item: "Charlie Collins", isVeg: false },
      { item: "Truffle fries", isVeg: true },
    ],
    contact: [{ website: "https://www.barnjoo.com/" }],
  },
  {
    name: "Dead Rabbit",
    city: "Manhattan",
    neighborhood: "Financial District",
    items: [
      { item: "Dead Rabbit Dark Ale", isVeg: false },
      { item: "Brooklyn Lager", isVeg: true },
      { item: "Tuna Tartare Tacos", isVeg: true },
      { item: "Crispy Fish and Chips", isVeg: true },
    ],
    contact: [{ website: "https://www.deadrabbitnyc.com/" }],
  },
  {
    name: "Loreley Beer Garden",
    city: "Manhattan",
    neighborhood: "Bowery",
    items: [
      { item: "Bourbon Apple Cider", isVeg: false },
      { item: "Braufactum Progusta IPA", isVeg: true },
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
    items: [
      { item: "Watermelon Soju", isVeg: false },
      { item: "Pineapple Soju", isVeg: false },
      { item: "Honeydew Soju", isVeg: false },
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
    items: [
      { item: "Khao Man Gai", isVeg: false },
      { item: "Khao Kha Muu", isVeg: false },
    ],
    contact: [
      {
        website: "https://khaomangai.com/",
        order: "https://nongskhaomangai.square.site/",
      },
    ],
  },
  {
    name: "Pambiche",
    city: "Portland",
    neighborhood: "Kerns",
    items: [
      { item: "Arroz Con Pollo", isVeg: false },
      { item: "Ropa Veja", isVeg: false },
      { item: "Vaca Frita", isVeg: false },
      { item: "Tres Leches", isVeg: false },
    ],
    contact: [
      {
        website: "https://www.pambiche.com/",
      },
    ],
  },
  {
    name: "Broder Cafe",
    city: "Portland",
    neighborhood: "Hosford-Abernethy",
    items: [
      { item: "Aebleskiver (Danish Pancakes)", isVeg: false },
      { item: "Lefse (Norwegian Potato Crepe)", isVeg: false },
      { item: "Fölorade Ägg (Lost Eggs)", isVeg: false },
    ],
    contact: [
      {
        website: "https://www.broderpdx.com/",
      },
    ],
  },
  {
    name: "Jen’s Pastries",
    city: "Portland",
    neighborhood: "South Portland",
    items: [
      { item: "Berry Poptart", isVeg: false },
      { item: "Maple Oat Scone", isVeg: false },
      { item: "Garlic Croissant", isVeg: false },
    ],
    contact: [
      {
        website: "https://www.jenspdx.com/",
      },
    ],
  },
  {
    name: "Sabor Casero Pupuseria",
    city: "Portland",
    neighborhood: "Woodlawn",
    items: [
      { item: "Pupusa with pork and cheese", isVeg: false },
      { item: "Pupusa with bean and cheese", isVeg: false },
    ],
    contact: [
      {
        phone: "503-317-9328",
      },
    ],
  },
  {
    name: "Ken’s Artisan Pizza",
    city: "Portland",
    neighborhood: "Kerns",
    items: [
      { item: "Margherita", isVeg: false },
      { item: "Fennel Sausage & Onions", isVeg: false },
    ],
    contact: [
      {
        website: "https://kensartisan.com/pizza",
        order: "https://nongskhaomangai.square.site/",
      },
    ],
  },
  {
    name: "Lechon",
    city: "Portland",
    neighborhood: "Downtown",
    items: [
      { item: "White Corn And Cheese Fritters", isVeg: true },
      { item: "Peruvian Fried Chicken Bites", isVeg: false },
      { item: "Pork Belly Baocitos", isVeg: false },
    ],
    contact: [
      {
        website: "https://lechonpdx.com/menu",
        directions:
          "https://www.google.com/maps/dir//Lechon,+Southwest+Naito+Parkway,+Portland,+OR/@45.551687,-122.7457459,12z/data=!3m1!5s0x80857e735be18845:0x8ccf98710399e5dd!4m8!4m7!1m0!1m5!1m1!1s0x54950a07af647a0b:0x8c454aa10fab612a!2m2!1d-122.6707479!2d45.5212647",
      },
    ],
  },
  {
    name: "Gravy",
    city: "Portland",
    neighborhood: "Boise",
    items: [{ item: "Fried Chicken with Gravy", isVeg: false }],
    contact: [
      {
        website: "https://gravyrestaurant.com/",
        directions:
          "https://www.google.com/maps/dir//Gravy,+North+Mississippi+Avenue,+Portland,+OR/@45.551687,-122.7457459,12z/data=!3m2!4b1!5s0x80857e735be18845:0x8ccf98710399e5dd!4m8!4m7!1m0!1m5!1m1!1s0x5495a76bad32c0af:0x4caaadead7350eff!2m2!1d-122.6756663!2d45.5517081",
      },
    ],
  },
  {
    name: "Blue Star Donut",
    city: "Portland",
    neighborhood: "South East Side",
    items: [
      { item: "Lemon Poppy Buttermilk Old-Fashioned", isVeg: false },
      { item: "Chocolate Buttermilk Old Fashioned", isVeg: false },
      { item: "Orange Olive Oil", isVeg: false },
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
    items: [
      { item: "Chicken Dinner", isVeg: false },
      { item: "Screen Door Mac & Cheese", isVeg: false },
    ],
    contact: [
      {
        website: "https://screendoorrestaurant.com/",
        order: "https://direct.chownow.com/order/11490/locations/15935",
      },
    ],
  },
  {
    name: "Jam on Hawthorne",
    city: "Portland",
    neighborhood: "Hawthorne",
    items: [
      { item: "Bennie Hashbrowns", isVeg: false },
      { item: "Corned Beef Hash", isVeg: false },
    ],
    contact: [
      {
        website: "https://www.jamonhawthorne.com/",
      },
    ],
  },
  {
    name: "Sengatera Ethiopian Restaurant",
    city: "Portland",
    neighborhood: "Kings",
    items: [{ item: "Senga-tera special", isVeg: false }],
    contact: [
      {
        phone: "503-288-3787",
        website: "https://sengateraethiopianrestaurant.com/index.html",
      },
    ],
  },
  {
    name: "Fried Egg I’m In Love",
    city: "Portland",
    neighborhood: "Hawthorne",
    items: [
      { item: "Yolko Ono", isVeg: false },
      { item: "Egg Zeppelin", isVeg: false },
    ],
    contact: [
      {
        website: "https://www.friedegglove.com/",
        order: "https://www.friedegglove.com/orderonline",
      },
    ],
  },
  {
    name: "Nicholas Restaurant",
    city: "Portland",
    neighborhood: "Buckman Neighborhood",
    items: [
      { item: "Meat Mezza", isVeg: false },
      { item: "Vegetarian Mezza", isVeg: true },
    ],
    contact: [
      {
        website: "https://www.nicholasrestaurant.com/",
        order: "https://www.nicholasrestaurant.com/order-now",
      },
    ],
  },
  {
    name: "Stammisch",
    city: "Portland",
    neighborhood: "Kerns",
    items: [
      { item: "Currywurst", isVeg: false },
      { item: "Wienerschnitzel", isVeg: true },
    ],
    contact: [
      {
        website: "https://www.stammtischpdx.com/",
        phone: "503-206-7983",
      },
    ],
  },
  {
    name: "Nepali Kitchen and Chai Garden",
    city: "Portland",
    neighborhood: "Beaumont-Wilshire",
    items: [
      { item: "Chai", isVeg: false },
      { item: "Pork Momo", isVeg: false },
      { item: "Chicken Curry", isVeg: false },
    ],
    contact: [
      {
        phone: "(503) 477-6683",
        website: "https://cybergardencafenepali-kitchen.business.site/",
      },
    ],
  },
  {
    name: "Sushi Ohana",
    city: "Portland",
    neighborhood: "Irvington",
    items: [{ item: "Salmon", isVeg: false }],
    contact: [
      {
        website: "https://www.sushiohanapdx.com/",
        order: "https://www.sushiohanapdx.com/order-online-takeout-delivery",
      },
    ],
  },
  {
    name: "Pine State Biscuit",
    city: "Portland",
    neighborhood: "Ladd’s Addition",
    items: [
      { item: "The Reggie", isVeg: false },
      { item: "Biscuit and Jam", isVeg: true },
    ],
    contact: [
      {
        website: "https://pinestatebiscuits.com/",
        order: "https://pine-state-biscuits.square.site/",
      },
    ],
  },
  {
    name: "Botto’s BBQ",
    city: "Portland",
    neighborhood: "Hosford-Abernethy",
    items: [
      { item: "Brisket", isVeg: false },
      { item: "Potato Salad", isVeg: false },
      { item: "Baked Mac+Cheese", isVeg: false },
    ],
    contact: [
      {
        website: "https://bottosbbq.com/",
        order: "https://bottosbbq.square.site/",
      },
    ],
  },
  {
    name: "Matt’s BBQ",
    city: "Portland",
    neighborhood: "Boise",
    items: [
      { item: "Sliced Brisket", isVeg: false },
      { item: "Cherry Chipotle BBQ Sauce", isVeg: false },
    ],
    contact: [
      {
        website: "https://www.mattsbbqpdx.com/",
        order: "https://www.mattsbbqpdx.com/order-now/",
      },
    ],
  },
  {
    name: "Portland Farmers Market at PSU",
    city: "Portland",
    neighborhood: "Downtown",
    items: [
      { item: "Molly’s Tamales - Pork Tamale", isVeg: false },
      { item: "Taste of Old Poland - Pierogi", isVeg: false },
    ],
    contact: [
      {
        directions:
          "https://www.google.com/maps/dir//Portland+Farmers+Market+at+PSU,+Southwest+Park+Avenue,+Portland,+OR/@45.5479557,-122.8739699,11.05z/data=!3m1!5s0x80857e735be18845:0x8ccf98710399e5dd!4m8!4m7!1m0!1m5!1m1!1s0x54950a171e104107:0xddcd62c44c34e5!2m2!1d-122.6848342!2d45.5123034",
      },
    ],
  },
  {
    name: "Deschutes",
    city: "Portland",
    neighborhood: "Pearl District",
    items: [{ item: "Fresh Squeezed IPA", isVeg: false }],
    contact: [
      {
        website:
          "https://www.deschutesbrewery.com/visit-us/portland-public-house/",
      },
    ],
  },
  {
    name: "A Roadside Attraction",
    city: "Portland",
    neighborhood: "Buckman Neighborhood",
    items: [],
    contact: [
      {
        website: "https://www.instagram.com/roadsidepdx/?hl=en",
      },
    ],
  },
  {
    name: "Piroshky Piroshky",
    city: "Seattle",
    neighborhood: "Downtown",
    items: [{ item: "Salmon piroshky", isVeg: false }],
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
    items: [
      { item: "Pork Tamale", isVeg: false },
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
    items: [
      { item: "Tuna Poke Bowl", isVeg: false },
      { item: "Chirashi Bowl", isVeg: false },
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
    items: [
      { item: "Happy Hour Sushi Set B", isVeg: false },
      { item: "Happy Hour Sushi Set Deluxe", isVeg: false },
      { item: "Happy Hour Lucky 7", isVeg: false },
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
    items: [
      { item: "Pad See Ew", isVeg: false },
      { item: "Thai Iced Tea", isVeg: false },
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
    items: [{ item: "Deluxe Burger", isVeg: false }],
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
    items: [
      { item: "Croissant", isVeg: false },
      { item: "Cheddar Lye Roll", isVeg: false },
      { item: "Latte", isVeg: false },
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
    items: [{ item: "Drip Coffee", isVeg: false }],
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
    items: [
      { item: "Snickerdoodle Cookie Bites", isVeg: false },
      { item: "Peanut Butter Cups", isVeg: false },
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
    items: [{ item: "Dark Decadence", isVeg: false }],
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
    items: [],
    contact: [
      {
        website: "https://optimismbrewing.com/",
      },
    ],
  },
];

export default data;
