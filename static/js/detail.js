
// Recipe data for different dishes
const recipeData = {
    'pho-bo': {
        title: 'Pho Bo (Beef Noodle Soup)',
        image: 'https://cdn.asiastreetfood.com/uploads/Vietnam-Pho-Bo-Hanoi3-9277-2.jpg?strip=all&lossy=1&quality=80&ssl=1',
        category: 'Vietnamese Noodles',
        description: 'Traditional Vietnamese beef noodle soup with aromatic broth, rice noodles, and fresh herbs. This iconic dish represents the heart of Vietnamese cuisine with its complex flavors and comforting warmth.',
        prepTime: '30 min',
        cookTime: '2 hours',
        serves: '4 people',
        difficulty: 'Medium',
        ingredients: {
            broth: [
                '2 lbs beef bones',
                '1 lb beef brisket',
                '1 onion, charred',
                '3-inch piece ginger, charred',
                '2 star anise',
                '1 cinnamon stick',
                '4 cloves',
                '1 tbsp coriander seeds',
                'Fish sauce to taste',
                'Salt to taste'
            ],
            serving: [
                '1 lb fresh rice noodles (pho noodles)',
                'Thinly sliced raw beef',
                'Bean sprouts',
                'Thai basil leaves',
                'Cilantro',
                'Mint leaves',
                'Lime wedges',
                'Sliced jalapeños',
                'Hoisin sauce',
                'Sriracha sauce'
            ]
        },
        instructions: [
            'Char onion and ginger over open flame until blackened, then wash off charred skin.',
            'Boil beef bones and brisket for 10 minutes, then drain and rinse.',
            'Place bones, brisket, charred onion and ginger in a large pot with water.',
            'Add spices (star anise, cinnamon, cloves, coriander) and simmer for 2 hours.',
            'Season broth with fish sauce and salt to taste.',
            'Cook rice noodles according to package directions.',
            'Slice beef thinly and arrange with noodles in bowls.',
            'Pour hot broth over noodles and beef.',
            'Serve with fresh herbs, bean sprouts, lime wedges, and sauces.'
        ],
        tips: [
            'The key is in the broth - simmer slowly for deep flavor',
            'Char the aromatics well for authentic taste',
            'Use very thin beef slices so they cook in the hot broth',
            'Keep herbs and vegetables fresh and cold for contrast'
        ]
    },
    'banh-mi': {
        title: 'Banh Mi (Vietnamese Sandwich)',
        image: 'https://cdn.antoursvietnam.com/wp-content/uploads/2024/04/Top-5-best-Banh-Mi-in-Saigon.jpg',
        category: 'Vietnamese Sandwich',
        description: 'Crispy baguette filled with Vietnamese cold cuts, pâté, vegetables, and fresh herbs. A perfect fusion of French colonial influence and Vietnamese flavors.',
        prepTime: '15 min',
        cookTime: '5 min',
        serves: '2 people',
        difficulty: 'Easy',
        ingredients: {
            broth: [
                '2 fresh baguettes',
                'Vietnamese pâté',
                'Vietnamese ham',
                'Vietnamese headcheese',
                'Pickled carrots and daikon',
                'Fresh cucumber slices',
                'Fresh cilantro',
                'Fresh jalapeños',
                'Maggi seasoning sauce',
                'Mayonnaise'
            ],
            serving: [
                'Extra cilantro',
                'Extra jalapeños',
                'Pickled vegetables',
                'Sriracha sauce',
                'Soy sauce'
            ]
        },
        instructions: [
            'Slice baguettes lengthwise, leaving one side attached.',
            'Spread mayonnaise on both sides of the bread.',
            'Apply a thin layer of pâté on one side.',
            'Layer Vietnamese ham and headcheese.',
            'Add pickled carrots and daikon, cucumber slices.',
            'Top with fresh cilantro and sliced jalapeños.',
            'Drizzle with Maggi seasoning sauce.',
            'Close sandwich and serve immediately.'
        ],
        tips: [
            'Use fresh, crusty Vietnamese baguettes for best results',
            'Balance is key - don\'t overfill the sandwich',
            'Make pickled vegetables a day ahead for better flavor',
            'Serve immediately to maintain bread crispiness'
        ]
    },
    'bun-cha': {
        title: 'Bun Cha (Grilled Pork with Noodles)',
        image: 'https://thumbs.dreamstime.com/z/bowl-bun-cha-grilled-pork-noodles-side-side-bowl-bun-cha-grilled-pork-noodles-side-side-created-304089139.jpg?w=992',
        category: 'Vietnamese Noodles',
        description: 'Hanoi specialty with grilled pork patties, rice vermicelli, and dipping sauce. A beloved dish that showcases the balance of sweet, sour, and savory flavors.',
        prepTime: '20 min',
        cookTime: '15 min',
        serves: '3 people',
        difficulty: 'Medium',
        ingredients: {
            broth: [
                '1 lb ground pork',
                '1/2 lb pork belly, sliced',
                '2 tbsp fish sauce',
                '2 tbsp sugar',
                '1 tbsp vegetable oil',
                '2 cloves garlic, minced',
                '1 shallot, minced',
                'Black pepper',
                'Lemongrass, minced',
                'Rice vermicelli noodles'
            ],
            serving: [
                'Fresh lettuce leaves',
                'Fresh herbs (mint, cilantro)',
                'Pickled vegetables',
                'Nuoc cham dipping sauce',
                'Crushed peanuts',
                'Fried shallots'
            ]
        },
        instructions: [
            'Form ground pork into small patties and marinate with seasonings.',
            'Slice pork belly and marinate with similar seasonings.',
            'Grill pork patties and belly slices over charcoal until caramelized.',
            'Cook rice vermicelli and rinse with cold water.',
            'Prepare dipping sauce with fish sauce, sugar, lime juice, and chilies.',
            'Arrange noodles in bowls with fresh herbs and pickled vegetables.',
            'Serve grilled pork alongside with dipping sauce.',
            'Let diners mix everything together before eating.'
        ],
        tips: [
            'Charcoal grilling gives the best smoky flavor',
            'Don\'t overcook the pork - keep it juicy',
            'Balance sweet, sour, salty in the dipping sauce',
            'Serve at room temperature for best taste'
        ]
    },
    'goi-cuon': {
        title: 'Goi Cuon (Fresh Spring Rolls)',
        image: 'https://www.vietnam-travelonline.com/wp-content/uploads/2023/11/50d669e4faa74612bbaed118690d6cd6-1-scaled.jpg',
        category: 'Vietnamese Appetizer',
        description: 'Fresh rice paper rolls filled with shrimp, herbs, and vegetables served with peanut sauce. Light, healthy, and refreshing summer dish.',
        prepTime: '25 min',
        cookTime: '10 min',
        serves: '4 people',
        difficulty: 'Easy',
        ingredients: {
            broth: [
                'Rice paper wrappers',
                'Cooked shrimp, peeled',
                'Rice vermicelli, cooked',
                'Fresh lettuce leaves',
                'Fresh mint leaves',
                'Fresh cilantro',
                'Fresh chives',
                'Cucumber, julienned',
                'Cooked pork (optional)',
                'Warm water for softening'
            ],
            serving: [
                'Peanut dipping sauce',
                'Crushed peanuts',
                'Hoisin sauce',
                'Fresh herbs for garnish',
                'Pickled vegetables'
            ]
        },
        instructions: [
            'Soften rice paper in warm water for 10-15 seconds.',
            'Place on flat surface and add lettuce leaf first.',
            'Add 2-3 shrimp, some noodles, and fresh herbs.',
            'Fold bottom edge up, fold in sides, then roll tightly.',
            'Keep rolls covered with damp towel to prevent drying.',
            'Prepare peanut sauce by mixing peanut butter, hoisin, and water.',
            'Cut rolls in half diagonally before serving.',
            'Serve immediately with peanut dipping sauce.'
        ],
        tips: [
            'Don\'t oversoak rice paper - it continues to soften',
            'Keep fillings neat and centered for easy rolling',
            'Wet hands slightly to prevent sticking',
            'Best served fresh within 2 hours of making'
        ]
    },
    'com-tam': {
        title: 'Com Tam (Broken Rice)',
        image: 'https://vietnamoriginal-travel.com/upload/images/com-tam-vietnamese-broken-rice.jpg',
        category: 'Vietnamese Rice',
        description: 'Southern Vietnamese dish with grilled pork chop, egg, and broken rice served with fish sauce. A hearty and satisfying meal.',
        prepTime: '15 min',
        cookTime: '20 min',
        serves: '2 people',
        difficulty: 'Medium',
        ingredients: {
            broth: [
                'Broken rice (com tam)',
                'Pork chops',
                'Eggs',
                'Vietnamese sausage',
                'Pork skin',
                'Fish sauce',
                'Sugar',
                'Garlic',
                'Lemongrass',
                'Vegetable oil'
            ],
            serving: [
                'Pickled vegetables',
                'Fresh cucumber',
                'Fresh tomatoes',
                'Nuoc mam cham sauce',
                'Fresh herbs',
                'Fried shallots'
            ]
        },
        instructions: [
            'Marinate pork chops with minced garlic, lemongrass, fish sauce, and sugar.',
            'Grill pork chops over medium heat until caramelized and cooked through.',
            'Cook broken rice until tender but still has some texture.',
            'Fry eggs sunny-side up or over easy.',
            'Prepare pickled vegetables with carrots, daikon, and vinegar.',
            'Make nuoc mam cham sauce with fish sauce, lime juice, sugar, and chilies.',
            'Serve rice with grilled pork, fried egg, and sausage on top.',
            'Accompany with pickled vegetables and dipping sauce.'
        ],
        tips: [
            'Broken rice has unique texture - don\'t substitute regular rice',
            'Marinate pork overnight for best flavor',
            'Grill over charcoal for authentic smoky taste',
            'Serve hot with cold pickled vegetables for contrast'
        ]
    },
    'cao-lau': {
        title: 'Cao Lau (Hoi An Noodles)',
        image: 'https://danangleisure.com/wp-content/uploads/2023/04/Cao-Lau-Da-Nang.jpg',
        category: 'Vietnamese Noodles',
        description: 'Hoi An specialty noodles with pork, herbs, and crispy rice crackers in savory broth. A unique dish that can only be authentically made in Hoi An.',
        prepTime: '30 min',
        cookTime: '45 min',
        serves: '3 people',
        difficulty: 'Hard',
        ingredients: {
            broth: [
                'Cao Lau noodles',
                'Pork shoulder',
                'Pork bones for broth',
                'Dried shrimp',
                'Star anise',
                'Cinnamon',
                'Fish sauce',
                'Rock sugar',
                'Fried pork rinds',
                'Rice crackers'
            ],
            serving: [
                'Fresh greens',
                'Bean sprouts',
                'Fresh herbs',
                'Lime wedges',
                'Chili sauce'
            ]
        },
        instructions: [
            'Simmer pork bones for 2 hours to make rich broth.',
            'Cook pork shoulder until tender, then slice.',
            'Prepare cao lau noodles according to package directions.',
            'Fry pork rinds until crispy and golden.',
            'Season broth with fish sauce and rock sugar.',
            'Arrange noodles in bowls with sliced pork.',
            'Ladle hot broth over noodles.',
            'Top with crispy pork rinds, rice crackers, and herbs.',
            'Serve with lime wedges and chili sauce.'
        ],
        tips: [
            'Authentic cao lau noodles are only made in Hoi An',
            'The secret is the local well water used for noodles',
            'Balance textures with soft noodles and crispy toppings',
            'Don\'t skip the rice crackers - they add essential crunch'
        ]
    },
    'che-ba-mau': {
        title: 'Che Ba Mau (Three Color Dessert)',
        image: 'https://www.simplyrecipes.com/thmb/hGF_Oyd0R22nOGcKYpwp3nS_Pcg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Che-Ba-Mau-LEAD-2-c6162830ea634fa5ae0fab2d21276378.jpg',
        category: 'Vietnamese Dessert',
        description: 'Traditional Vietnamese dessert with layers of mung bean, red bean, and coconut milk. A colorful and refreshing sweet treat.',
        prepTime: '45 min',
        cookTime: '30 min',
        serves: '6 people',
        difficulty: 'Medium',
        ingredients: {
            broth: [
                'Mung beans, cooked',
                'Red beans, cooked',
                'Coconut milk',
                'Sugar',
                'Pandan extract',
                'Tapioca pearls',
                'Crushed ice',
                'Condensed milk',
                'Coconut strips',
                'Food coloring'
            ],
            serving: [
                'Extra coconut milk',
                'Extra crushed ice',
                'Toasted sesame seeds',
                'Extra condensed milk'
            ]
        },
        instructions: [
            'Cook mung beans and red beans separately until soft, then mash lightly.',
            'Prepare coconut milk by mixing with sugar and a pinch of salt.',
            'Cook tapioca pearls until translucent and chewy.',
            'Layer the beans in glasses: red beans at bottom, mung beans in middle.',
            'Top with coconut milk, tapioca pearls, and crushed ice.',
            'Serve immediately with condensed milk drizzled on top.'
        ],
        tips: [
            'Use coconut cream for richer flavor',
            'Add pandan extract for authentic green color',
            'Serve in clear glasses to show beautiful layers',
            'Can be made ahead and assembled when serving'
        ]
    },
    'banh-flan': {
        title: 'Banh Flan (Vietnamese Crème Caramel)',
        image: 'https://cdn.tgdd.vn/Files/2019/04/02/1155839/cach-lam-banh-flan-ngon-tuyet-voi-theo-cong-thuc-cua-ba-me-202201061635318262.jpg',
        category: 'Vietnamese Dessert',
        description: 'Silky smooth Vietnamese crème caramel with rich caramel sauce and creamy custard. A beloved dessert combining French technique with Vietnamese flavors.',
        prepTime: '20 min',
        cookTime: '45 min',
        serves: '6 people',
        difficulty: 'Medium',
        ingredients: {
            broth: [
                'Eggs',
                'Condensed milk',
                'Fresh milk',
                'Sugar for caramel',
                'Vanilla extract',
                'Water',
                'Salt (pinch)'
            ],
            serving: [
                'Extra caramel sauce',
                'Fresh berries',
                'Mint leaves',
                'Whipped cream'
            ]
        },
        instructions: [
            'Make caramel by heating sugar until golden, then add water carefully.',
            'Pour caramel into ramekins and let cool.',
            'Beat eggs gently without creating too much foam.',
            'Mix condensed milk, fresh milk, and vanilla extract.',
            'Combine egg mixture with milk mixture, strain through fine sieve.',
            'Pour custard mixture over caramel in ramekins.',
            'Steam for 25-30 minutes until set but still jiggly.',
            'Cool completely, then refrigerate for at least 4 hours.',
            'Run knife around edges and invert to serve.'
        ],
        tips: [
            'Don\'t overcook caramel - it should be golden, not dark',
            'Strain custard mixture to ensure smooth texture',
            'Steam gently - high heat will create bubbles',
            'Test doneness with toothpick - should come out clean'
        ]
    },
    'bun-bo-hue': {
        title: 'Bun Bo Hue (Spicy Beef Noodle)',
        image: 'https://cdn.tgdd.vn/2020/07/CookRecipe/Avatar/bun-bo-hue-thumbnail.jpg',
        category: 'Vietnamese Noodles',
        description: 'Central Vietnamese spicy beef noodle soup with lemongrass and chili oil. A complex and aromatic dish from the imperial city of Hue.',
        prepTime: '30 min',
        cookTime: '2 hours',
        serves: '4 people',
        difficulty: 'Hard',
        ingredients: {
            broth: [
                'Beef bones',
                'Pork bones',
                'Beef shank',
                'Pork hock',
                'Lemongrass',
                'Annatto oil',
                'Shrimp paste',
                'Fish sauce',
                'Rock sugar',
                'Chili oil'
            ],
            serving: [
                'Bun bo hue noodles',
                'Fresh herbs',
                'Bean sprouts',
                'Lime wedges',
                'Sliced banana flower',
                'Vietnamese ham'
            ]
        },
        instructions: [
            'Char lemongrass over open flame until fragrant.',
            'Simmer beef and pork bones with charred lemongrass for 2 hours.',
            'Make annatto oil by heating oil with annatto seeds.',
            'Add shrimp paste and annatto oil to broth for color and flavor.',
            'Cook bun bo hue noodles until tender.',
            'Slice cooked beef and pork, arrange in bowls with noodles.',
            'Season broth with fish sauce, sugar, and chili oil.',
            'Pour hot broth over noodles and meat.',
            'Serve with fresh herbs, bean sprouts, and lime wedges.'
        ],
        tips: [
            'Shrimp paste is essential for authentic flavor',
            'Make your own chili oil for best results',
            'Balance spicy, salty, and slightly sweet flavors',
            'Serve very hot with cold, fresh vegetables'
        ]
    },
    'com-chien-duong-chau': {
        title: 'Com Chien (Yangzhou Fried Rice)',
        image: 'https://cdn.tgdd.vn/2020/07/CookRecipe/Avatar/com-chien-duong-chau-thumbnail.jpg',
        category: 'Vietnamese Rice',
        description: 'Vietnamese-style fried rice with shrimp, Chinese sausage, eggs, and green peas. A hearty and flavorful one-dish meal.',
        prepTime: '15 min',
        cookTime: '20 min',
        serves: '3 people',
        difficulty: 'Easy',
        ingredients: {
            broth: [
                'Cooked jasmine rice',
                'Shrimp, peeled',
                'Chinese sausage',
                'Eggs',
                'Green peas',
                'Carrots, diced',
                'Scallions',
                'Garlic',
                'Soy sauce',
                'Vegetable oil'
            ],
            serving: [
                'Cucumber slices',
                'Tomato wedges',
                'Fish sauce',
                'Chili sauce',
                'Pickled vegetables'
            ]
        },
        instructions: [
            'Use day-old rice for best texture - fresh rice gets mushy.',
            'Heat wok or large pan over high heat with oil.',
            'Scramble eggs first, remove and set aside.',
            'Stir-fry Chinese sausage until fragrant.',
            'Add shrimp and cook until pink.',
            'Add rice, breaking up clumps with spatula.',
            'Add vegetables, soy sauce, and scrambled eggs.',
            'Stir-fry until everything is heated through and well mixed.',
            'Garnish with chopped scallions before serving.'
        ],
        tips: [
            'High heat is crucial for proper wok hei (breath of the wok)',
            'Don\'t overcrowd the pan - cook in batches if needed',
            'Season gradually and taste as you go',
            'Each grain of rice should be separate and coated'
        ]
    },
    'com-suon-nuong': {
        title: 'Com Suon Nuong (Grilled Pork Rice)',
        image: 'https://cdn.tgdd.vn/Files/2022/01/17/1409905/cach-lam-com-suon-nuong-thom-ngon-don-gian-tai-nha-202201171613439166.jpg',
        category: 'Vietnamese Rice',
        description: 'Fragrant jasmine rice served with marinated grilled pork ribs and pickled vegetables. A satisfying and well-balanced meal.',
        prepTime: '20 min',
        cookTime: '25 min',
        serves: '2 people',
        difficulty: 'Medium',
        ingredients: {
            broth: [
                'Pork ribs',
                'Jasmine rice',
                'Lemongrass',
                'Garlic',
                'Shallots',
                'Fish sauce',
                'Sugar',
                'Honey',
                'Vegetable oil',
                'Black pepper'
            ],
            serving: [
                'Pickled vegetables',
                'Fresh cucumber',
                'Tomato slices',
                'Nuoc mam cham',
                'Fresh herbs',
                'Fried shallots'
            ]
        },
        instructions: [
            'Marinate pork ribs with minced lemongrass, garlic, fish sauce, sugar.',
            'Let marinate for at least 2 hours or overnight.',
            'Grill ribs over medium heat, turning frequently.',
            'Brush with honey during last few minutes of cooking.',
            'Cook jasmine rice until fluffy and fragrant.',
            'Prepare pickled vegetables with carrot and daikon.',
            'Make nuoc mam cham dipping sauce.',
            'Serve grilled ribs over rice with vegetables and sauce.',
            'Garnish with fried shallots and fresh herbs.'
        ],
        tips: [
            'Score the ribs for better marinade penetration',
            'Don\'t rush the grilling - slow and steady wins',
            'Honey adds beautiful caramelization',
            'Rest meat for 5 minutes before serving'
        ]
    },
    'com-hen': {
        title: 'Com Hen (Baby Clam Rice)',
        image: 'https://bepgiadinh.com/wp-content/uploads/2018/07/cach-lam-com-hen-hue.jpg',
        category: 'Vietnamese Rice',
        description: 'Hue specialty rice dish with baby clams, herbs, pork cracklings, and chili sauce. A unique and flavorful regional delicacy.',
        prepTime: '25 min',
        cookTime: '30 min',
        serves: '3 people',
        difficulty: 'Hard',
        ingredients: {
            broth: [
                'Baby clams',
                'Rice',
                'Pork belly',
                'Dried shrimp',
                'Shallots',
                'Garlic',
                'Turmeric',
                'Fish sauce',
                'Chili sauce',
                'Tamarind'
            ],
            serving: [
                'Fresh herbs',
                'Bean sprouts',
                'Banana flower',
                'Star fruit',
                'Pork cracklings',
                'Roasted peanuts'
            ]
        },
        instructions: [
            'Clean baby clams thoroughly and steam until they open.',
            'Reserve clam broth and remove meat from shells.',
            'Cook rice with turmeric until golden and fragrant.',
            'Fry pork belly until crispy, reserve fat.',
            'Sauté shallots and garlic in pork fat.',
            'Add clam meat, dried shrimp, and seasonings.',
            'Serve rice topped with clam mixture.',
            'Accompany with fresh herbs, banana flower, and peanuts.',
            'Drizzle with chili sauce and tamarind water.'
        ],
        tips: [
            'Fresh baby clams are essential - don\'t substitute',
            'Reserve clam liquid for extra umami flavor',
            'Balance is key - not too spicy, not too sour',
            'Serve at room temperature for best flavor'
        ]
    },
    'banh-chuoi-hap': {
        title: 'Banh Chuoi Hap (Steamed Banana Cake)',
        image: 'https://runawayrice.com/wp-content/uploads/2015/05/Steamed-Banana-Cake-Banh-Chuoi-Hap.jpg',
        category: 'Vietnamese Dessert',
        description: 'Traditional steamed banana cake with coconut milk, fragrant and naturally sweet. A comforting homestyle dessert.',
        prepTime: '20 min',
        cookTime: '30 min',
        serves: '8 people',
        difficulty: 'Easy',
        ingredients: {
            broth: [
                'Ripe bananas',
                'Tapioca flour',
                'Rice flour',
                'Coconut milk',
                'Sugar',
                'Salt',
                'Vanilla extract',
                'Banana leaves',
                'Water'
            ],
            serving: [
                'Extra coconut milk',
                'Toasted sesame seeds',
                'Shredded coconut',
                'Fresh banana slices'
            ]
        },
        instructions: [
            'Mash ripe bananas until smooth with some small chunks.',
            'Mix tapioca flour, rice flour, coconut milk, and sugar.',
            'Combine mashed bananas with flour mixture.',
            'Add vanilla extract and a pinch of salt.',
            'Line banana leaves in steamer basket.',
            'Pour batter into prepared banana leaves.',
            'Steam for 25-30 minutes until set and springs back.',
            'Cool slightly before removing from leaves.',
            'Serve warm or at room temperature.'
        ],
        tips: [
            'Use very ripe bananas for best sweetness',
            'Don\'t overmix - some banana chunks add texture',
            'Banana leaves impart subtle flavor',
            'Test doneness with toothpick in center'
        ]
    },
    'xoi-vo': {
        title: 'Xoi Vo (Purple Sticky Rice)',
        image: 'https://cdn.tgdd.vn/2021/06/CookRecipe/Avatar/xoi-vo-thumbnail.jpg',
        category: 'Vietnamese Dessert',
        description: 'Colorful purple sticky rice dessert with coconut milk and black sesame seeds. A traditional and visually stunning sweet treat.',
        prepTime: '4 hours',
        cookTime: '45 min',
        serves: '6 people',
        difficulty: 'Medium',
        ingredients: {
            broth: [
                'Purple sticky rice',
                'Coconut milk',
                'Sugar',
                'Salt',
                'Black sesame seeds',
                'Pandan leaves',
                'Water'
            ],
            serving: [
                'Extra coconut milk',
                'Toasted sesame seeds',
                'Shredded coconut',
                'Sliced bananas',
                'Crushed peanuts'
            ]
        },
        instructions: [
            'Soak purple sticky rice for at least 4 hours or overnight.',
            'Drain rice and rinse until water runs clear.',
            'Steam rice for 25-30 minutes until tender.',
            'Heat coconut milk with sugar and salt until dissolved.',
            'Mix half of coconut milk with cooked rice.',
            'Toast black sesame seeds until fragrant.',
            'Serve rice topped with remaining coconut milk.',
            'Sprinkle with toasted sesame seeds and toppings.',
            'Can be served warm or at room temperature.'
        ],
        tips: [
            'Soaking time is crucial for proper texture',
            'Don\'t skip the salt in coconut milk - it balances sweetness',
            'Steam in bamboo steamer for best results',
            'Purple rice gets deeper color as it cooks'
        ]
    },
    // Popular Vietnamese Dishes from index.html
    'nom-bo-kho': {
        title: 'Nom Bo Kho (Dried Beef Salad)',
        image: 'https://www.vietnamparadisetravel.com/Media/travelnews/dried-beef-salad.jpg',
        category: 'Vietnamese Salad',
        description: 'Traditional Vietnamese beef jerky salad with herbs, peanuts, and tangy dressing. A refreshing and flavorful salad perfect for hot weather.',
        prepTime: '20 min',
        cookTime: '0 min',
        serves: '4 people',
        difficulty: 'Easy',
        ingredients: {
            broth: [
                'Dried beef (bo kho)',
                'Fresh herbs (cilantro, mint)',
                'Roasted peanuts',
                'Shredded green papaya',
                'Shredded carrots',
                'Bean sprouts',
                'Fried shallots',
                'Garlic, minced',
                'Lime juice',
                'Fish sauce'
            ],
            serving: [
                'Extra herbs',
                'Extra peanuts',
                'Chili flakes',
                'Lime wedges',
                'Prawn crackers'
            ]
        },
        instructions: [
            'Tear dried beef into bite-sized pieces.',
            'Shred green papaya and carrots into thin strips.',
            'Crush roasted peanuts coarsely.',
            'Pick herbs and wash thoroughly.',
            'Make dressing with lime juice, fish sauce, garlic, and chilies.',
            'Combine all ingredients in large bowl.',
            'Toss everything together with dressing.',
            'Let sit for 10 minutes for flavors to meld.',
            'Garnish with fried shallots and extra peanuts.'
        ],
        tips: [
            'Use good quality dried beef for best flavor',
            'Adjust dressing to balance sweet, sour, salty',
            'Serve immediately after mixing to keep vegetables crisp',
            'Add herbs just before serving to maintain freshness'
        ]
    },
    'canh-chua': {
        title: 'Canh Chua (Sour Soup)',
        image: 'https://runawayrice.com/wp-content/uploads/2014/09/Viet-Sour-Soup-Canh-Chua.jpg',
        category: 'Vietnamese Soup',
        description: 'Tangy Vietnamese soup with fish, tomatoes, pineapple, and tamarind broth. A perfect balance of sweet, sour, and savory flavors.',
        prepTime: '15 min',
        cookTime: '25 min',
        serves: '4 people',
        difficulty: 'Medium',
        ingredients: {
            broth: [
                'White fish fillets',
                'Tamarind paste',
                'Fresh pineapple chunks',
                'Tomatoes, wedged',
                'Bean sprouts',
                'Okra, sliced',
                'Taro stems',
                'Fish sauce',
                'Sugar',
                'Rice'
            ],
            serving: [
                'Fresh herbs',
                'Lime wedges',
                'Chili slices',
                'Extra bean sprouts'
            ]
        }
    },
    'banh-xeo': {
        title: 'Banh Xeo (Crispy Pancake)',
        image: 'https://img.taste.com.au/hegWu1Xh/taste/2016/11/banh-xeo-crispy-pancakes-77516-1.jpeg',
        category: 'Vietnamese Pancake',
        description: 'Crispy Vietnamese pancake filled with shrimp, pork, and bean sprouts. Golden, crispy exterior with savory filling inside.',
        prepTime: '30 min',
        cookTime: '20 min',
        serves: '4 people',
        difficulty: 'Medium',
        ingredients: {
            broth: [
                'Rice flour',
                'Coconut milk',
                'Turmeric powder',
                'Shrimp, peeled',
                'Pork belly, sliced',
                'Bean sprouts',
                'Green onions',
                'Vegetable oil',
                'Salt',
                'Water'
            ],
            serving: [
                'Lettuce leaves',
                'Fresh herbs',
                'Pickled vegetables',
                'Nuoc cham sauce'
            ]
        },
        instructions: [
            'Mix rice flour, coconut milk, turmeric, and water to make batter.',
            'Let batter rest for 30 minutes.',
            'Heat a non-stick pan over medium-high heat with oil.',
            'Pour batter to coat bottom of pan, swirl quickly.',
            'Add shrimp, pork, and bean sprouts to one half.',
            'Cover and cook until edges are crispy and golden.',
            'Fold pancake in half and slide onto plate.',
            'Wrap pieces in lettuce with herbs before eating.',
            'Dip in nuoc cham sauce for full flavor.'
        ],
        tips: [
            'Batter should be thin like crepe batter',
            'High heat creates the signature crispy texture',
            'Don\'t flip - just fold in half',
            'Serve immediately while still crispy'
        ]
    },
    'cha-gio': {
        title: 'Cha Gio (Fried Spring Rolls)',
        image: 'https://tse3.mm.bing.net/th/id/OIP.fFq4a_iPf7blUxto4Ce5WQHaHa?r=0&cb=thfvnext&rs=1&pid=ImgDetMain&o=7&rm=3',
        category: 'Vietnamese Rolls',
        description: 'Crispy fried spring rolls filled with pork, shrimp, and vegetables. Golden brown and crunchy exterior with flavorful filling.',
        prepTime: '40 min',
        cookTime: '15 min',
        serves: '6 people',
        difficulty: 'Medium',
        ingredients: {
            broth: [
                'Spring roll wrappers',
                'Ground pork',
                'Shrimp, minced',
                'Wood ear mushrooms',
                'Glass noodles',
                'Carrots, julienned',
                'Onions, minced',
                'Garlic, minced',
                'Fish sauce',
                'Oil for frying'
            ],
            serving: [
                'Fresh lettuce',
                'Fresh herbs',
                'Pickled vegetables',
                'Nuoc cham sauce'
            ]
        }
    },
    'banh-it': {
        title: 'Banh It (Steamed Dumplings)',
        image: 'https://th.bing.com/th/id/R.d6dc05d1d4d3678009f440c5c05cab78?rik=PoIOzI758ZjxXA&riu=http%3a%2f%2frunawayrice.com%2fwp-content%2fuploads%2f2017%2f08%2fSticky-Rice-Dumplings-with-Toppings-Banh-It-Tran.jpg&ehk=cASrdQVmJm%2bqWqJrdngzbN3v7YakKDrNhBYVMV%2bQeYo%3d&risl=&pid=ImgRaw&r=0',
        category: 'Vietnamese Snack',
        description: 'Delicate steamed dumplings with shrimp and pork filling wrapped in translucent dough. Soft, chewy texture with savory filling.',
        prepTime: '60 min',
        cookTime: '30 min',
        serves: '8 people',
        difficulty: 'Hard',
        ingredients: {
            broth: [
                'Tapioca starch',
                'Rice flour',
                'Shrimp, peeled',
                'Ground pork',
                'Wood ear mushrooms',
                'Scallions',
                'Fish sauce',
                'Sugar',
                'Black pepper',
                'Banana leaves'
            ],
            serving: [
                'Scallion oil',
                'Nuoc cham sauce',
                'Fried shallots',
                'Fresh herbs'
            ]
        },
        instructions: [
            'Mix tapioca starch and rice flour with hot water to form dough.',
            'Knead until smooth and elastic, cover and rest.',
            'Sauté shrimp, pork, and mushrooms with seasonings.',
            'Let filling cool completely before using.',
            'Roll dough into small portions, flatten into circles.',
            'Place filling in center, gather edges and seal.',
            'Wrap each dumpling in banana leaf.',
            'Steam for 20-25 minutes until translucent.',
            'Serve warm with scallion oil and dipping sauce.'
        ],
        tips: [
            'Dough should be smooth and pliable when ready',
            'Don\'t overfill or dumplings will burst',
            'Banana leaves add authentic aroma',
            'Steam gently to avoid breaking delicate wrapper'
        ]
    }
};

// Get dish parameter from URL
const urlParams = new URLSearchParams(window.location.search);
const dishName = urlParams.get('dish');

// Load recipe data based on URL parameter
if (dishName && recipeData[dishName]) {
    const recipe = recipeData[dishName];
    document.getElementById('dish-title').textContent = recipe.title;
    document.getElementById('dish-breadcrumb').textContent = recipe.title;
    document.getElementById('main-image').src = recipe.image;
    document.getElementById('dish-name').textContent = recipe.title;
    document.getElementById('dish-category').textContent = 'Category: ' + recipe.category;
    document.getElementById('dish-description').textContent = recipe.description;
    document.getElementById('prep-time').textContent = recipe.prepTime;
    document.getElementById('cook-time').textContent = recipe.cookTime;
    document.getElementById('serves').textContent = recipe.serves;
    document.getElementById('difficulty').textContent = recipe.difficulty;

    // Update ingredients
    if (recipe.ingredients) {
        // Update broth ingredients
        const brothList = document.getElementById('broth-ingredients');
        if (brothList && recipe.ingredients.broth) {
            brothList.innerHTML = recipe.ingredients.broth.map(ingredient => `<li>${ingredient}</li>`).join('');
        }

        // Update serving ingredients checkboxes
        const servingForm = document.getElementById('serving-ingredients-form');
        const servingList = document.getElementById('serving-ingredients');
        if (servingList && recipe.ingredients.serving) {
            servingList.innerHTML = recipe.ingredients.serving.map((ingredient, index) => `
                            <li>
                                <input type="checkbox" id="ingredient${index + 1}" name="ingredient" value="${ingredient}">
                                <label for="ingredient${index + 1}">${ingredient}</label>
                            </li>
                        `).join('');
        }
    }

    // Update instructions
    if (recipe.instructions) {
        const instructionsContainer = document.getElementById('instructions');
        if (instructionsContainer) {
            instructionsContainer.innerHTML = recipe.instructions.map((step, index) => `
                            <div class="mb-3">
                                <h6>Step ${index + 1}:</h6>
                                <p>${step}</p>
                            </div>
                        `).join('');
        }
    }

    // Update tips
    if (recipe.tips) {
        const tipsContainer = document.getElementById('tips');
        if (tipsContainer) {
            tipsContainer.innerHTML = recipe.tips.map(tip => `
                            <div class="mb-2">
                                <p><i class="fas fa-lightbulb text-warning me-2"></i>${tip}</p>
                            </div>
                        `).join('');
        }
    }
}

// Quantity buttons
$('.btn-plus').click(function () {
    var $input = $(this).parents('.quantity').find('input');
    $input.val(parseInt($input.val()) + 1);
});

$('.btn-minus').click(function () {
    var $input = $(this).parents('.quantity').find('input');
    var val = parseInt($input.val());
    if (val > 1) {
        $input.val(val - 1);
    }
});
