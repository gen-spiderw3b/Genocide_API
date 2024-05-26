// React Icons
import { GiBatteredAxe } from "react-icons/gi";
import { SiBookstack } from "react-icons/si";
import { IoNewspaperSharp } from "react-icons/io5";
import { GiBabyfootPlayers } from "react-icons/gi";
import { GiPlayerTime } from "react-icons/gi";
import { GiPlayerNext } from "react-icons/gi";
import { IoCreate } from "react-icons/io5";
import { FaUserSecret } from "react-icons/fa6";
//NanoId
import { nanoid } from "nanoid";

const subLinks = [
  {
    pageId: nanoid(),
    page: "headline",
    links: [
      {
        id: nanoid(),
        label: "bulletBoard",
        icon: <IoNewspaperSharp />,
        url: ".",
      },
    ],
  },
  {
    pageId: nanoid(),
    page: "war",
    links: [
      {
        id: nanoid(),
        label: "create group",
        icon: <GiBatteredAxe />,
        url: "war/create-group",
      },
      {
        id: nanoid(),
        label: "browse group",
        icon: <GiBatteredAxe />,
        url: "war/browse-group",
      },
    ],
  },
  {
    pageId: nanoid(),
    page: "education",
    links: [
      {
        id: nanoid(),
        label: "juniorDeveloper",
        icon: <SiBookstack />,
        url: "education/junior-dev",
      },
    ],
  },
  {
    pageId: nanoid(),
    page: "groups",
    links: [
      {
        id: nanoid(),
        label: "see all groups",
        icon: <GiBabyfootPlayers />,
        url: "groups/see-all-groups",
      },
      {
        id: nanoid(),
        label: "create groups",
        icon: <IoCreate />,
        url: "groups/create-groups",
      },
      {
        id: nanoid(),
        label: "edit groups",
        icon: <GiPlayerTime />,
        url: "groups/edit-groups",
      },
      {
        id: nanoid(),
        label: "your groups",
        icon: <GiPlayerNext />,
        url: "groups/user-groups",
      },
    ],
  },
  {
    pageId: nanoid(),
    page: "users",
    links: [
      {
        id: nanoid(),
        label: "user",
        icon: <FaUserSecret />,
        url: "users/update-users",
      },
    ],
  },
];

export default subLinks;
