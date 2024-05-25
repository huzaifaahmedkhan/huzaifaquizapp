const questions = [
    {
        question: "What is the capital of France?",
        options: {
            a: "London",
            b: "Paris",
            c: "Berlin"
        },
        correctAnswer: "b"
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        options: {
            a: "Harper Lee",
            b: "Stephen King",
            c: "J.K. Rowling"
        },
        correctAnswer: "a"
    },
    {
        question: "What is the chemical symbol for water?",
        options: {
            a: "H2O",
            b: "CO2",
            c: "O2"
        },
        correctAnswer: "a"
    },
    {
        question: "Who discovered gravity?",
        options: {
            a: "Isaac Newton",
            b: "Albert Einstein",
            c: "Galileo Galilei"
        },
        correctAnswer: "a"
    },
    {
        question: "What is the largest planet in our solar system?",
        options: {
            a: "Jupiter",
            b: "Saturn",
            c: "Neptune"
        },
        correctAnswer: "a"
    },
    {
        question: "What is the capital of Japan?",
        options: {
            a: "Tokyo",
            b: "Seoul",
            c: "Beijing"
        },
        correctAnswer: "a"
    },
    {
        question: "Who painted the Mona Lisa?",
        options: {
            a: "Leonardo da Vinci",
            b: "Pablo Picasso",
            c: "Vincent van Gogh"
        },
        correctAnswer: "a"
    },
    {
        question: "What is the chemical symbol for gold?",
        options: {
            a: "Au",
            b: "Ag",
            c: "Pt"
        },
        correctAnswer: "a"
    },
    {
        question: "What year did the Titanic sink?",
        options: {
            a: "1912",
            b: "1905",
            c: "1921"
        },
        correctAnswer: "a"
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        options: {
            a: "William Shakespeare",
            b: "Jane Austen",
            c: "Charles Dickens"
        },
        correctAnswer: "a"
    },
    {
        question: "What is the tallest mammal?",
        options: {
            a: "Giraffe",
            b: "Elephant",
            c: "Whale"
        },
        correctAnswer: "a"
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        options: {
            a: "Japan",
            b: "China",
            c: "India"
        },
        correctAnswer: "a"
    },
    {
        question: "What is the chemical symbol for oxygen?",
        options: {
            a: "O2",
            b: "H2O",
            c: "CO2"
        },
        correctAnswer: "a"
    },
    {
        question: "Who discovered penicillin?",
        options: {
            a: "Alexander Fleming",
            b: "Isaac Newton",
            c: "Albert Einstein"
        },
        correctAnswer: "a"
    },
    {
        question: "What is the largest ocean on Earth?",
        options: {
            a: "Pacific Ocean",
            b: "Atlantic Ocean",
            c: "Indian Ocean"
        },
        correctAnswer: "a"
    },
    {
        question: "Who is the author of '1984'?",
        options: {
            a: "George Orwell",
            b: "J.R.R. Tolkien",
            c: "Stephen King"
        },
        correctAnswer: "a"
    },
    {
        question: "What is the capital of Australia?",
        options: {
            a: "Canberra",
            b: "Sydney",
            c: "Melbourne"
        },
        correctAnswer: "a"
    },
    {
        question: "What is the chemical symbol for iron?",
        options: {
            a: "Fe",
            b: "Ir",
            c: "In"
        },
        correctAnswer: "a"
    },
    {
        question: "Who was the first man to step on the moon?",
        options: {
            a: "Neil Armstrong",
            b: "Buzz Aldrin",
            c: "Yuri Gagarin"
        },
        correctAnswer: "a"
    },
    {
        question: "What is the largest desert in the world?",
        options: {
            a: "Sahara Desert",
            b: "Gobi Desert",
            c: "Antarctica"
        },
        correctAnswer: "a"
    },
    {
        question: "Who is the creator of the Harry Potter series?",
        options: {
            a: "J.K. Rowling",
            b: "J.R.R. Tolkien",
            c: "C.S. Lewis"
        },
        correctAnswer: "a"
    },
    {
        question: "What is the hardest natural substance on Earth?",
        options: {
            a: "Diamond",
            b: "Steel",
            c: "Graphite"
        },
        correctAnswer: "a"
    },
    {
        question: "Who was the first woman to win a Nobel Prize?",
        options: {
            a: "Marie Curie",
            b: "Rosalind Franklin",
            c: "Ada Lovelace"
        },
        correctAnswer: "a"
    },
    {
        question: "What is the chemical symbol for silver?",
        options: {
            a: "Ag",
            b: "Au",
            c: "Sr"
        },
        correctAnswer: "a"
    },
    {
        question: "What is the chemical symbol for sodium?",
        options: {
            a: "Na",
            b: "S",
            c: "Sn"
        },
        correctAnswer: "a"
    },
    {
        question: "Who painted the 'Starry Night'?",
        options: {
            a: "Vincent van Gogh",
            b: "Pablo Picasso",
            c: "Leonardo da Vinci"
        },
        correctAnswer: "a"
    },
    {
        question: "What is the largest mammal?",
        options: {
            a: "Blue Whale",
            b: "Elephant",
            c: "Giraffe"
        },
        correctAnswer: "a"
    },
    {
        question: "Who invented the telephone?",
        options: {
            a: "Alexander Graham Bell",
            b: "Thomas Edison",
            c: "Nikola Tesla"
        },
        correctAnswer: "a"
    },
    {
        question: "What is the chemical symbol for carbon?",
        options: {
            a: "C",
            b: "Ca",
            c: "Co"
        },
        correctAnswer: "a"
    },
    {
        question: "Who wrote 'Pride and Prejudice'?",
        options: {
            a: "Jane Austen",
            b: "Emily Bronte",
            c: "Charlotte Bronte"
        },
        correctAnswer: "a"
    },
    {
        question: "What is the smallest country in the world?",
        options: {
            a: "Vatican City",
            b: "Monaco",
            c: "San Marino"
        },
        correctAnswer: "a"
    },
    {
        question: "Who discovered America?",
        options: {
            a: "Christopher Columbus",
            b: "Amerigo Vespucci",
            c: "Leif Erikson"
        },
        correctAnswer: "a"
    },
    {
        question: "What is the chemical symbol for potassium?",
        options: {
            a: "K",
            b: "P",
            c: "Pt"
        },
        correctAnswer: "a"
    },
    {
        question: "Who was the first female Prime Minister of the United Kingdom?",
        options: {
            a: "Margaret Thatcher",
            b: "Theresa May",
            c: "Angela Merkel"
        },
        correctAnswer: "a"
    },
    {
        question: "What is the main ingredient in guacamole?",
        options: {
            a: "Avocado",
            b: "Tomato",
            c: "Onion"
        },
        correctAnswer: "a"
    },
    {
        question: "Who painted 'The Scream'?",
        options: {
            a: "Edvard Munch",
            b: "Salvador Dali",
            c: "Pablo Picasso"
        },
        correctAnswer: "a"
    },
    {
        question: "What is the chemical symbol for calcium?",
        options: {
            a: "Ca",
            b: "C",
            c: "Co"
        },
        correctAnswer: "a"
    },
    {
        question: "Who wrote 'The Great Gatsby'?",
        options: {
            a: "F. Scott Fitzgerald",
            b: "Ernest Hemingway",
            c: "John Steinbeck"
        },
        correctAnswer: "a"
    },
    {
        question: "What is the highest mountain in the world?",
        options: {
            a: "Mount Everest",
            b: "K2",
            c: "Kangchenjunga"
        },
        correctAnswer: "a"
    },
    {
        question: "Who painted 'The Persistence of Memory'?",
        options: {
            a: "Salvador Dali",
            b: "Vincent van Gogh",
            c: "Pablo Picasso"
        },
        correctAnswer: "a"
    },
    {
        question: "What is the chemical symbol for helium?",
        options: {
            a: "He",
            b: "H",
            c: "Hy"
        },
        correctAnswer: "a"
    },
    {
        question: "Who wrote 'The Odyssey'?",
        options: {
            a: "Homer",
            b: "Virgil",
            c: "Plato"
        },
        correctAnswer: "a"
    },
    {
        question: "What is the chemical symbol for nitrogen?",
        options: {
            a: "N",
            b: "Ni",
            c: "Na"
        },
        correctAnswer: "a"
    },
    {
        question: "Who painted 'The Last Supper'?",
        options: {
            a: "Leonardo da Vinci",
            b: "Michelangelo",
            c: "Raphael"
        },
        correctAnswer: "a"
    },
    {
        question: "What is the chemical symbol for lead?",
        options: {
            a: "Pb",
            b: "L",
            c: "Pl"
        },
        correctAnswer: "a"
    },
    {
        question: "Who wrote 'War and Peace'?",
        options: {
            a: "Leo Tolstoy",
            b: "Fyodor Dostoevsky",
            c: "Anton Chekhov"
        },
        correctAnswer: "a"
    },
    {
        question: "What is the chemical symbol for silver?",
        options: {
            a: "Ag",
            b: "Au",
            c: "Sr"
        },
        correctAnswer: "a"
    },
    {
        question: "Who painted 'The Birth of Venus'?",
        options: {
            a: "Sandro Botticelli",
            b: "Raphael",
            c: "Michelangelo"
        },
        correctAnswer: "a"
    },
    {
        question: "What is the chemical symbol for uranium?",
        options: {
            a: "U",
            b: "Un",
            c: "Ur"
        },
        correctAnswer: "a"
    },
    {
        question: "Who wrote 'The Catcher in the Rye'?",
        options: {
            a: "J.D. Salinger",
            b: "Mark Twain",
            c: "Ernest Hemingway"
        },
        correctAnswer: "a"
    },
    {
        question: "What is the chemical symbol for tin?",
        options: {
            a: "Sn",
            b: "Ti",
            c: "T"
        },
        correctAnswer: "a"
    }
];
