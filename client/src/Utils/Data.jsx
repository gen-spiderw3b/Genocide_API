// React Icons
import { GiBatteredAxe } from "react-icons/gi";
import { SiBookstack } from "react-icons/si";
import { IoNewspaperSharp } from "react-icons/io5";
import { GiBabyfootPlayers } from "react-icons/gi";
import { GiPlayerTime } from "react-icons/gi";
import { GiPlayerNext } from "react-icons/gi";
import { IoCreate } from "react-icons/io5";
import { FaUserSecret } from "react-icons/fa6";

const links = [
  { text: "headline", path: ".", icon: <IoNewspaperSharp /> },
  { text: "war", path: "war", icon: <GiBatteredAxe /> },
  { text: "update User", path: "update-user", icon: <FaUserSecret /> },
  { text: "education", path: "education", icon: <SiBookstack /> },
  {
    text: "see all groups",
    path: "see-all-groups",
    icon: <GiBabyfootPlayers />,
  },
  { text: "create groups", path: "create-groups", icon: <IoCreate /> },
  { text: "edit groups", path: "edit-groups", icon: <GiPlayerTime /> },
  { text: "your groups", path: "user-groups", icon: <GiPlayerNext /> },
];
export default links;
