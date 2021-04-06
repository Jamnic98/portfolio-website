const projects = [
  {
    id: "scrabble-scorekeeper",
    title: "Scrabble Scorekeeper",
    shortDescription:
      "A web-based program designed to calculate turn scores in Scrabble.",
    longDescription: [
      `Built with React, this project was created to make playing the board game version of
       Scrabble more enjoyable and less time-consuming by offloading the task of calculating player scores to a computer.`,
      `It features an easy-to-use graphical user interface comprised of a virtual Scrabble board and a table for displaying
       player scores. A dictionary is included to validate each word formed. The board, table and tiles were styled using CSS.`,
      `In the near future I plan on revisiting this project to convert it into a multiplayer game with an A.I player component.`,
    ],
    url: "/projects/scrabble-scorekeeper",
    ghLink:
      "https://github.com/Jamnic98/scrabble-scorekeeper/blob/master/README.md",
    screenshots: [
      "/images/scrabble-tiles.png",
      "/images/scrabble-table.png",
      "/images/scrabble-board.png",
    ],
    mainLanguage: "javaScript",
    projectLink: "https://scrabble-scorekeeper.netlify.app/",
  },
  {
    id: "pyramid-solitaire",
    title: "Pyramid Solitaire",
    shortDescription:
      "A program based on a variation of the card game, solitaire.",
    longDescription: [
      `
      This program was written in Python using the Pygame library. It features sprite animations, programmed with
      vector maths, and can detect when there are no further moves playable.`,
    ],
    url: "/projects/pyramid-solitaire",
    ghLink: "https://github.com/Jamnic98/pyramid-solitaire/blob/main/README.md",
    screenshots: [
      "/images/pyramid-solitaire.png",
      "/images/pyramid-solitaire-end-game.png",
      "/images/pyramid-solitaire-start-screen.png",
    ],
    mainLanguage: "python",
    projectLink: null,
  },
  {
    id: "inventory-management-system",
    title: "Inventory Management System",
    shortDescription: "A M.E.R.N stack app to track items around the house.",
    longDescription: [
      `
      This application was made with the intention of being used in a home to 
      be accessed by clients on the home network. With the help of Material-UI, 
      the client side of this program is fully responsive and easy to use both on 
      desktop and mobile devices. The GUI is comprised of three main parts: the main 
      table, the expiring soon panel and the low stock panel. The main table is where 
      all the inventory items displayed. The main table features a search bar and also 
      buttons to perform CRUD operations on the items.
    `,
      `
      All items have the following attributes: item name, quantity, room, location,
      expiration date and low stock alert. Items with an expiration date set are monitored 
      by the program and are added to the expiring soon panel when the expiration date is two 
      weeks away or less. Each day, the program will compile a list of items expiring the following 
      day and will notify all users by sending them an email alert.
    `,
      `
      Items with the low stock alert turned on are be monitored by the program so that when the quantity
      of the item falls to 1, it is added to the list of items low in stock. From there, a user can choose 
      to send a low stock alert, which will send emails to specified users with the list of low stock items.
    `,
    ],
    url: "/projects/inventory-management-system",
    ghLink:
      "https://github.com/Jamnic98/inventory-management-system/blob/main/README.md",
    screenshots: [
      "/images/ims.png",
      "/images/edit-item-modal.png",
      "/images/remove-item-modal.png",
      "/images/locations-settings.png",
      "/images/email-settings.png",
    ],
    mainLanguage: "javaScript",
    projectLink: null,
  },
  {
    id: "reading-log",
    title: "Reading Log",
    shortDescription:
      "A list of books the user has read, stored in a MySQL database.",
    longDescription: [
      `
      This program, written in Java, interfaces with a MySQL database to store a list of books the user wants to read
      and has already read. It also stores information about each book such as the title, author, a rating out of 10
      and also comments about the book. The graphical user interface was made using the JavaFX library and features
      a search bar to filter data.`,
    ],
    url: "/projects/reading-log",
    ghLink: "https://github.com/Jamnic98/reading-log/blob/main/README.md",
    screenshots: ["/images/reading-log.jpg", "/images/reading-log-move.png"],
    mainLanguage: "java",
    projectLink: null,
  },
];

export default projects;
