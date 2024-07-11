import { nanoid } from "nanoid";
// // import { GiBatteredAxe } from "react-icons/gi";
// // import { SiBookstack } from "react-icons/si";
// import { IoNewspaperSharp } from "react-icons/io5";
// // import { GiBabyfootPlayers } from "react-icons/gi";
// import { IoCreate } from "react-icons/io5";
// // import { FaUserSecret } from "react-icons/fa6";

let president = "president";

export const subLinks = [
  {
    pageId: nanoid(),
    page: "Headline News",

    links: [
      {
        id: nanoid(),
        label: "Browse News",
        url: "",
      },
    ],
  },
  {
    pageId: nanoid(),
    page: "President",
    permission: president,
    links: [
      {
        id: nanoid(),
        label: "Create Headline",
        url: "",
      },
    ],
  },
];
