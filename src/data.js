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
    neighborhood: "Mission",
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
    name: "Longbridge Pizza",
    city: "San Francisco",
    neighborhood: "Dogpatch",
    items: [
      { item: "Hot N’ Honey Pizza", isVeg: false },
      { item: "Peperoni Pizza", isVeg: false },
      { item: "Margherita Pizza", isVeg: true },
      { item: "NICO Pizza", isVeg: false },
      { item: "Meatballs", isVeg: false },
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
    name: "San Tung",
    city: "San Francisco",
    neighborhood: "Sunset",
    items: [{ item: "Dry Fried Chicken Wings", isVeg: false }],
    contact: [{ phone: "415-242-0828", website: "http://www.santung.net/" }],
  },
  {
    name: "Marugame Udon",
    city: "San Francisco",
    neighborhood: "Sunset",
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
    name: "Kevin’s Noodle House",
    city: "San Francisco",
    neighborhood: "Sunset",
    items: [
      {
        item: "#1 Đặc Biệt Xe Lửa (Special combo w/ thin slice of steak, well-done brisket, flank, tendon & tripe)",
        isVeg: false,
      },
      { item: "Phở Gà Xe Lửa (Chicken rice noodle soup)", isVeg: false },
      { item: "Café Đen Đá (Vietnamese ice black coffee)", isVeg: false },
    ],
    contact: [
      {
        phone: "415-664-0469",
        website: "https://kevinsnoodlehouse.com/",
        order: "https://kevinsnoodlehouse.com/locations.html#",
      },
    ],
  },
  {
    name: "Burma Superstar",
    city: "San Francisco",
    neighborhood: "Sunset",
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
