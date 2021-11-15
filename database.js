// Temporary Database
// Array of objects
let Book = [
    {
        ISBN: "12345ONE",
        title: "Getting started with MERN",
        authors: [1, 2],
        language: "en",
        pubDate: "2021-07-07",
        numOfPage: 225,
        category: ["programming", "tech", "web dev"],
        publication: 1,
    },
    {
        ISBN: "12345Two",
        title: "Getting started with Python",
        authors: [1],
        language: "en",
        pubDate: "2021-07-07",
        numOfPage: 225,
        category: ["fiction", "tech", "web dev"],
        publication: 1,
    },
];

let Author = [
    {
        id: 1,
        name: "Megha",
        books: ["12345ONE", "12345Two"],
    },
    {
        id: 2,
        name: "Deepika",
        books: ["12345ONE"],
    },
    {
        id: 3,
        name: "Manya",
        books: [],
    },
];

let Publication = [
    {
        id: 1,
        name: "Chakra",
        books: ["12345ONE"],
    },
    {
        id: 2,
        name: "Dharma",
        books: ["12345Three"],
    },
];

module.exports = { Book, Author, Publication };
