

export interface Toy {
  id: number;
  name: string;
  price: number;
  image: string;
  rating: number;
  category: number;
  ageGroup?: string;
  description?: string;
  isNewArrival?: boolean; //for New arrival page
}

export const toyData: Toy[] = [
  // Action Toys (Category 1)
  {
    id: 1,
    name: 'hulk action figure',
    price: 248,
    image: '/images/actiontoys/2.jpg',
    rating: 4.5,
    category: 1,
    ageGroup: 'children',
    description: 'Highly detailed Hulk action figure with multiple points of articulation'
  },
  {
    id: 2,
    name: 'batman action figure',
    price: 320,
    image: '/images/actiontoys/6.jpg',
    rating: 4.8,
    category: 1,
    ageGroup: 'children',
    description: 'Premium Batman action figure with accessories'
  },
  {
    id: 3,
    name: 'spiderman action figure',
    price: 460,
    image: '/images/actiontoys/11.jpg',
    rating: 4.3,
    category: 1,
    ageGroup: 'children',
    description: 'Premium Spider-Man action figure with web-shooters'
  },
  {
    id: 4,
    name: 'Space Hero Deluxe Pack',
    price: 500,
    image: '/images/actiontoys/13.jpg',
    rating: 4.7,
    category: 1,
    ageGroup: 'children',
    description: 'Futuristic action figures with sound effects'
  },
  {
    id: 5,
    name: 'Superhero ',
    price: 350,
    image: '/images/actiontoys/12.jpg',
    rating: 4.4,
    category: 1,
    ageGroup: 'children',
    description: 'superhero action figure with cape and mask'
  },
  {
    id: 6,
    name: 'Fantastic Four Heros ',
    price: 350,
    image: '/images/actiontoys/10.jpg',
    rating: 4.4,
    category: 1,
    ageGroup: 'children',
    description: 'Set of four heros'
  },
  {
    id: 7,
    name: 'IronMan action figure',
    price: 350,
    image: '/images/actiontoys/3.jpg',
    rating: 4.4,
    category: 1,
    ageGroup: 'children',
    description: 'IronMan action figure with light-up features'
  },
  {
    id: 8,
    name: 'Avengers Assemble Pack',
    price: 350,
    image: '/images/actiontoys/7.jpg',
    rating: 4.4,
    category: 1,
    ageGroup: 'children',
    description: 'Avengers set of 5'
  },
  {
    id: 9,
    name: 'Eagle  Action Figure',
    price: 550,
    image: '/images/actiontoys/17.jpg',
    rating: 4.4,
    category: 1,
    ageGroup: 'children',
    description: 'Eagle action figure with poseable wings'
  },
  {
    id: 10,
    name: 'T-rex Action Figure',
    price: 600,
    image: '/images/actiontoys/7.jpg',
    rating: 4.4,
    category: 1,
    ageGroup: 'children',
    description: 'T-rex action figure with roaring sound effects'
  },
  {
    id: 11,
    name: 'Dianosures Action Figure',
    price: 350,
    image: '/images/actiontoys/19.jpg',
    rating: 4.4,
    category: 1,
    ageGroup: 'children',
    description: 'Set of 2 dianosoures'
  },
  {
    id: 12,
    name: 'Robot Action Figure',
    price: 600,
    image: '/images/actiontoys/15.jpg',
    rating: 4.4,
    category: 1,
    ageGroup: 'children',
    description: 'Robot action figure with light-up eyes and sound effects'
  },
  {
    id: 13,
    name: 'Small Robot Action Figure',
    price: 470,
    image: '/images/actiontoys/14.jpg',
    rating: 4.4,
    category: 1,
    ageGroup: 'children',
    description: 'Robot action figure with light-up features'
  },

  {
    id: 14,
    name: 'Set of Toy Story action Figures',
    price: 900,
    image: '/images/actiontoys/16.jpg',
    rating: 4.4,
    category: 1,
    ageGroup: 'children',
    description: 'Set of Toy Story action figures including Woody, Buzz Lightyear, and Jessie'
  },



  // Educational Toys (Category 2)
  {
    id: 15,
    name: 'Science Experiment Kit',
    price: 390,
    image: '/images/educational/1.jpg',
    rating: 4.9,
    category: 2,
    ageGroup: 'preschooler',
    description: 'Hands-on science experiments for kids'
   
  },
  {
    id: 16,
    name: 'Alphabet Learning Blocks',
    price: 499,
    image: '/images/educational/5.jpg',
    rating: 4.9,
    category: 2,
    ageGroup: 'preschooler',
    description: 'Colorful blocks with alphabet letters'
  },
  {
    id: 17,
    name: 'Number Learning Blocks',
    price: 500,
    image: '/images/educational/3.jpg',
    rating: 4.5,
    category: 2,
    ageGroup: 'preschooler',
    description: 'Colorful blocks with  numbers'
  },
  {
    id: 18,
    name: 'Shapes Learning Blocks',
    price: 300,
    image: '/images/educational/7.jpg',
    rating: 4.7,
    category: 2,
    ageGroup: 'preschooler',
    description: 'Colorful blocks with shapes'
  },
  {
    id: 19,
    name: 'Alphabet and Numbers Learning Blocks',
    price: 500,
    image: '/images/educational/13.jpg',
    rating: 4.8,
    category: 2,
    ageGroup: 'preschooler',
    description: 'Colorful blocks with alphabet letters and numbers'
  },
  {
    id: 20,
    name: 'Building blocks for castles',
    price: 500,
    image: '/images/educational/11.jpg',
    rating: 4.8,
    category: 2,
    ageGroup: 'preschooler',
    description: 'Colorful building blocks for creative play'
  },
  {
    id: 21,
    name: 'Colourful rings',
    price: 500,
    image: '/images/educational/2.jpg',
    rating: 4.8,
    category: 2,
    ageGroup: 'preschooler',
    description: 'Colorful rings for creative play'
  },
  {
    id: 22,
    name: 'Puzzle tree shape blocks',
    price: 700,
    image: '/images/educational/6.jpg',
    rating: 4.8,
    category: 2,
    ageGroup: 'preschooler',
    description: 'Colorful puzzle tree shape blocks for creative play'
  },
  {
    id: 23,
    name: 'Dorgle balls',
    price: 500,
    image: '/images/educational/8.jpg',
    rating: 4.8,
    category: 2,
    ageGroup: 'preschooler',
    description: 'Colorful dorgle balls for creative play'
  },
  {
    id: 24,
    name: 'Building blocks with small shapes',
    price: 500,
    image: '/images/educational/12.jpg',
    rating: 4.8,
    category: 2,
    ageGroup: 'children',
    description: 'Colorful building blocks with small shapes for creative play'
  },{
    id: 25,
    name: 'Musiclearning table',
    price: 800,
    image: '/images/educational/10.jpg',
    rating: 4.8,
    category: 2,
    ageGroup: 'children',
    description: 'Colorful music learning table for creative play'
  },

  // Soft Toys (Category 3)
  {
    id:26,
    name: 'Brown Plush Teddy Bear',
    price: 800,
    image: '/images/softtoys/1.jpg',
    rating: 4.8,
    category: 3,
    ageGroup: 'preschooler',
    description: 'Cute and cuddly teddy bear'
  },
  {
    id: 27,
    name: 'Bunny Rabbit Plush Set',
    price: 900,
    image: '/images/softtoys/2.jpg',
    rating: 4.6,
    category: 3,
    ageGroup: 'preschooler',
    description: 'Soft bunny rabbit plush toys in different colors'
  },
  {
    id: 28,
    name: 'Pink teddy bear ',
    price: 550,
    image: '/images/softtoys/12.jpg',
    rating: 4.7,
    category: 3,
    ageGroup: 'toddler',
    description: 'Cute blue teddy bear'
  },
  {
    id: 29,
    name: 'Giraffe Plush Toys',
    price: 870,
    image: '/images/softtoys/20.jpg',
    rating: 4.5,
    category: 3,
    ageGroup: 'toddler',
    description: 'Adorable giraffe plush toys in various sizes'
  },
  {
    id: 30,
    name: 'Unicorn Cuddle Friend',
    price: 780,
    image: '/images/softtoys/19.jpg',
    rating: 4.9,
    category: 3,
    ageGroup: 'preschooler',
    description: 'Large unicorn plush toy'
  },
  {
    id: 31,
    name: 'Pandy Plush Toy',
    price: 970,
    image: '/images/softtoys/15.jpg',
    rating: 4.9,
    category: 3,
    description: 'Large panda plush toy'
  },
  {
    id: 32,
    name: 'Cute Bunny Plush Toy',
    price: 835,
    image: '/images/softtoys/8.jpg',
    rating: 4.9,
    category: 3,
    description: 'Large bunny plush toy'
  },
  {
    id: 33,
    name: 'Elephant Plush Toy',
    price: 1000,
    image: '/images/softtoys/4.jpg',
    rating: 4.9,
    category: 3,
    description: 'Large elephant plush toy'
  },
  {
    id: 34,
    name: 'Cute Penguin Plush Toy',
    price: 990,
    image: '/images/softtoys/6.jpg',
    rating: 4.9,
    category: 3,
    description: 'Large penguin plush toy'
  },
  {
    id: 35,
    name: 'Soft Snail Plush Toy',
    price: 530,
    image: '/images/softtoys/18.jpg',
    rating: 4.9,
    category: 3,
    description: 'Large snail plush toy'
  },
  {
    id: 36,
    name: 'Cute Monkey Plush Toy',
    price: 800,
    image: '/images/softtoys/5.jpg',
    rating: 4.9,
    category: 3,
    description: 'Large monkey plush toy'
  },
  {
    id: 37,
    name: 'Cute Tiger Plush Toy',
    price: 900,
    image: '/images/softtoys/16.jpg',
    rating: 4.9,
    category: 3,
    description: 'Large tiger plush toy'
  },
  {
    id: 38,
    name: 'Soft Avocado Pillow Toy',
    price: 1000,
    image: '/images/softtoys/21.jpg',
    rating: 4.9,
    category: 3,
    ageGroup: 'preschooler',
    description: 'Large avocado pillow toy'
  },
  {
    id: 39,
    name: 'Red Big Teddy Bear Plush Toy',
    price: 1500,
    image: '/images/softtoys/13.jpg',
    rating: 4.9,
    category: 3,
    description: 'Large red big teddy bear plush toy'
  },
  {
    id: 40,
    name: 'Cute Baby Doll Plush Toy',
    price: 1200,
    image: '/images/softtoys/7.jpg',
    rating: 4.9,
    category: 3,
    description: 'Large baby doll plush toy'
  },
  

  // Outdoor Toys (Category 4)
  {
    id: 41,
    name: 'Skatters Set',
    price: 1000,
    image: '/images/outdoor/20.jpg',
    rating: 4.6,
    category: 4,
    ageGroup: 'children',
    description: 'Professional skatters with protective gear'
  },
  {
    id: 42,
    name: 'Kids Roller Skates',
    price: 800,
    image: '/images/outdoor/19.jpg',
    rating: 4.5,
    category: 4,
    ageGroup: 'preschooler',
    description: 'Kids roller skates with safety equipment'
  },
  {
    id: 43,
    name: 'Tennis Ball',
    price: 100,
    image: '/images/outdoor/15.jpg',
    rating: 4.8,
    category: 4,
    ageGroup: 'preschooler',
    description: 'Set of 3 tennis balls for outdoor play'
  },
  {
    id: 44,
    name: 'Batmitens and Ball Set',
    price: 899,
    image: '/images/outdoor/13.jpg',
    rating: 4.4,
    category: 4,
    ageGroup: 'children',
    description: '  Set of 3 batmints and ball for playing strings'
  },
  {
    id: 45,
    name: 'Tennis racket set',
    price: 200,
    image: '/images/outdoor/16.jpg',
    rating: 4.7,
    category: 4,
    ageGroup: 'children',
    description: 'Tennis racket set for kids with adjustable grip'
  },
  
    {
    id: 46,
    name: 'Table Tennis Set',
    price: 400,
    image: '/images/outdoor/14.jpg',
    rating: 4.7,
    category: 4,
    ageGroup: 'preschooler',
    description: 'Table tennis set for kids with adjustable grip'
  },
  {
    id: 47,
    name: 'Two Wheel Scooter',
    price: 1200,
    image: '/images/outdoor/9.jpg',
    rating: 4.7,
    category: 4,
    ageGroup: 'preschooler',
    description: 'Two wheel scooter for kids with adjustable grip'
  },
  {
    id: 48,
    name: 'Kids Carry car',
    price: 800,
    image: '/images/outdoor/8.jpg',
    rating: 4.7,
    category: 4,
    ageGroup: 'preschooler',
    description: 'Kids carry car for outdoor play'
  },
  {
    id: 49,
    name: 'Slide Set',
    price: 1200,
    image: '/images/outdoor/6.jpg',
    rating: 4.7,
    category: 4,
    ageGroup: 'children',
    description: 'Slide set for outdoor play'
  },
  {
    id: 50,
    name: 'Beach toy Set',
    price: 200,
    image: '/images/outdoor/4.jpg',
    rating: 4.7,
    category: 4,
    ageGroup: 'preschooler',
    description: 'Beach toy set for outdoor play'
  },

  {
    id: 51,
    name: 'Beach toy full Set',
    price: 450,
    image: '/images/outdoor/5.jpg',
    rating: 4.7,
    category: 4,
    description: 'Beach toy full set for outdoor play'
  },
  
  {
    id: 53,
    name: 'Home setup slide',
    price: 1000,
    image: '/images/outdoor/3.jpg',
    rating: 4.7,
    category: 4,
    ageGroup: 'children',
    description: 'Home setup slide for outdoor play'
  },
{
    id: 54,
    name: 'Shuttle and cork set',
    price: 1000,
    image: '/images/outdoor/17.jpg',
    rating: 4.7,
    category: 4,
    description: 'Shuttle and cork set for outdoor play'
  },
{
    id: 55,
    name: 'Colourful ball',
    price: 100,
    image: '/images/outdoor/12.jpg',
    rating: 4.7,
    category: 4,
    ageGroup: 'children',
    description: 'Colourful ball for outdoor play'
  },
  {
    id: 57,
    name: 'Set of 3 balls',
    price: 300,
    image: '/images/outdoor/11.jpg',
    rating: 4.7,
    category: 4,
    ageGroup: 'children',
    description: 'Set of 3 balls for outdoor play'
  },



  // Vehicles (Category 5)
  {
    id: 58,
    name: 'Remote Control blue Car',
    price: 1200,
    image: '/images/vehicles/12.jpg',
    rating: 4.7,
    category: 5,
    description: 'High-speed RC car with rechargeable battery'
  },
  {
    id: 59,
    name: 'jeep',
    price: 1999,
    image: '/images/vehicles/13.jpg',
    rating: 4.5,
    category: 5,
    description: 'Rugged RC jeep with off-road capabilities'
  },
  {
    id: 60,
    name: 'Army Vehicles set',
    price: 399,
    image: '/images/vehicles/19.jpg',
    rating: 4.6,
    category: 5,
    description: 'Set of 5 army vehicles with realistic details'
  },
  {
    id: 61,
    name: 'Toy Train Engine',
    price: 250,
    image: '/images/vehicles/17.jpg',
    rating: 4.8,
    category: 5,
    description: 'Classic toy train engine with sound effects'
  },
  {
    id: 62,
    name: 'Electric Scooter Toy',
    price: 500,
    image: '/images/vehicles/10.jpg',
    rating: 4.9,
    category: 5,
    description: 'Mini electric scooter for kids'
  },
  {
    id: 63,
    name: 'Electric Bike Toy',
    price: 500,
    image: '/images/vehicles/11.jpg',
    rating: 4.9,
    category: 5,
    description: 'Mini electric bike for kids'
  },
  {
    id: 64,
    name: 'Pink Car Toy',
    price: 250,
    image: '/images/vehicles/3.jpg',
    rating: 4.9,
    category: 5,
    description: 'Mini pink car toy for kids'
  },
  {
    id: 65,
    name: 'Set of 6 cars',
    price: 300,
    image: '/images/vehicles/15.jpg',
    rating: 4.9,
    category: 5,
    description: 'Set of 6 mini cars for kids'
  },
  {
    id: 66,
    name: 'Cute little cars',
    price: 400,
    image: '/images/vehicles/5.jpg',
    rating: 4.9,
    category: 5,
    description: 'Set of cute little cars for kids'
  },
  {
    id: 67,
    name: 'Lorry with Truck',
    price: 350,
    image: '/images/vehicles/2.jpg',
    rating: 4.9,
    category: 5,
    description: 'Lorry with truck toy for kids'
  },
  {
    id: 68,
    name: 'Set of Lorry toys',
    price: 400,
    image: '/images/vehicles/1.jpg',
    rating: 4.9,
    category: 5,
    description: 'Set of lorry toys for kids'
  },
  {
    id: 69,
    name: 'Set of JCB ',
    price: 500,
    image: '/images/vehicles/6.jpg',
    rating: 4.9,
    category: 5,
    description: 'Set of JCB toys for kids'
  },
  {
    id: 70,
    name: 'Set of all vehicles',
    price: 500,
    image: '/images/vehicles/5.jpg',
    rating: 4.9,
    category: 5,
    description: 'Set of all vehicles for kids'
  },
  {
    id: 71,
    name: 'Set of mini vehicles',
    price: 400,
    image: '/images/vehicles/16.jpg',
    rating: 4.9,
    category: 5,
    description: 'Set of mini vehicles for kids'
  },
  {
    id: 72,
    name: 'Set of all vehicles in plastic',
    price: 400,
    image: '/images/vehicles/18.jpg',
    rating: 4.9,
    category: 5,
    description: 'Set of all vehicles for kids'
  },
  {
    id: 73,
    name: 'Set of 4 jumbo wheel car',
    price: 800,
    image: '/images/vehicles/9.jpg',
    rating: 4.9,
    category: 5,
    description: 'Set of 4 jumbo wheel car for kids'
  },
  {
    id: 74,
    name: 'Roller Truck',
    price: 200,
    image: '/images/vehicles/4.jpg',
    rating: 4.9,
    category: 5,
    description: 'Roller truck for kids'
  },


/*Newborn Babies*/
  {
    id: 75,
    name: 'Set of Rattles',
    price: 300,
    image: '/images/newborn/1.jpg',
    rating: 4.9,
    category: 2,
    ageGroup: 'newborn',
    description: 'Set of Rattles for newborn'
  },
  {
    id: 76,
    name: 'Set of wodden rattles',
    price: 300,
    image: '/images/newborn/2.png',
    rating: 4.9,
    category: 2,
    ageGroup: 'newborn',
    description: 'Set of wodden rattles for newborn'
  },
  {
    id: 77,
    name: 'Musical tortoise',    
    price: 300,
    image: '/images/newborn/8.jpg',
    rating: 4.9,
    category: 2,
    ageGroup: 'newborn',
    description: 'Musical tortoise for newborn'
  },
  {
    id: 78,
    name: 'Cat face wodden Rattle',    
    price: 100,
    image: '/images/newborn/3.jpg',
    rating: 4.9,
    category: 2,
    ageGroup: 'newborn',
    description: 'Cat face wodden Rattle for newborn'
  },
  {
    id: 79,
    name: 'Plastic Rattle',    
    price: 100,
    image: '/images/newborn/4.jpg',
    rating: 4.9,
    category: 2,
    ageGroup: 'newborn',
    description: 'Plastic Rattle for newborn'
  },
  {
    id: 80,
    name: 'Musical Baby Matress',    
    price: 300,
    image: '/images/newborn/5.jpg',
    rating: 4.9,
    category: 2,
    ageGroup: 'newborn',
    description: 'Musical Baby Matress for newborn'
  },
  {
    id: 81,
    name: 'set of 4 Teething Fruit shape Toys',    
    price: 150,
    image: '/images/newborn/11.jpg',
    rating: 4.9,
    category: 2,
    ageGroup: 'newborn',
    description: 'set of 4 Teething Fruit shape Toys for newborn'
  },
  {
    id: 82,
    name: 'set of 10 Teething Toys',    
    price: 200,
    image: '/images/newborn/12.jpg',
    rating: 4.9,
    category: 2,
    ageGroup: 'newborn',
    description: 'set of 10 Teething Toys for newborn'
  },
  {
    id: 83,
    name: 'Musical Drym set',    
    price: 150,
    image: '/images/newborn/7.jpg',
    rating: 4.9,
    category: 2,
    ageGroup: 'newborn',
    description: 'Musical Drym set for newborn'
  },
  {
    id: 84,
    name: 'Full bed with Musical Rattles',    
    price: 150,
    image: '/images/newborn/16.jpg',
    rating: 4.9,
    category: 2,
    ageGroup: 'newborn',
    description: 'Full bed with Musical Rattles for newborn'
  },
  {
    id: 85,
    name: 'Talking Tom Black',    
    price: 250,
    image: '/images/newborn/17.jpg',
    rating: 4.9,
    category: 2,
    ageGroup: 'newborn',
    description: 'Talking Tom Black for newborn'
  },
  {
    id: 86,
    name: 'Talking Tom White',    
    price: 300,
    image: '/images/newborn/18.jpg',
    rating: 4.9,
    category: 2,
    ageGroup: 'newborn',
    description: 'Talking Tom White for newborn'
  },
  {
    id: 87,
    name: 'Singing Cactus',    
    price: 200,
    image: '/images/newborn/19.jpg',
    rating: 4.9,
    category: 2,
    ageGroup: 'newborn',
    description: 'Singing Cactus for newborn  '
  },
  {
    id: 88,
    name: 'Cactus',    
    price: 300,
    image: '/images/newborn/20.jpg',
    rating: 4.9,
    category: 2,
    ageGroup: 'newborn',
    description: 'Cactus for newborn'
  },

  {
    id: 89,
    name: 'Elephant Musical Toy',    
    price: 200,
    image: '/images/newborn/9.jpg',
    rating: 4.9,
    category: 2,
    ageGroup: 'newborn',
    description: 'Elephant Musical Toy for newborn'
  },
{
    id: 90,
    name: 'Wodden Rattle',    
    price: 250,
    image: '/images/newborn/13.jpg',
    rating: 4.9,
    category: 2,
    ageGroup: 'newborn',
    description: 'Wodden Rattle for newborn'
  },
  {
    id: 91,
    name: 'Set of 6 Wodden Rattles',    
    price: 500,
    image: '/images/newborn/15.jpg',
    rating: 4.9,
    category: 2,
    ageGroup: 'newborn',
    description: 'Set of 6 Wodden Rattles for newborn'
  },
  {
    id: 92,
    name: 'Circle shape Teething Toys',    
    price: 100,
    image: '/images/newborn/10.jpg',
    rating: 4.9,
    category: 2,
    ageGroup: 'newborn',
    description: 'Circle shape Teething Toys for newborn'
  },

//Toddlers Toys
  {
    id: 93,
    name: 'Musical Walker',    
    price: 500,
    image: '/images/toddler/3.jpg',
    rating: 4.9,
    category: 5,
    ageGroup: 'toddler',
    description: 'Musical walker for toddler'
  },
  {
    id: 94,
    name: 'Wodden Walker',    
    price: 500,
    image: '/images/toddler/15.jpg',
    rating: 4.9,
    category: 5,
    ageGroup: 'toddler',
    description: 'Wodden walker for toddler'
  },
  {
    id: 95,
    name: 'Musical wodden Toy',    
    price: 200,
    image: '/images/toddler/7.jpg',
    rating: 4.9,
    category: 2,
    ageGroup: 'toddler',
    description: 'Musical wodden Toy for toddler'
  },
  {
    id: 96,
    name: 'Baby Bike',    
    price: 500,
    image: '/images/toddler/4.jpg',
    rating: 4.9,
    category: 5,
    ageGroup: 'toddler',
    description: 'Baby Bike for toddler'
  },
  {
    id: 97,
    name: 'Wodden shape staker ',    
    price: 500,
    image: '/images/toddler/6.jpg',
    rating: 4.9,
    category: 2,
    ageGroup: 'toddler',
    description: 'Wodden shape staker for toddler'
  },
  {
    id: 98,
    name: 'Set of wild animal toys',
    price: 300,
    image: '/images/toddler/1.jpg',
    rating: 4.9,
    category: 2,
    ageGroup: 'toddler',
    description: 'Set of wild animal toys for toddler'
  },
  {
    id: 99,
    name: 'Doctor Set toy',    
    price: 500,
    image: '/images/toddler/13.jpg',
    rating: 4.9,
    category: 2,
    ageGroup: 'toddler',
    description: 'Doctor Set toy for toddler'
  },
  {
    id: 100,
    name: 'Set of Domestic animaltoys',    
    price: 200,
    image: '/images/toddler/2.jpg',
    rating: 4.9,
    category: 2,
    ageGroup: 'toddler',
    description: 'Set of Domestic animaltoys for toddler'
  },
  {
    id: 101,
    name: 'Modern kitchen Set toy',    
    price: 200,
    image: '/images/toddler/8.jpg',
    rating: 4.9,
    category: 2,
    ageGroup: 'toddler',
    description: 'Modern kitchen Set toy for toddler'
  },
  {
    id: 102,
    name: 'kitchen Wessel Set toy',    
    price: 200,
    image: '/images/toddler/12.jpg',
    rating: 4.9,
    category: 2,
    ageGroup: 'toddler',
    description: 'kitchen Wessel Set toy for toddler'
  },
  {
    id: 103,
    name: 'Combo of Doctor and Kitchen set toy',    
    price: 300,
    image: '/images/toddler/10.jpg',
    rating: 4.9,
    category: 4,
    ageGroup: 'toddler',
    description: 'Combo of Doctor and Kitchen set toy for toddler'
  },
  {
    id: 104,
    name: 'kitchen Set toy',    
    price: 200,
    image: '/images/toddler/9.jpg',
    rating: 4.9,
    category: 2,
    ageGroup: 'toddler',
    description: 'kitchen Set toy for toddler'
  },
  {
    id: 105,
    name: 'Shopping Kart toy',    
    price: 400,
    image: '/images/toddler/14.jpg',
    rating: 4.9,
    category: 4,
    ageGroup: 'toddler',
    description: 'Shopping Kart toy for toddler'
  },
  {
    id: 106,
    name: 'Walker for toddler',    
    price: 400,
    image: '/images/toddler/17.jpg',
    rating: 4.9,
    category: 4,
    ageGroup: 'toddler',
    description: 'Walker for toddler'
  },
  {
    id: 107,
    name: '90s Model walker',    
    price: 400,
    image: '/images/toddler/21.jpg',
    rating: 4.9,
    category: 4,
    ageGroup: 'toddler',
    description: 'Walker for toddler'
  },
  {
    id: 108,
    name: 'Walker with handle',    
    price: 800,
    image: '/images/toddler/20.jpg',
    rating: 4.9,
    category: 4,
    ageGroup: 'toddler',
    description: 'Walker with handle for toddler'
  },
  {
    id: 109,
    name: 'Walker with musical instrument',    
    price: 1000,
    image: '/images/toddler/16.jpg',
    rating: 4.9,
    category: 4,
    ageGroup: 'toddler',
    description: 'Walker with musical instrument for toddler'
  },
  {
    id: 110,
    name: 'Steel Walker',    
    price: 800,
    image: '/images/toddler/18.jpg',
    rating: 4.9,
    category: 4,
    ageGroup: 'toddler',
    description: 'Steel Walker for toddler  '
  },
  {
    id: 111,
    name: 'Walker',    
    price: 800,
    image: '/images/toddler/19.jpg',
    rating: 4.9,
    category: 4,
    ageGroup: 'toddler',
    description: 'Walker for toddler'
  },
  

  //New Arrival toys

  {
    id: 112,
    name: 'Teddy Bear',    
    price: 499,
    image: '/images/softtoys/22.jpg',
    rating: 4.9,
    category: 3,
    ageGroup: 'toddler',
    description: 'A soft and cuddly toy for your little one.',
    isNewArrival: true
  },
  {
    id: 113,
    name: 'Remote Control Car',    
    price: 299,
    image: '/images/vehicles/21.png',
    rating: 4.9,
    category: 5,
    ageGroup: 'children',
    description: 'A fun and interactive toy for your little one.',
    isNewArrival: true
  },
  {
    id: 114,
    name: 'Doll Set',    
    price: 500,
    image: '/images/doll.webp',
    rating: 4.9,
    category: 3,
    ageGroup: 'preschooler',
    description: 'A fun and interactive toy for your little one.',
    isNewArrival: true
  },
  {
    id: 115,
    name: 'Building Blocks',    
    price: 700,
    image: '/images/educational/14.jpg',
    rating: 4.9,
    category: 2,
    ageGroup: 'preschooler',
    description: 'A fun and educational toy for your little one.',
    isNewArrival: true
  },
  {
    id: 116,
    name: 'Puzzle Game',    
    price: 400,
    image: '/images/educational/puzzle.png',
    rating: 4.9,
    category: 4,
    ageGroup: 'children',
    description: 'A fun and educational toy for your little one.',
    isNewArrival: true
  },
  {
    id: 117,
    name: 'Arrow Game',    
    price: 400,
    image: '/images/arrowt.png',
    rating: 4.9,
    category: 4,
    ageGroup: 'children',
    description: 'A fun and educational toy for your little one.',
    isNewArrival: true
  },


  //Preschooler Toys

{
    id: 118,
    name: 'Alphabet & puzzle toy',    
    price: 300,
    image: '/images/preschooler/1.jpeg',
    rating: 4.9,
    category: 2,
    ageGroup: 'preschooler',
    description: 'Alphabet puzzle toy for preschooler'
  },
  {
    id: 119,
    name: 'Duck Swing toy',    
    price: 300,
    image: '/images/preschooler/2.jpeg',
    rating: 4.9,
    category: 5,
    ageGroup: 'preschooler',
    description: 'Duck Swing toy for preschooler'
  },
  {
    id: 120,
    name: 'Gift set of stacking toys',    
    price: 200,
    image: '/images/preschooler/3.jpeg',
    rating: 4.9,
    category: 4,
    ageGroup: 'preschooler',
    description: ' Gift set of stacking toys for preschooler'
  },
  {
    id: 121,
    name: 'Abacus toy',    
    price: 200,
    image: '/images/preschooler/4.jpeg',
    rating: 4.9,
    category: 4,
    ageGroup: 'preschooler',
    description: 'Abacus toy for preschooler'
  },
  {
    id: 122,
    name: 'Shape puzzle toy',    
    price: 300,
    image: '/images/preschooler/5.jpeg',
    rating: 4.9,
    category: 4,
    ageGroup: 'preschooler',
    description: 'Shape puzzle toy for preschooler'
  },
  {
    id: 123,
    name: 'Lap equibment toy',    
    price: 250,
    image: '/images/preschooler/6.jpeg',
    rating: 4.9,
    category: 4,
    ageGroup: 'preschooler',
    description: 'Lap equibment toy for preschooler'
  },
  {
    id: 124,
    name: 'Color balls toy',    
    price: 400,
    image: '/images/preschooler/7.jpeg',
    rating: 4.9,
    category: 4,
    ageGroup: 'preschooler',
    description: 'Color balls toy for preschooler'
  },


  //Children toys
  {
    id: 125,
    name: 'Tools set toy box',    
    price: 400,
    image: '/images/tool.png',
    rating: 4.9,
    category: 4,
    ageGroup: 'children',
    description: 'A fun and educational toy for your little one.',
    
  },
  {
    id: 126,
    name: 'Doctor set box toys',    
    price: 700,
    image: '/images/actiontoys/4.webp',
    rating: 4.9,
    category: 2,
    ageGroup: 'children',
    description: 'A fun and educational toy for your little one.',
    
  },
  
  {
    id: 127,
    name: 'Toys assembly kit',    
    price: 400,
    image: '/images/actiontoys/20.jpg',
    rating: 4.9,
    category: 2,
    ageGroup: 'children',
    description: 'A fun and educational toy for your little one.',
  },
  


];

// Function to get toys by category
export const getToysByCategory = (categoryId: number): Toy[] => {
  return toyData.filter(toy => toy.category === categoryId);
};

// Function to get a single toy by ID
export const getToyById = (toyId: number): Toy | undefined => {
  return toyData.find(toy => toy.id === toyId);
};

// Function to get all unique categories
export const getAllCategories = () => {
  return [...new Set(toyData.map(toy => toy.category))];
};

// Function to get toys by age group
 export const getToysByAgeGroup = (ageGroup: string): Toy[] => {
  return toyData.filter(toy => toy.ageGroup === ageGroup);
};

//Function to get toys by new arrival
export const getNewArrivalToys = () => {
  return toyData.filter(toy => toy.isNewArrival === true);
};