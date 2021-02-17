const projects = [
  {
    id: "scrabble-scorekeeper",
    title: "Scrabble Scorekeeper",
    shortDescription: "A web-based program designed to calculate turn scores in Scrabble.",
    longDescription: [
      `Built with React, this project was created to make playing the board game version of
       Scrabble more enjoyable and less time-consuming by offloading the task of calculating player scores to a computer.`,
      `It features an easy-to-use graphical user interface comprised of a virtual Scrabble board and a table for displaying
       player scores. A dictionary is included to validate each word formed. The board, table and tiles were styled using CSS.`,
      `In the near future I plan on revisiting this project to convert it into a multiplayer game with an A.I player component.`
    ],
    url: "/projects/scrabble-scorekeeper",
    ghLink: "https://github.com/Jamnic98/scrabble-scorekeeper/blob/master/README.md",
    screenshots: ["/images/scrabble-tiles.png", "/images/scrabble-table.png", "/images/scrabble-board.png"],
    mainLanguage: "javaScript",
    projectLink: "https://scrabble-scorekeeper.netlify.app/",
  }, {
    id: "pyramid-solitaire",
    title: "Pyramid Solitaire",
    shortDescription: "A program based on a variation of the card game, solitaire.",
    longDescription: [`
      This program was written in Python using the Pygame library. It features sprite animations, programmed with
      vector maths, and can detect when there are no further moves playable.`
    ],
    url: "/projects/pyramid-solitaire",
    ghLink: "https://github.com/Jamnic98/pyramid-solitaire/blob/main/README.md",
    screenshots: ["/images/pyramid-solitaire.png", "/images/pyramid-solitaire-end-game.png", "/images/pyramid-solitaire-start-screen.png"],
    mainLanguage: "python",
    projectLink: null,
  }, {
    id: "reading-log",
    title: "Reading Log",
    shortDescription: "A list of books the user has read, stored in a MySQL database.",
    longDescription: [`
      This program, written in Java, interfaces with a MySQL database to store a list of books the user wants to read
      and has already read. It also stores information about each book such as the title, author, a rating out of 10
      and also comments about the book. The graphical user interface was made using the JavaFX library and features
      a search bar to filter data.`
    ],
    url: "/projects/reading-log",
    ghLink: "https://github.com/Jamnic98/reading-log/blob/main/README.md",
    screenshots: ["/images/reading-log.jpg", "/images/reading-log-move.png"],
    mainLanguage: "java",
    projectLink: null,
  },
]

export default projects;
