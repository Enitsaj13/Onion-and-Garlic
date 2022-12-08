import { COLORS } from 'theme'


const SLIDER = [
  {
    key: '1',
    title: 'Welcome to Onion and Garlic',
    text: 'We provide the best delivery service for your Filipino food cravings',
    image: require('assets/images/landing/logo.png'),
    backgroundColor: COLORS.primary,
  },
  {
    key: '2',
    title: 'Quality Food',
    text: 'We ensure the best quality of our food from every detail to its retail.',
    image: require('assets/images/landing/logo2.png'),
    backgroundColor: COLORS.cahel

  },
  {
    key: '3',
    title: 'Delicious Filipino Food',
    text: 'We offer impresive quality taste, serve hot at your door step and best service to fulfill your expectations.',
    image: require('assets/images/landing/logo3.png'),
    backgroundColor: COLORS.blue
  },
  
]

const CATEGORYData = [
  {
    id: '30',
    category: 'All',
  },
  {
    id: '31',
    category: 'Dishes',
  },
  {
    id: '32',
    category: 'Beverages',
  },
  {
    id: '33',
    category: 'Desserts',
  },
]

const FOODSData = [
  {
    id: 1,
    category: 'Dishes',
    name: 'Adobo',
    time: '🕒 60 mins.',
    capacity: '🍛 5 servings',
    price: 120,
    description:
      'Adobo is a popular Filipino dish made with meat, usually pork, chicken, or beef, that is marinated in vinegar, soy sauce, garlic, and black peppercorns before being slow-cooked in its own juices. The word adobo comes from the Spanish word adobar, which means "to marinate."',
    image: require('assets/images/dishes/adobo.png'),
  },
  {
    id: 2,
    category: 'Dishes',
    name: 'Sinigang',
    time: '🕒 70 mins.',
    capacity: '🍛 6 servings',
    price: 150,
    description:
      'Sinigang is a Filipino soup or stew characterized by its sour and savory taste. It is most often associated with tamarind (Filipino: sampalok), although it can use other sour fruits and leaves as the souring agent. It is one of the more popular dishes in Filipino cuisine. ',
    image: require('assets/images/dishes/sinigang.png'),
  },
  {
    id: 3,
    category: 'Dishes',
    name: 'Kare-Kare',
    time: '🕒 90 mins.',
    capacity: '🍛 8 servings',
    price: 200,
    description:
      'Kare-kare is a Filipino stew made with oxtail, beef, or vegetables, and is thickened with a peanut sauce. It is usually served with bagoong (shrimp paste) and atchara (pickled vegetables).',
    image: require('assets/images/dishes/karekare.png'),
  },
  {
    id: 4,
    category: 'Dishes',
    name: 'Menudo',
    time: '🕒 80 mins.',
    capacity: '🍛 6 servings',
    price: 150,
    description:
      'Menudo is a Filipino stew made with tripe, liver, and pork. It is usually served with rice. The stew is flavored with tomato sauce, paprika, and chili peppers. It is often served with a side of pickled papaya.',
    image: require('assets/images/dishes/menudo.png'),
  },
  {
    id: 5,
    category: 'Dishes',
    name: 'Pinakbet',
    time: '🕒 50 mins.',
    capacity: '🍛 5 servings',
    price: 80,
    description:
      'Pinakbet (also called pakbet or pinak bet) is an indigenous Filipino dish from the northern regions of the Philippines. Pinakbet is made from mixed vegetables sautéed in fish or shrimp sauce. The word is the contracted form of the Ilokano word pinakebbet, meaning "shrunk" or "shriveled.',
    image: require('assets/images/dishes/pinakbet.png'),
  },
  {
    id: 6,
    category: 'Dishes',
    name: 'Lechon Kawali',
    time: '🕒 60 mins.',
    capacity: '🍛 5 servings',
    price: 140,
    description:
      'Lechon Kawali,  also known as lechon de carajay or litsong kawali in Tagalog, is a Filipino recipe consisting of pork belly slabs deep-fried in a pan or wok (kawali). It is seasoned beforehand, cooked then served in cubes. It is usually accompanied with a dipping sauce such as sarsa ng litson (lechon sauce) made from vinegar and pork liver or toyomansi (soy sauce with calamansi).',
    image: require('assets/images/dishes/lechon.png'),
  },
  {
    id: 7,
    category: 'Dishes',
    name: 'Tinola',
    time: '🕒 50 mins.',
    capacity: '🍛 6 servings',
    price: 100,
    description:
      'Tinola is a Filipino soup usually served as a main entrée with white rice. Traditionally, this dish is cooked with chicken or fish, wedges of papaya, and leaves of the siling labuyo chili pepper in broth flavored with ginger, onions and fish sauce.',
    image: require('assets/images/dishes/tinola.png'),
  },
  {
    id: 8,
    category: 'Dishes',
    name: 'Lumpia',
    time: '🕒 25 mins.',
    capacity: '🍛 9 servings',
    price: 60,
    description:
      'Lumpia are various types of spring rolls commonly found in the Philippines. Lumpia are made of thin paper-like or crepe-like pastry skin called "lumpia wrapper" enveloping savory or sweet fillings.',
    image: require('assets/images/dishes/lumpia.png'),
  },
  {
    id: 9,
    category: 'Dishes',
    name: 'Sisig',
    time: '🕒 100 mins.',
    capacity: '🍛 4 servings',
    price: 120,
    description:
      'Sisig is a Filipino dish made from parts of a pigs face and belly, and chicken liver which is usually seasoned with calamansi, onions, and chili peppers. It originates from the Pampanga region in Luzon.',
    image: require('assets/images/dishes/sisig.png'),
  },
  {
    id: 10,
    category: 'Dishes',
    name: 'Bulalo',
    time: '🕒 200 mins.',
    capacity: '🍛 7 servings',
    price: 180,
    description:
      'Bulalo is a beef dish from the Philippines. It is a light colored soup that is made by cooking beef shanks and bone marrow until the collagen and fat has melted into the clear broth. It typically includes leafy vegetables (like pechay or cabbage), corn on the cob, scallions, onions, garlic, ginger, and fish sauce. Potatoes, carrots, or taro can also be added.',
    image: require('assets/images/dishes/bulalo.png'),
  },
]

const DESSERTSData = [
  {
    id: 11,
    category: 'Desserts',
    name: 'Binatog',
    time: '🕒 25 mins.',
    capacity: '🍛 4 servings',
    price: 50,
    description:
      'Binatog is a Filipino dessert made from glutinous rice flour, coconut milk, and sugar. It is usually served with latik, a sweetened coconut sauce. It is also known as biko, bibingka, and puto bumbong.',
    image: require('assets/images/desserts/binatog.png'),
  },
  {
    id: '12',
    category: 'Desserts',
    name: 'Kutsinta',
    time: '🕒 80 mins.',
    capacity: '🍛 6 servings',
    price: 60,
    description:
      'Puto cuchinta or kutsinta is a type of steamed rice cake found throughout the Philippines. It is made from a mixture of tapioca or rice flour, brown sugar and lye, enhanced with yellow food coloring or annatto extract, and steamed in small ramekins.',
    image: require('assets/images/desserts/kutsinta.png'),
  },
  {
    id: '13',
    category: 'Desserts',
    name: 'Ginataang Monggo',
    time: '🕒 40 mins.',
    capacity: '🍛 8 servings',
    price: 70,
    description:
      'Ginataang munggo, also known as lelut balatung in pampanga or tinutungang munggo, is a Filipino glutinous rice gruel dessert with toasted mung beans, coconut milk, and sugar. It is typically flavored with vanilla or pandan leaves. Corn and fruits like jackfruit or banana may also be added.',
    image: require('assets/images/desserts/ginataangmonggo.png'),
  },
  {
    id: '14',
    category: 'Desserts',
    name: 'Palitaw',
    time: '🕒 15 mins.',
    capacity: '🍛 9 servings',
    price: 40,
    description: `Palitaw are called “Palitaw” derived from the word “Litaw” meaning “to float” or “to surface”. This Palitaw Recipe, commonly served in New Year's since it is believed to help the luck to “float up” or show up. This belief came from how Palitaw is cooked in boiling water and floats up when ready. After the sticky rice discs emerge, they are coated with sugar or other flavorings.`,
    image: require('assets/images/desserts/palitaw.png'),
  },
  {
    id: '15',
    category: 'Desserts',
    name: 'Biko',
    time: '🕒 40 mins.',
    capacity: '🍛 8 servings',
    price: 140,
    description: `Biko is a sweet rice cake from the Philippines. It is made of coconut milk, brown sugar, ginger, and glutinous rice. It is usually topped with latik. It is a type of kalamay dish and is prepared similarly, except the rice grains are not ground into a paste. They are also sometimes packaged and sold as suman.`,
    image: require('assets/images/desserts/biko.png'),
  },
  {
    id: '16',
    category: 'Desserts',
    name: 'Leche Flan',
    time: '🕒 45 mins.',
    capacity: '🍛 4 servings',
    price: 80,
    description: `Leche flan is a custard dessert made with milk, eggs, and sugar. It is a popular dessert in the Philippines, where it is known as leche flan. It is also popular in other countries in Southeast Asia, such as Indonesia, Malaysia, Singapore, and Thailand. It is also known as creme caramel in France and Spain.`,
    image: require('assets/images/desserts/lecheflan.png'),
  },
  {
    id: '17',
    category: 'Desserts',
    name: 'Maja Blanca',
    time: '🕒 35 mins.',
    capacity: '🍛 5 servings',
    price: 90,
    description: `Maja Blanca is a Filipino dessert made from coconut milk, cornstarch, and sugar. Often called Coconut Pudding, this luscious dessert is easy to make and the ingredients are very common.Unknown to many, the original Maja Blanca Recipe does not include corn and milk. In this recipe, I added whole sweet kernel corn and condensed milk for added taste and a more creamy texture.Since Christmas season is just around the corner, this would make a very good holiday dessert especially during potluck Christmas Parties and Noche Buena as well.`,
    image: require('assets/images/desserts/majablanca.png'),
  },
  {
    id: '18',
    category: 'Desserts',
    name: 'Pastillas de Leche',
    time: '🕒 10 mins.',
    capacity: '🍛 4 servings',
    price: 50,
    description: `Pastillas de Leche is a Filipino milk candy made from condensed milk, butter, and sugar. It is a popular Filipino dessert and is often served during special occasions like birthdays, Christmas, and New Year. It is also a popular pasalubong or gift to bring home to family and friends.`,
    image: require('assets/images/desserts/pastillas.png'),
  },
  {
    id: '19',
    category: 'Desserts',
    name: 'Cassava Suman',
    time: '🕒 30 mins.',
    capacity: '🍛 7 servings',
    price: 80,
    description: `Cassava Suman is a Filipino dessert made from grated cassava, coconut milk, and sugar. It is a popular dessert in the Philippines, especially during the Christmas season. It is also a popular pasalubong or gift to bring home to family and friends.`,
    image: require('assets/images/desserts/cassavasuman.png'),
  },
  {
    id: '20',
    category: 'Desserts',
    name: 'Maruya',
    time: '🕒 10 mins.',
    capacity: '🍛 4 servings',
    price: 40,
    description: `Maruya is the perfect snack or dessert! Coated with a fluffy batter and fried to golden perfection, these banana fritters are sure to be a family favorite. It is commonly eat during snack time or merienda. It is also a popular pasalubong or gift to bring home to family and friends.`,
    image: require('assets/images/desserts/maruya.png'),
  },
]

const BEVERAGESData = [
  {
    id: '21',
    category: 'Beverages',
    name: 'Mais Con Yelo',
    time: '🕒 10 mins.',
    capacity: '🍛 5 servings',
    price: 50,
    description: `Mais con yelo is a layered dessert consisting of sweet corn, shaved or crushed ice, sweet milk, and a scoop of ice cream. It  is a traditional dessert of crushed ice layered with corn kernels and sweetened milk. It is a popular dessert in the Philippines, especially during the summer season. `,
    image: require('assets/images/beverages/maisconyelo.png'),
  },
  {
    id: '22',
    category: 'Beverages',
    name: `Sago't Gulaman`,
    time: '🕒 25 mins.',
    capacity: '🍛 6 servings',
    price: 30,
    description: `A local Filipino beverage made of brown sugar, water, gelatin, and tapioca pearls is called Sago at Gulaman. Sago refers to tapioca pearls while gulaman is the Filipino term for gelatin. This recipe is somewhat a special version because both ingredients are combined together. It is a popular dessert in the Philippines, especially during the summer season. `,
    image: require('assets/images/beverages/sagoatgulaman.png'),
  },
  {
    id: '23',
    category: 'Beverages',
    name: 'Halo-Halo',
    time: '🕒 10 mins.',
    capacity: '🍛 8 servings',
    price: 55,
    description: `Halo-halo is a famous dessert in the Philippines. It is composed of various ingredients that are all mixed together, along with shaved ice and evaporated milk.
    Some of he common ingredient used to make Halo-halo are sugar palm (kaong), boiled kidney beans, flat rice crisps (pinipig), coconut gel (nata de coco), ripe jackfruit, colored gelatin, tapioca pearls, sweetened plantains, and macapuno.`,
    image: require('assets/images/beverages/halohalo.png'),
  },
  {
    id: '24',
    category: 'Beverages',
    name: 'Buko Pandan',
    time: '🕒 10 mins.',
    capacity: '🍛 6 servings',
    price: 40,
    description: `Buko Pandan is a popular Filipino Dessert made using young coconut,  pandan leaves (or Screwpine leaves), and sago pearls. At first glance, this dessert dish can be mistaken for Buko Salad. Both desserts are almost similar visually. How to Make Buko Pandan Traditionally, this dish is prepared by boiling Pandan leaves in order to extract its essence. The essence is then mixed with coconut milk and sago pearls. `,
    image: require('assets/images/beverages/bukopandan.png'),
  },
  {
    id: '25',
    category: 'Beverages',
    name: 'Ice Scramble',
    time: '🕒 10 mins.',
    capacity: '🍛 4 servings',
    price: 20,
    description: `Iskrambol, also known as ice scramble, is a Filipino frozen dessert made from shaved ice with banana extract and evaporated milk with sugar It is then topped with a variety of ingredients including powdered milk, marshmallows, strawberry syrup, chocolate syrup, pinipig, tapioca pearls, and sprinkles, among others.`,
    image: require('assets/images/beverages/icescramble.png'),
  },
  {
    id: '26',
    category: 'Beverages',
    name: 'Taho',
    time: '🕒 45 mins.',
    capacity: '🍛 6 servings',
    price: 30,
    description: `Tahô is a Philippine snack food made of fresh soft/silken tofu, arnibal, and sago pearl. This staple comfort food is a signature sweet and tahô peddlers can be found all over the country.`,
    image: require('assets/images/beverages/taho.png'),
  },
  {
    id: '27',
    category: 'Beverages',
    name: 'Calamansi Juice',
    time: '🕒 10 mins.',
    capacity: '🍛 9 servings',
    price: 60,
    description: `Calamansi Juice is made of freshly squeezed calamondin juice and simple syrup. This Filipino-style limeade is tangy, refreshing, and a delicious way to keep cool all year long. It is a popular drink in the Philippines, especially during the summer season`,
    image: require('assets/images/beverages/calamansi.png'),
  },
  {
    id: '28',
    category: 'Beverages',
    name: 'Filipino Salabat',
    time: '🕒 15 mins.',
    capacity: '🍛 4 servings',
    price: 90,
    description: `Salabat is a traditional Filipino tea made with fresh ginger. The spicy heat of the ginger soothes the sore throat and provides comfort especially during cold and flu seasons. It is also a great way to boost your immune system. `,
    image: require('assets/images/beverages/salabat.png'),
  },
  {
    id: '29',
    category: 'Beverages',
    name: 'Strawberry Wine',
    time: '🕒 20 mins.',
    capacity: '🍛 7 servings',
    price: 120,
    description: `Strawberry Wine is a refreshing and fruity wine made with fresh strawberries. It is a great way to use up your leftover strawberries. This wine is perfect for summer parties and gatherings. `,
    image: require('assets/images/beverages/strawberrywine.png'),
  },
]

const CAROUSELData = [
  {
    id: '33',
    name: 'Chicken Adobo with 3 bay leaves.',
    time: '⏱️ 60 mins',
    capacity: '🍛 5 servings',
    image: require('assets/images/carousel/adobo.png'),
  },
  {
    id: '34',
    name: 'Bulalo with income tax return.',
    time: '⏱️ 200 mins',
    capacity: '🍛 8 servings',
    image: require('assets/images/carousel/bulalo.png'),
  },
  {
    id: '35',
    name: 'Lechon Kawali with scuba diving. ',
    time: '⏱️ 140 mins',
    capacity: '🍛 5 servings',
    image: require('assets/images/carousel/lechon-kawali.png'),
  },
  {
    id: '36',
    name: 'Sisig sa Mang Inasal.',
    time: '⏱️ 100 mins',
    capacity: '🍛 4 servings',
    image: require('assets/images/carousel/sisig.png'),
  },
  {
    id: '37',
    name: 'Kare-Kare ni Mare.',
    time: '⏱️ 120 mins',
    capacity: '🍛 6 servings',
    image: require('assets/images/carousel/kare-kare.png'),
  },
  {
    id: '38',
    name: 'Shanghai Naman Dyan.',
    time: '⏱️ 30 mins',
    capacity: '🍛 7 servings',
    image: require('assets/images/carousel/lumpia.png'),
  },
  {
    id: '39',
    name: 'Biko kasi ikaw lang BIBI ko.',
    time: '⏱️ 40 mins',
    capacity: '🍛 8 servings',
    image: require('assets/images/carousel/biko.png'),
  },
  {
    id: '40',
    name: 'Leche Flan with prosperity.',
    time: '⏱️ 50 mins',
    capacity: '🍛 9 servings',
    image: require('assets/images/carousel/lecheflan.png'),
  },
  {
    id: '41',
    name: 'Maja Blanca with Maja Salvador.',
    time: '⏱️ 35 mins',
    capacity: '🍛 10 servings',
    image: require('assets/images/carousel/majablanca.png'),
  },
  {
    id: '42',
    name: 'Lulubog lilitaw, Palitaw.',
    time: '⏱️ 45 mins',
    capacity: '🍛 6 servings',
    image: require('assets/images/carousel/palitaw.png'),
  },
  {
    id: '43',
    name: 'Taho para sa mga taong naglaho.',
    time: '⏱️ 45 mins',
    capacity: '🍛 10 servings',
    image: require('assets/images/carousel/taho.png'),
  },
  {
    id: '44',
    name: 'Ice Scramble with oven toaster.',
    time: '⏱️ 10 mins',
    capacity: '🍛 5 servings',
    image: require('assets/images/carousel/icescramble.png'),
  },
  {
    id: '45',
    name: 'Salabat with life insurance.',
    time: '⏱️ 15 mins',
    capacity: '🍛 4 servings',
    image: require('assets/images/carousel/sagoatgulaman.png'),
  },
]

const FAQS = [
  {
      id: 0,
      title: 'What are the standard \nshipping policies?',
      body: "Delivery is Monday to Friday between 9am and 5pm. We do not deliver on weekends or public holidays. If you are not at home when the delivery is attempted, a card will be left and you will need to arrange re-delivery. If you are not at home when the delivery is attempted, a card will be left and you will need to arrange re-delivery. If you are not at home when the delivery is attempted, a card will be left and you will need to arrange re-delivery.",
  },
  {
      id: 1,
      title: 'When will my order be shipped?',
      body: "Food orders are shipped within 24 hours of being placed. Food orders are shipped within 24 hours of being placed. Food orders are shipped within 24 hours of being placed.",
  },
  {
      id: 2,
      title: 'How do I track my order?',
      body: "You will receive an email with a tracking number once your order has been shipped. You will receive an email with a tracking number once your order has been shipped. You will receive an email with a tracking number once your order has been shipped.",
  },
  {
      id: 3,
      title: 'Do you ship internationally?',
      body: "Yes, we ship internationally. Please contact us for a quote. Yes, we ship internationally. Please contact us for a quote. Yes, we ship internationally. Please contact us for a quote.",
  },
  {
      id: 4,
      title: 'How to get refund for \nCredit/Debit Card?',
      body: "Once the refund request is approved, OnionAndGarlic will process your refund within 24 hours. However, the reversal will be processed by OnionAndGarlic to your issuing bank and may take up to 5 - 45 business days depending on your bank for Debit/Credit Card Payment.",
  },
  {
      id: 5,
      title: 'How do I return my order?',
      body: "If you are not satisfied with your purchase, you can return it to us within 30 days of receipt. If you are not satisfied with your purchase, you can return it to us within 30 days of receipt. If you are not satisfied with your purchase, you can return it to us within 30 days of receipt.",
  },
  {
      id: 6,
      title: 'How to contact us?',
      body: "If you have any questions, please contact us at oniongarlic@gmail.com or call us at 09123456789. You may also contact us through our official website onionandgarlic.timcowork.com.",
  },


];

export function getFoodData() {
  return FOODSData
}

export function getFoodsData(id) {
  return FOODSData.find((a) => a.id === id)
}

export { FOODSData, CATEGORYData, CAROUSELData, DESSERTSData, BEVERAGESData, SLIDER, FAQS }
