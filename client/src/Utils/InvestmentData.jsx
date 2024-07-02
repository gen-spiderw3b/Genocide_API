import { nanoid } from "nanoid";
// import { GiBatteredAxe } from "react-icons/gi";
// import { SiBookstack } from "react-icons/si";
import { IoNewspaperSharp } from "react-icons/io5";
// import { GiBabyfootPlayers } from "react-icons/gi";
import { IoCreate } from "react-icons/io5";
// import { FaUserSecret } from "react-icons/fa6";

export const subLinks = [
  {
    page: nanoid(),
    headline: "headline",
    links: [
      {
        id: nanoid(),
        label: "bulletBoard",
        icon: <IoNewspaperSharp />,
        url: ".",
      },
      {
        id: nanoid(),
        label: "Create A Headline",
        icon: <IoCreate />,
        url: "headline/create-headline",
      },
    ],
  },
  {
    page: nanoid(),
    headline: "schedule",
    links: [
      {
        id: nanoid(),
        label: "Create A schedule",
        icon: <IoNewspaperSharp />,
        url: "schedule/create-schedule",
      },
    ],
  },
];
