var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send([{
    "id": 1,
    "author": "Aundrea Dunniom",
    "title": "Conversation with Gregory Peck, A",
    "category": "Uncategorized",
    "date": "10/29/2021"
  }, {
    "id": 2,
    "author": "Dory McDool",
    "title": "Floating",
    "category": "Drama",
    "date": "5/10/2021"
  }, {
    "id": 3,
    "author": "Frederica Petz",
    "title": "Walking Tall",
    "category": "Drama",
    "date": "10/29/2021"
  }, {
    "id": 4,
    "author": "Clea Shippard",
    "title": "August (Elokuu) ",
    "category": "Uncategorized",
    "date": "10/19/2021"
  }, {
    "id": 5,
    "author": "Jason Snead",
    "title": "Twogether",
    "category": "Drama",
    "date": "7/19/2021"
  }, {
    "id": 6,
    "author": "Laina Walklett",
    "title": "Beethoven's 2nd",
    "category": "Uncategorized",
    "date": "6/16/2021"
  }, {
    "id": 7,
    "author": "Kaycee Grahame",
    "title": "Mother, Jugs & Speed",
    "category": "Action",
    "date": "10/23/2021"
  }, {
    "id": 8,
    "author": "Josefina Stangoe",
    "title": "Living Proof",
    "category": "Uncategorized",
    "date": "6/15/2021"
  }, {
    "id": 9,
    "author": "Domeniga Glentworth",
    "title": "American in Paris, An",
    "category": "Action",
    "date": "7/17/2021"
  }, {
    "id": 10,
    "author": "Gray Ilson",
    "title": "Monday Night Mayhem",
    "category": "Uncategorized",
    "date": "9/17/2021"
  }, {
    "id": 11,
    "author": "Yorke Wannell",
    "title": "Kathleen",
    "category": "Drama",
    "date": "6/10/2021"
  }, {
    "id": 12,
    "author": "Ulrick Pardal",
    "title": "Spy Kids: All the Time in the World in 4D",
    "category": "Uncategorized",
    "date": "9/6/2021"
  }, {
    "id": 13,
    "author": "Ario Delue",
    "title": "Mickey, Donald, Goofy: The Three Musketeers",
    "category": "Drama",
    "date": "1/24/2022"
  }, {
    "id": 14,
    "author": "Gwenore Swetenham",
    "title": "Fidanzati, I (Fiances, The)",
    "category": "Action",
    "date": "5/12/2021"
  }, {
    "id": 15,
    "author": "Jo-anne Mapston",
    "title": "Silent House",
    "category": "Uncategorized",
    "date": "5/4/2021"
  }, {
    "id": 16,
    "author": "Shermie Huett",
    "title": "3000 Miles to Graceland",
    "category": "Drama",
    "date": "8/30/2021"
  }, {
    "id": 17,
    "author": "Natal Rops",
    "title": "Dragon Day",
    "category": "Uncategorized",
    "date": "7/5/2021"
  }, {
    "id": 18,
    "author": "Juanita Ply",
    "title": "Zero 2",
    "category": "Uncategorized",
    "date": "5/14/2021"
  }, {
    "id": 19,
    "author": "Lek Healing",
    "title": "Encino Man",
    "category": "Action",
    "date": "7/4/2021"
  }, {
    "id": 20,
    "author": "Christina Bresman",
    "title": "Dark Circles ",
    "category": "Uncategorized",
    "date": "8/1/2021"
  }, {
    "id": 21,
    "author": "Agnesse Baudry",
    "title": "Numb",
    "category": "Action",
    "date": "8/27/2021"
  }, {
    "id": 22,
    "author": "Daron Scholer",
    "title": "Dragon: The Bruce Lee Story",
    "category": "Drama",
    "date": "12/16/2021"
  }, {
    "id": 23,
    "author": "Clayborne Cramphorn",
    "title": "Blood Simple",
    "category": "Drama",
    "date": "5/16/2021"
  }, {
    "id": 24,
    "author": "Lind Wooldridge",
    "title": "Pollock",
    "category": "Drama",
    "date": "4/13/2022"
  }, {
    "id": 25,
    "author": "Thomasa Kiossel",
    "title": "And the Ship Sails On (E la nave va)",
    "category": "Drama",
    "date": "6/9/2021"
  }, {
    "id": 26,
    "author": "Jennica Piatkowski",
    "title": "Beautiful",
    "category": "Action",
    "date": "12/9/2021"
  }, {
    "id": 27,
    "author": "Willis Hightown",
    "title": "Snake and Crane Arts of Shaolin (She hao ba bu)",
    "category": "Action",
    "date": "7/17/2021"
  }, {
    "id": 28,
    "author": "Kevan Kik",
    "title": "Winter Light (Nattvardsgästerna)",
    "category": "Uncategorized",
    "date": "2/17/2022"
  }, {
    "id": 29,
    "author": "Frannie Spillett",
    "title": "Accident",
    "category": "Drama",
    "date": "9/3/2021"
  }, {
    "id": 30,
    "author": "Amelie Becker",
    "title": "I Remember (Eu Me Lembro)",
    "category": "Drama",
    "date": "5/19/2021"
  }, {
    "id": 31,
    "author": "Terrence Weare",
    "title": "Phantom of the Megaplex",
    "category": "Drama",
    "date": "4/17/2021"
  }, {
    "id": 32,
    "author": "Alphonse Waugh",
    "title": "Boy Meets Girl",
    "category": "Drama",
    "date": "2/18/2022"
  }, {
    "id": 33,
    "author": "Dot Sprigg",
    "title": "Priest",
    "category": "Drama",
    "date": "11/24/2021"
  }, {
    "id": 34,
    "author": "Wylie Fassmann",
    "title": "Hound of the Baskervilles, The",
    "category": "Drama",
    "date": "9/6/2021"
  }, {
    "id": 35,
    "author": "Terrence Manes",
    "title": "Bunraku",
    "category": "Drama",
    "date": "5/31/2021"
  }, {
    "id": 36,
    "author": "Salome Turmell",
    "title": "Indian Tomb, The (Das indische Grabmal)",
    "category": "Action",
    "date": "6/14/2021"
  }, {
    "id": 37,
    "author": "Orrin Peet",
    "title": "Play It Again, Sam",
    "category": "Action",
    "date": "2/19/2022"
  }, {
    "id": 38,
    "author": "Ibbie Vibert",
    "title": "Spring Break",
    "category": "Uncategorized",
    "date": "11/5/2021"
  }, {
    "id": 39,
    "author": "Doralia Everleigh",
    "title": "Keeping the Faith",
    "category": "Drama",
    "date": "2/15/2022"
  }, {
    "id": 40,
    "author": "Odo Roughan",
    "title": "Porky's II: The Next Day",
    "category": "Action",
    "date": "11/9/2021"
  }, {
    "id": 41,
    "author": "Phylys Westphal",
    "title": "Flakes",
    "category": "Action",
    "date": "4/21/2021"
  }, {
    "id": 42,
    "author": "Muire Baldam",
    "title": "East of Eden",
    "category": "Action",
    "date": "9/19/2021"
  }, {
    "id": 43,
    "author": "Lani Muspratt",
    "title": "Switching Channels",
    "category": "Uncategorized",
    "date": "9/12/2021"
  }, {
    "id": 44,
    "author": "Guillemette Vamplers",
    "title": "Knight Without Armor",
    "category": "Drama",
    "date": "2/14/2022"
  }, {
    "id": 45,
    "author": "Ezmeralda Woolager",
    "title": "Mothman Prophecies, The",
    "category": "Uncategorized",
    "date": "7/12/2021"
  }, {
    "id": 46,
    "author": "Armstrong Bruggeman",
    "title": "Steal This Movie!",
    "category": "Uncategorized",
    "date": "11/17/2021"
  }, {
    "id": 47,
    "author": "Cindi Blennerhassett",
    "title": "Equinox Flower (Higanbana)",
    "category": "Drama",
    "date": "9/7/2021"
  }, {
    "id": 48,
    "author": "Nolan Gerhold",
    "title": "(Absolutions) Pipilotti's Mistakes ((Entlastungen) Pipilottis Fehler)",
    "category": "Drama",
    "date": "3/13/2022"
  }, {
    "id": 49,
    "author": "Emili Brinkler",
    "title": "Wreck of the Mary Deare, The",
    "category": "Uncategorized",
    "date": "12/3/2021"
  }, {
    "id": 50,
    "author": "Myrtice Crowdson",
    "title": "Friends with Benefits",
    "category": "Uncategorized",
    "date": "9/18/2021"
  }, {
    "id": 51,
    "author": "Joshuah Robun",
    "title": "One 2 Ka 4",
    "category": "Drama",
    "date": "1/14/2022"
  }, {
    "id": 52,
    "author": "Legra Greenin",
    "title": "Pellet (Bola, El)",
    "category": "Uncategorized",
    "date": "7/7/2021"
  }, {
    "id": 53,
    "author": "Brinn Zellick",
    "title": "Fear X",
    "category": "Action",
    "date": "3/24/2022"
  }, {
    "id": 54,
    "author": "Mitch Moors",
    "title": "Mr. Belvedere Goes to College",
    "category": "Uncategorized",
    "date": "9/23/2021"
  }, {
    "id": 55,
    "author": "Madge McGebenay",
    "title": "Norm MacDonald: Me Doing Standup",
    "category": "Action",
    "date": "2/12/2022"
  }, {
    "id": 56,
    "author": "Antonina Paull",
    "title": "Anazapta (Black Plague)",
    "category": "Action",
    "date": "6/13/2021"
  }, {
    "id": 57,
    "author": "Matelda Greenrod",
    "title": "Shanghai Noon",
    "category": "Action",
    "date": "6/24/2021"
  }, {
    "id": 58,
    "author": "Rosella Martelet",
    "title": "Smart Money",
    "category": "Action",
    "date": "2/19/2022"
  }, {
    "id": 59,
    "author": "Sapphira Guyton",
    "title": "Client 9: The Rise and Fall of Eliot Spitzer",
    "category": "Drama",
    "date": "12/30/2021"
  }, {
    "id": 60,
    "author": "Hercule Innis",
    "title": "Wild Grass (Herbes folles, Les)",
    "category": "Action",
    "date": "1/9/2022"
  }, {
    "id": 61,
    "author": "Gill Schroder",
    "title": "Barbarians at the Gate",
    "category": "Action",
    "date": "12/5/2021"
  }, {
    "id": 62,
    "author": "Julienne Bellanger",
    "title": "Breaking and Entering",
    "category": "Action",
    "date": "1/29/2022"
  }, {
    "id": 63,
    "author": "Mignon Canton",
    "title": "Portrait of Maria (María Candelaria (Xochimilco))",
    "category": "Uncategorized",
    "date": "1/22/2022"
  }, {
    "id": 64,
    "author": "Sigfried Skittrell",
    "title": "An American Tail: The Treasure of Manhattan Island",
    "category": "Action",
    "date": "3/23/2022"
  }, {
    "id": 65,
    "author": "Heloise Hayth",
    "title": "Poison Ivy",
    "category": "Action",
    "date": "6/5/2021"
  }, {
    "id": 66,
    "author": "Lodovico Muddle",
    "title": "Bridge of Dragons",
    "category": "Action",
    "date": "9/11/2021"
  }, {
    "id": 67,
    "author": "Staffard Ballinger",
    "title": "My Voyage to Italy (Il mio viaggio in Italia)",
    "category": "Drama",
    "date": "8/5/2021"
  }, {
    "id": 68,
    "author": "Avrom Alu",
    "title": "Front Line, The",
    "category": "Drama",
    "date": "7/19/2021"
  }, {
    "id": 69,
    "author": "Bat Turfrey",
    "title": "Blackout",
    "category": "Action",
    "date": "7/6/2021"
  }, {
    "id": 70,
    "author": "Davin Iorio",
    "title": "Conquest 1453 (Fetih 1453)",
    "category": "Action",
    "date": "8/7/2021"
  }, {
    "id": 71,
    "author": "Reese Leverentz",
    "title": "I Dream Too Much",
    "category": "Action",
    "date": "9/26/2021"
  }, {
    "id": 72,
    "author": "Belva Rochford",
    "title": "Detention of the Dead",
    "category": "Drama",
    "date": "12/20/2021"
  }, {
    "id": 73,
    "author": "Dame Gibby",
    "title": "Owning Mahowny",
    "category": "Action",
    "date": "10/24/2021"
  }, {
    "id": 74,
    "author": "Basile Waterman",
    "title": "Mark of the Cop",
    "category": "Drama",
    "date": "3/8/2022"
  }, {
    "id": 75,
    "author": "Noll Palluschek",
    "title": "Horror Planet (a.k.a. Inseminoid)",
    "category": "Uncategorized",
    "date": "5/12/2021"
  }, {
    "id": 76,
    "author": "Mitchel Gentner",
    "title": "Murder Party",
    "category": "Uncategorized",
    "date": "10/23/2021"
  }, {
    "id": 77,
    "author": "Courtnay Clemett",
    "title": "After Earth",
    "category": "Action",
    "date": "3/10/2022"
  }, {
    "id": 78,
    "author": "Egbert Seely",
    "title": "Moonlight Mile",
    "category": "Drama",
    "date": "10/5/2021"
  }, {
    "id": 79,
    "author": "Des Petrolli",
    "title": "Carbon Copy",
    "category": "Uncategorized",
    "date": "7/21/2021"
  }, {
    "id": 80,
    "author": "Bret Gleeson",
    "title": "Mr. Magoo",
    "category": "Uncategorized",
    "date": "9/27/2021"
  }, {
    "id": 81,
    "author": "Minetta McBryde",
    "title": "Boy and His Dog, A",
    "category": "Action",
    "date": "6/12/2021"
  }, {
    "id": 82,
    "author": "Cris Roobottom",
    "title": "Dead Man's Shoes",
    "category": "Drama",
    "date": "8/11/2021"
  }, {
    "id": 83,
    "author": "Marietta Bobasch",
    "title": "Wedding Weekend, The (Sing Now or Forever Hold Your Peace) (Shut Up and Sing)",
    "category": "Uncategorized",
    "date": "12/18/2021"
  }, {
    "id": 84,
    "author": "Martynne Rosenkrantz",
    "title": "This Is Where I Leave You",
    "category": "Drama",
    "date": "9/4/2021"
  }, {
    "id": 85,
    "author": "Liliane Edwin",
    "title": "Stranger on the Prowl (Imbarco a mezzanotte)",
    "category": "Drama",
    "date": "9/27/2021"
  }, {
    "id": 86,
    "author": "Ingram Beininck",
    "title": "Black Pond",
    "category": "Drama",
    "date": "1/16/2022"
  }, {
    "id": 87,
    "author": "Connie Flawn",
    "title": "Villain, The (Ek Villain)",
    "category": "Action",
    "date": "2/9/2022"
  }, {
    "id": 88,
    "author": "Paige Mc Caughen",
    "title": "Disorderlies",
    "category": "Uncategorized",
    "date": "11/14/2021"
  }, {
    "id": 89,
    "author": "Nikolos Ciardo",
    "title": "Kidnapping, Caucasian Style (Kavkazskaya plennitsa)",
    "category": "Action",
    "date": "4/28/2021"
  }, {
    "id": 90,
    "author": "Carolus Skupinski",
    "title": "Mystery (Fu cheng mi shi)",
    "category": "Action",
    "date": "2/6/2022"
  }, {
    "id": 91,
    "author": "Crista Shorto",
    "title": "Scratch",
    "category": "Uncategorized",
    "date": "9/19/2021"
  }, {
    "id": 92,
    "author": "Valentia Tween",
    "title": "Friends and Family",
    "category": "Drama",
    "date": "11/8/2021"
  }, {
    "id": 93,
    "author": "Anneliese Tennison",
    "title": "11-11-11 (11-11-11: The Prophecy)",
    "category": "Action",
    "date": "11/1/2021"
  }, {
    "id": 94,
    "author": "Abbe Cuming",
    "title": "Young Black Stallion, The",
    "category": "Drama",
    "date": "3/16/2022"
  }, {
    "id": 95,
    "author": "Theo Stoade",
    "title": "Snatch",
    "category": "Action",
    "date": "6/10/2021"
  }, {
    "id": 96,
    "author": "Penny Whitwam",
    "title": "Fires on the Plain (Nobi)",
    "category": "Action",
    "date": "11/21/2021"
  }, {
    "id": 97,
    "author": "Ezmeralda Seres",
    "title": "One Step Ahead of My Shadow",
    "category": "Drama",
    "date": "3/19/2022"
  }, {
    "id": 98,
    "author": "Andra Gergher",
    "title": "Happenstance (Battement d'ailes du papillon, Le)",
    "category": "Action",
    "date": "2/8/2022"
  }, {
    "id": 99,
    "author": "Trueman Pettican",
    "title": "Girls Town",
    "category": "Drama",
    "date": "12/13/2021"
  }, {
    "id": 100,
    "author": "Fin Dumberell",
    "title": "Runner Runner",
    "category": "Drama",
    "date": "1/13/2022"
  }]);
});

module.exports = router;
