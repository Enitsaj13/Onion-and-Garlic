const PRODUCTS = [
  {
    id: 1,
    category: 'Dishes',
    name: 'Adobo',
    time: '🕒 60 mins.',
    capacity: '🍛 5 servings',
    price: 120,
    description:
      'Adobo is a popular Filipino dish made with meat, usually pork, chicken, or beef, that is marinated in vinegar, soy sauce, garlic, and black peppercorns before being slow-cooked in its own juices. The word adobo comes from the Spanish word adobar, which means "to marinate."',
    image: require('assets/images/dishes/adobos.png'),
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


export function getProducts(){
  return PRODUCTS;
}

export function getProduct(id){
  return PRODUCTS.find((product) => product.id == id);
}