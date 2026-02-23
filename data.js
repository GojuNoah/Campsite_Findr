const nationalForests = [
  { 
    name: "Ouachita National Forest", 
    latitude: 34.500416, 
    longitude: -94.500687, 
    link: "https://www.fs.usda.gov/r08/ouachita",
    dispersedCampingAllowed: true,
    imageURL: "https://www.fs.usda.gov/sites/nfs/files/styles/hero/public/legacy-media/ouachita/Hero%20Image%202%20Flatside%20Wilderness.jpg?h=f7d9296c&itok=MiVkb8CU", 
    description: "Located in both Arkansas and Oklahoma, the Ouachita National Forest is home to rolling hills, pristine lakes and geological wonders."
  },
  {
    name: "Allegheny National Forest",
    latitude: 41.6488,
    longitude: 79.0061,
    link: "https://www.fs.usda.gov/r09/allegheny",
    dispersedCampingAllowed: true,
    imageURL: "https://www.fs.usda.gov/sites/nfs/files/styles/hero/public/r09/allegheny/image/20250103_BeaverMeadows_0.jpg?h=19f14c2c&itok=HNds1VeZ",
    description: "Established in 1923, the Allegheny National Forest is comprised of over half a million acres in the northwest corner of Pennsylvania."
  },
  {
    name: "Angeles National Forest",
    latitude: 34.4113,
    longitude: 118.1751,
    link: "https://www.fs.usda.gov/r05/angeles",
    dispersedCampingAllowed: true,
    imageURL: "https://www.fs.usda.gov/sites/nfs/files/styles/hero/public/legacy-media/angeles/Angeles%20NF%20Hero%20Image%201000%20pixels.jpg?h=9624e4e4&itok=0V-KKtiI",
    description: "From the high desert to mountains, the forest is the backyard playground to 20+ M people in the Greater Los Angeles Metro Area."
  },
  {
    name: "Angelina National Forest",
    latitude: 31.4949,
    longitude: 94.7749,
    link: "https://www.fs.usda.gov/r08/texas/recreation/angelina-national-forest",
    dispersedCampingAllowed: true,
    imageURL: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Angelina_National_Forest_sign.jpg",
    description: "Located in the heart of east Texas, the 153,179-acre Angelina National Forest is located in Angelina, Nacogdoches, San Augustine and Jasper counties."
  },
  {
    name: "Apache-Sitgreaves National Forests",
    latitude: 34.1408,
    longitude: 109.2865,
    link: "https://www.fs.usda.gov/r03/apache-sitgreaves",
    dispersedCampingAllowed: true,
    imageURL: "https://www.fs.usda.gov/sites/nfs/files/styles/hero/public/r03/apache-sitgreaves/image/Rim%20Overlook%20Winter%20SCox.JPG?h=c0c2b5e3&itok=O6pZjPVW",
    description: "The ASNF is home to a large part of the Mogollon Rim and White Mountains, rich in beauty and tranquility. Water is a major attraction with 24 lakes and reservoirs and more than 400 miles of rivers and streams—more than can be found in any other southwestern forest."
  },
  {
    name: "Apalachicola National Forest",
    latitude: 30.1931051,
    longitude: 84.6939571,
    link: "https://www.fs.usda.gov/r08/florida/recreation/apalachicola-national-forest",
    dispersedCampingAllowed: true,
    imageURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Apalachicola_pond.JPG/330px-Apalachicola_pond.JPG",
    description: "The Apalachicola National Forest is home to some of the most unique animal and plant species in the world. Here, visitors can enjoy safe, family-friendly activities such as fishing, hunting, hiking and trail-riding while surrounded by tranquil, diverse ecosystems."
  },
  {
    name: "Arapaho and Roosevelt National Forests & Pawnee National Grassland",
    latitude: 40.559131,
    longitude: -105.086411,
    link: "https://www.fs.usda.gov/r02/arp",
    dispersedCampingAllowed: true,
    imageURL: "https://www.fs.usda.gov/sites/nfs/files/styles/hero/public/r02/arp/image/IMG_2209%20copy.jpg?h=9fc2a335&itok=kLFItDgF",
    description: "Located in north central Colorado and one of the most-visited National Forests in the country, the Arapaho and Roosevelt National Forests and Pawnee National Grassland encompass 1.5 million acres across five districts and are home to some of the most Epic Adventures in the Rocky Mountains."
  },
  {
    name: "Ashley National Forest",
    latitude: 40.6466,
    longitude: 110.0989,
    link: "https://www.fs.usda.gov/r04/ashley",
    dispersedCampingAllowed: true,
    imageURL: "https://www.fs.usda.gov/sites/nfs/files/styles/hero/public/r04/ashley/image/High%20Altitude%20Lake%20with%20Reflection%20-%20Peter%20Langley.jpg?h=b0337495&itok=FYoilVoi",
    description: "The Ashley National Forest encompasses about 1.4 million acres in northeastern Utah and southwestern Wyoming.  Of the total acres, 276,175 are High Uintas Wilderness."
  },
  {
    name: "Beaverhead-Deerlodge National Forest",
    latitude: 44.7964,
    longitude: -111.5613,
    link: "https://www.fs.usda.gov/r01/beaverhead-deerlodge",
    dispersedCampingAllowed: true,
    imageURL: "https://www.fs.usda.gov/sites/nfs/files/styles/hero/public/r01/beaverhead-deerlodge/image/BD%20Sunset%20Cropped.jpg?h=ba019bef&itok=oayrRZtv",
    description: "The forest provides timber, minerals, grazing lands, and breath-taking scenery for a wide variety of recreational pursuits. Whether it's wilderness trekking in the Anaconda-Pintler or Lee Metcalf wildernesses, driving the Gravelly Range Road or Pioneer Mountains Scenic Byway, or camping in one of the campgrounds in the forest, the Beaverhead-Deerlodge has it all."
  },
  {
    name: "Bienville National Forest",
    latitude: 32.2643,
    longitude: 89.4742,
    link: "https://www.fs.usda.gov/r08/mississippi/offices/bienville-national-forest",
    dispersedCampingAllowed: true,
    imageURL: "https://www.fs.usda.gov/sites/nfs/files/styles/thumbnail/public/r08/mississippi/image/DSCN0599.jpg?h=827069f2",
    description: "Marathon Lake and Shongelo Lake are primary recreation areas with activities ranging from picnicking to fishing."
  },
  {
    name: "Bighorn National Forest",
    latitude: 44.54541,
    longitude: 107.36311,
    link: "https://www.fs.usda.gov/r02/bighorn",
    dispersedCampingAllowed: true,
    imageURL: "https://www.fs.usda.gov/sites/nfs/files/styles/hero/public/r02/bighorn/image/Winter%20backdrop%20pine.JPG?h=ec6a9788&itok=gzxOU-zC",
    description: "Located in north-central Wyoming, the Bighorn Mountains are a sister range of the Rocky Mountains. Conveniently located halfway between Mt. Rushmore and Yellowstone National Park, the Bighorns are a great vacation destination in themselves. Visitors experience a diverse landscape - from grasslands to alpine meadows, clear lakes to glacial carved valleys and rolling hills to sheer mountain cliffs."
  },
  {
    name: "Bitterroot National Forest",
    latitude: 45.9166,
    longitude: 114.2843,
    link: "https://www.fs.usda.gov/r01/bitterroot",
    dispersedCampingAllowed: true,
    imageURL: "https://www.fs.usda.gov/sites/nfs/files/styles/hero/public/r01/bitterroot/image/Winter_ski.jpg?h=fba44219&itok=Qgnjv-1P",
    description: "You will find this 1.6-million-acre forest in southwest Montana and Idaho to be a priceless national heritage.  Half of the forest is dedicated to the largest expanse of continuous pristine wilderness in the lower 48 states - the Selway Bitterroot, Frank Church River of No Return, and the Anaconda Pintler."
  },
  {
    name: "Black Hills National Forest",
    latitude: 44.0590000,
    longitude: 103.7410000,
    link: "https://www.fs.usda.gov/r02/blackhills",
    dispersedCampingAllowed: true,
    imageURL: "https://www.fs.usda.gov/sites/nfs/files/styles/hero/public/r02/blackhills/image/black_elk_peak_by_Ricardo%20Loza_hcrd.jpg?h=6d68006b&itok=2_JcmUJt",
    description: "The Black Hills, in western SD and northeastern WY, consists of 1.2 million acres of forested hills and mountains, approximately 110 miles long and 70 miles wide."
  },
  {
    name: "Black Kettle National Grasslands",
    latitude: 35.6667,
    longitude: 99.7507,
    link: "https://www.fs.usda.gov/r03/cibola/recreation/black-kettle-national-grasslands",
    dispersedCampingAllowed: true,
    imageURL: "https://www.nps.gov/waba/planyourvisit/images/th.jpg?maxwidth=650&autorotate=false&quality=78&format=webp",
    description: "The Black Kettle National Grassland contains 31,300 acres with 30,724 acres located near Cheyenne, Oklahoma, and the remaining 576 acres located near Canadian, Texas and comprising the Lake Marvin Recreation Area."
  },
  {
    name: "Boise National Forest",
    latitude: 44.1666,
    longitude: 115.5012,
    link: "https://www.fs.usda.gov/r04/boise",
    dispersedCampingAllowed: true,
    imageURL: "https://www.fs.usda.gov/sites/nfs/files/styles/hero/public/r04/boise/image/Scenics-mountains-Boise-IDRD-09.jpg?h=775d1889&itok=BWAJaJgq",
    description: "The Boise National Forest’s vast landscape spans over 2.5 million acres of diverse forest and grassland. Located northeast of Idaho’s capital city of Boise, recreationists can explore the North Fork Payette River Canyon at 2,800 feet in elevation to the nearly 10,000 foot peak of Trinity Mountain."
  },
  {
    name: "Bridger-Teton National Forest",
    latitude: 43.484,
    longitude: -110.7623,
    link: "https://www.fs.usda.gov/r04/bridger-teton",
    dispersedCampingAllowed: true,
    imageURL: "https://www.fs.usda.gov/sites/nfs/files/styles/hero/public/r04/bridger-teton/image/_MG_1183.JPG?h=0775493e&itok=T9Z9Nhof",
    description: "Located in Western Wyoming, the Bridger-Teton National Forest offers more than 3.4 million acres of public land for your enjoyment. With its pristine watersheds, abundant wildlife, and immense wildlands, the Bridger-Teton comprises a large part of the Greater Yellowstone Ecosystem, the largest intact ecosystem in the lower 48 states."
  },
  {
    name: "Buffalo Gap National Grassland",
    latitude: 43.49761,
    longitude: -102.76353,
    link: "https://www.fs.usda.gov/r02/nebraska/recreation/buffalo-gap-national-grassland",
    dispersedCampingAllowed: true,
    imageURL: "https://www.fs.usda.gov/sites/nfs/files/styles/hero/public/r02/nebraska/image/BGNG_Hoodoo_2019.jpg?h=fc6855ab&itok=arHbyoZ1",
    description: "The Buffalo Gap National Grassland, consisting of almost 600,000 acres, stretches from Kadoka, SD all the way to the tri-state border of South Dakota, Nebraska and Wyoming."
  },
  {
    name: "Caddo-LBJ National Grasslands",
    latitude: 33.4156,
    longitude: 97.6244,
    link: "https://www.fs.usda.gov/r08/texas/recreation/caddo-lbj-national-grasslands",
    dispersedCampingAllowed: true,
    imageURL: "https://www.fs.usda.gov/sites/nfs/files/styles/hero/public/r08/texas/image/Caddo%20LBJ%20grass%20and%20trees%20September%202023.jpg?h=80e98563&itok=j4eX97ge",
    description: "The Caddo and Lyndon B. Johnson (LBJ) National Grasslands are located in two areas northeast and northwest of the Dallas-Fort Worth metroplex."
  },
  {
    name: "Caribou-Targhee National Forest & Curlew National Grassland",
    latitude: 42.07178024,
    longitude: -112.6899233,
    link: "https://www.fs.usda.gov/r04/caribou-targhee",
    dispersedCampingAllowed: true,
    imageURL: "https://www.fs.usda.gov/sites/nfs/files/styles/hero/public/r04/caribou-targhee/image/20230716_061246%20%281%29.jpg?h=35160121&itok=4a5vymFg",
    description: "Caribou-Targhee National Forest beckons with rugged peaks, alpine trails, and dense woodlands, while the Curlew National Grassland unfolds in rolling sagebrush plains teeming with wildlife."
  },
  {
    name: "Carson National Forest",
    latitude: 36.5003,
    longitude: 106.2509,
    link: "https://www.fs.usda.gov/r03/carson",
    dispersedCampingAllowed: true,
    imageURL: "https://www.fs.usda.gov/sites/nfs/files/styles/hero/public/legacy-media/carson/Wheeler%20Peak.jpg?h=a6c55029&itok=LRfzY_RN",
    description: "The Carson National Forest spans 1.5 million acres of Northern New Mexico, encompassing portions of the Sangre de Cristo Mountains, San Juan Mountains and the San Juan Basin."
  },
  {
    name: "Cedar River National Grassland",
    latitude: 45.9552,
    longitude: 101.8443,
    link: "https://www.fs.usda.gov/r01/dpg/recreation/cedar-river-national-grassland",
    dispersedCampingAllowed: true,
    imageURL: "https://www.fs.usda.gov/sites/nfs/files/styles/hero/public/image/MES_0.jpg?h=19ad3fdd&itok=33glqZvP",
    description: "The Cedar River National Grassland is located in Sioux County and Grant County in southern North Dakota, United States. It has a land area of 6,717 acres."
  },
  {
    name: "Chattahoochee-Oconee National Forest",
    latitude: 34.7750,
    longitude: 84.0631,
    link: "https://www.fs.usda.gov/r08/chattahoochee-oconee",
    dispersedCampingAllowed: true,
    imageURL: "https://www.fs.usda.gov/sites/nfs/files/styles/hero/public/r08/chattahoochee-oconee/image/Chattahoochee-Oconee%20Background.jpg?h=bfa41935&itok=eKc5aFjY",
    description: "Featuring nearly 867,000 acres across 26 counties, thousands of miles of clear-running streams and rivers, approximately 850 miles of recreation trails, and dozens of campgrounds, picnic areas, and other recreation activity opportunities, these lands are rich in natural scenery, history and culture."
  },
  {
    name: "Chequamegon-Nicolet National Forest",
    latitude: 45.629,
    longitude: 89.386,
    link: "https://www.fs.usda.gov/r09/chequamegon-nicolet",
    dispersedCampingAllowed: true,
    imageURL: "https://www.fs.usda.gov/sites/nfs/files/styles/hero/public/r09/chequamegon-nicolet/image/edit%202.jpg?h=78b265b2&itok=OXaPpZN3",
    description: "The Chequamegon-Nicolet National Forest covers more than 1.5 million acres of Wisconsin's Northwoods."
  },
  {
    name: "Cherokee National Forest",
    latitude: 35.8402,
    longitude: 83.1542,
    link: "https://www.fs.usda.gov/r08/cherokee",
    dispersedCampingAllowed: true,
    imageURL: "https://www.fs.usda.gov/sites/nfs/files/styles/hero/public/r08/cherokee/image/DSC09434.jpg?h=bc3f34c3&itok=MEC_Qldj",
    description: "The Cherokee National Forest is the largest tract of public land in Tennessee spanning more than 660,000 acres in the Southern Appalachian Mountains."
  },
  {
    name: "Chippewa National Forest",
    latitude: 47.4075,
    longitude: 94.1394,
    link: "https://www.fs.usda.gov/r09/chippewa",
    dispersedCampingAllowed: true,
    imageURL: "https://www.fs.usda.gov/sites/nfs/files/styles/hero/public/r09/chippewa/image/MAIN%20WWW%20HERO-20231121-FS-Chippewa-2020.JPG?h=ebd95d84&itok=ilbefJCR",
    description: "There is snow place like the Chippewa National Forest.  Winter is a truly special time of year; fresh blankets of snow covering the trails, ice fishing, winter camping and clear cold nights made for stargazing, winter is the perfect time to get out and enjoy the Forest. "
  },
]
