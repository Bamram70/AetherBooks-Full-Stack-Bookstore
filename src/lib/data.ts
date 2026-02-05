import type { Book } from './types';

export const genres = [
  "Fantasy", "Science Fiction", "Mystery", "Thriller", "Non-Fiction", "Self-Help", "Historical Fiction", "Memoir"
]

export const books: Book[] = [
  {
    id: 1,
    title: 'The Midnight Library',
    author: 'Matt Haig',
    price: 14.99,
    genre: 'Fantasy',
    rating: 4.5,
    coverImage: 'book-cover-1',
    description: 'Between life and death there is a library, and within that library, the shelves go on forever.',
    longDescription: 'Between life and death there is a library, and within that library, the shelves go on forever. Every book provides a chance to try another life you could have lived. To see how things would be if you had made other choices... Would you have done anything different, if you had the chance to undo your regrets? A novel about all the choices that go into a life well lived.',
    reviews: [
      { id: 1, user: 'Alice', avatar: 'https://i.pravatar.cc/40?u=alice', rating: 5, comment: 'A beautiful and thought-provoking book.' },
      { id: 2, user: 'Bob', avatar: 'https://i.pravatar.cc/40?u=bob', rating: 4, comment: 'I really enjoyed the concept.' },
    ],
  },
  {
    id: 2,
    title: 'Dune',
    author: 'Frank Herbert',
    price: 17.99,
    genre: 'Science Fiction',
    rating: 4.8,
    coverImage: 'book-cover-2',
    description: 'A mythic and emotionally charged hero\'s journey, "Dune" tells the story of Paul Atreides.',
    longDescription: 'Set on the desert planet Arrakis, Dune is the story of the boy Paul Atreides, heir to a noble family tasked with ruling an inhospitable world where the only thing of value is the “spice” melange, a drug capable of extending life and enhancing consciousness. Coveted across the known universe, melange is a prize worth killing for... When House Atreides is betrayed, the destruction of Paul’s family will set the boy on a journey toward a destiny greater than he could ever have imagined.',
    reviews: [
      { id: 3, user: 'Charlie', avatar: 'https://i.pravatar.cc/40?u=charlie', rating: 5, comment: 'An absolute masterpiece of science fiction.' },
    ],
  },
  {
    id: 3,
    title: 'Project Hail Mary',
    author: 'Andy Weir',
    price: 16.50,
    genre: 'Science Fiction',
    rating: 4.9,
    coverImage: 'book-cover-3',
    description: 'Ryland Grace is the sole survivor on a desperate, last-chance mission—and if he fails, humanity and the earth itself will perish.',
    longDescription: 'Ryland Grace is the sole survivor on a desperate, last-chance mission—and if he fails, humanity and the earth itself will perish. Except that right now, he doesn’t know that. He can’t even remember his own name, let alone the nature of his assignment or how to complete it. All he knows is that he’s been asleep for a very, very long time. And he’s just been awakened to find himself millions of miles from home, with nothing but two corpses for company. His crewmates dead, his memories fuzzily returning, he realizes that an impossible task now confronts him.',
    reviews: [
      { id: 4, user: 'Diana', avatar: 'https://i.pravatar.cc/40?u=diana', rating: 5, comment: 'Even better than The Martian. A must-read!' },
      { id: 5, user: 'Eve', avatar: 'https://i.pravatar.cc/40?u=eve', rating: 5, comment: 'Couldn\'t put it down. The science is fascinating and the story is heartwarming.' },
    ],
  },
  {
    id: 4,
    title: 'The Silent Patient',
    author: 'Alex Michaelides',
    price: 13.99,
    genre: 'Thriller',
    rating: 4.4,
    coverImage: 'book-cover-4',
    description: 'Alicia Berenson’s life is seemingly perfect. A famous painter married to an in-demand fashion photographer, she lives in a grand house with big windows overlooking a park in one of London’s most desirable areas.',
    longDescription: 'Alicia Berenson’s life is seemingly perfect. A famous painter married to an in-demand fashion photographer, she lives in a grand house with big windows overlooking a park in one of London’s most desirable areas. One evening her husband Gabriel returns home late from a fashion shoot, and Alicia shoots him five times in the face, and then never speaks another word. Alicia’s refusal to talk, or give any kind of explanation, turns a domestic tragedy into something far grander, a mystery that captures the public imagination and casts Alicia into notoriety.',
    reviews: [
      { id: 6, user: 'Frank', avatar: 'https://i.pravatar.cc/40?u=frank', rating: 4, comment: 'The twist at the end was brilliant!' },
    ],
  },
  {
    id: 5,
    title: 'Sapiens: A Brief History of Humankind',
    author: 'Yuval Noah Harari',
    price: 22.00,
    genre: 'Non-Fiction',
    rating: 4.7,
    coverImage: 'book-cover-5',
    description: 'A groundbreaking narrative of humanity’s creation and evolution—a #1 international bestseller that explores the ways in which biology and history have defined us and enhanced our understanding of what it means to be “human.”',
    longDescription: 'From a renowned historian comes a groundbreaking narrative of humanity’s creation and evolution—a #1 international bestseller—that explores the ways in which biology and history have defined us and enhanced our understanding of what it means to be “human.” One hundred thousand years ago, at least six different species of humans inhabited Earth. Yet today there is only one—homo sapiens. What happened to the others? And what may happen to us?',
    reviews: [],
  },
  {
    id: 6,
    title: 'Atomic Habits',
    author: 'James Clear',
    price: 19.99,
    genre: 'Self-Help',
    rating: 4.8,
    coverImage: 'book-cover-6',
    description: 'Tiny Changes, Remarkable Results. An Easy & Proven Way to Build Good Habits & Break Bad Ones.',
    longDescription: 'No matter your goals, Atomic Habits offers a proven framework for improving--every day. James Clear, one of the world\'s leading experts on habit formation, reveals practical strategies that will teach you exactly how to form good habits, break bad ones, and master the tiny behaviors that lead to remarkable results. If you\'re having trouble changing your habits, the problem isn\'t you. The problem is your system.',
    reviews: [
      { id: 7, user: 'Grace', avatar: 'https://i.pravatar.cc/40?u=grace', rating: 5, comment: 'Life-changing book. Highly practical and applicable advice.' },
      { id: 8, user: 'Heidi', avatar: 'https://i.pravatar.cc/40?u=heidi', rating: 5, comment: 'The best book on habits I have ever read.' },
    ],
  },
  {
    id: 7,
    title: 'Circe',
    author: 'Madeline Miller',
    price: 15.99,
    genre: 'Fantasy',
    rating: 4.6,
    coverImage: 'book-cover-7',
    description: 'In the house of Helios, god of the sun and mightiest of the Titans, a daughter is born. But Circe is a strange child.',
    longDescription: 'In the house of Helios, god of the sun and mightiest of the Titans, a daughter is born. But Circe is a strange child—not powerful, like her father, nor viciously alluring like her mother. Turning to the world of mortals for companionship, she discovers that she does possess power—the power of witchcraft, which can transform rivals into monsters and menace the gods themselves. Threatened, Zeus banishes her to a deserted island, where she hones her occult craft, tames wild beasts and crosses paths with many of the most famous figures in all of mythology.',
    reviews: [
      { id: 9, user: 'Ivan', avatar: 'https://i.pravatar.cc/40?u=ivan', rating: 5, comment: 'A captivating and beautifully written retelling of Greek mythology.' },
    ],
  },
  {
    id: 8,
    title: 'Where the Crawdads Sing',
    author: 'Delia Owens',
    price: 14.50,
    genre: 'Mystery',
    rating: 4.7,
    coverImage: 'book-cover-8',
    description: 'For years, rumors of the “Marsh Girl” have haunted Barkley Cove, a quiet town on the North Carolina coast.',
    longDescription: 'For years, rumors of the “Marsh Girl” have haunted Barkley Cove, a quiet town on the North Carolina coast. So in late 1969, when handsome Chase Andrews is found dead, the locals immediately suspect Kya Clark, the so-called Marsh Girl. But Kya is not what they say. Sensitive and intelligent, she has survived for years alone in the marsh that she calls home, finding friends in the gulls and lessons in the sand. Then the time comes when she yearns to be touched and loved.',
    reviews: [],
  },
   {
    id: 9,
    title: 'The Four Winds',
    author: 'Kristin Hannah',
    price: 15.00,
    genre: 'Historical Fiction',
    rating: 4.6,
    coverImage: 'book-cover-9',
    description: 'An epic novel of love and heroism and hope, set against the backdrop of one of America’s most defining eras—the Great Depression.',
    longDescription: 'Texas, 1934. Millions are out of work and a drought has broken the Great Plains. Farmers are fighting to keep their land and their livelihoods as the crops are failing, the water is drying up, and dust threatens to bury them all. One of the darkest periods of the Great Depression, the Dust Bowl era, has arrived with a vengeance. In this uncertain and dangerous time, Elsa Martinelli—like so many of her neighbors—must make an agonizing choice: fight for the land she loves or go west, to California, in search of a better life.',
    reviews: [
      { id: 10, user: 'Judy', avatar: 'https://i.pravatar.cc/40?u=judy', rating: 5, comment: 'A powerful and moving story. Kristin Hannah is a master storyteller.' }
    ]
  },
  {
    id: 10,
    title: 'Educated: A Memoir',
    author: 'Tara Westover',
    price: 18.50,
    genre: 'Memoir',
    rating: 4.8,
    coverImage: 'book-cover-10',
    description: 'An unforgettable memoir about a young girl who, kept out of school, leaves her survivalist family and goes on to earn a PhD from Cambridge University.',
    longDescription: 'Born to survivalists in the mountains of Idaho, Tara Westover was seventeen the first time she set foot in a classroom. Her family was so isolated from mainstream society that there was no one to ensure the children received an education, and no one to intervene when one of Tara’s older brothers became violent. When another brother got himself into college, Tara decided to try a new kind of life. Her quest for knowledge transformed her, taking her over oceans and across continents, to Harvard and to Cambridge University. Only then would she wonder if she’d traveled too far, if there was still a way home.',
    reviews: [
      { id: 11, user: 'Mallory', avatar: 'https://i.pravatar.cc/40?u=mallory', rating: 5, comment: 'Absolutely incredible. One of the most inspiring books I have ever read.' }
    ]
  },
  {
    id: 11,
    title: 'The Vanishing Half',
    author: 'Brit Bennett',
    price: 16.20,
    genre: 'Historical Fiction',
    rating: 4.5,
    coverImage: 'book-cover-11',
    description: 'The Vignes twin sisters will always be identical. But after growing up together in a small, southern black community and running away at age sixteen, it\'s not just the shape of their daily lives that is different as adults, it\'s everything.',
    longDescription: 'The Vignes twin sisters will always be identical. But after growing up together in a small, southern black community and running away at age sixteen, it\'s not just the shape of their daily lives that is different as adults, it\'s everything: their families, their communities, their racial identities. Many years later, one sister lives with her black daughter in the same southern town she once tried to escape. The other secretly passes for white, and her white husband knows nothing of her past. Still, even separated by so many miles and just as many lies, the fates of the twins remain intertwined.',
    reviews: []
  },
  {
    id: 12,
    title: 'A Promised Land',
    author: 'Barack Obama',
    price: 25.00,
    genre: 'Memoir',
    rating: 4.9,
    coverImage: 'book-cover-12',
    description: 'A riveting, deeply personal account of history in the making—from the president who inspired us to believe in the power of democracy.',
    longDescription: 'In the stirring, highly anticipated first volume of his presidential memoirs, Barack Obama tells the story of his improbable odyssey from young man searching for his identity to leader of the free world, describing in strikingly personal detail both his political education and the landmark moments of the first term of his historic presidency—a time of dramatic transformation and turmoil.',
    reviews: [
       { id: 12, user: 'Nate', avatar: 'https://i.pravatar.cc/40?u=nate', rating: 5, comment: 'A fascinating look into the presidency and the man himself. A must-read for history buffs.' }
    ]
  }
];
