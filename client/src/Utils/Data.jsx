// React Icons
import { GiBatteredAxe } from "react-icons/gi";
import { SiBookstack } from "react-icons/si";
import { IoNewspaperSharp } from "react-icons/io5";
import { GiBabyfootPlayers } from "react-icons/gi";
import { GiPlayerTime } from "react-icons/gi";
import { GiPlayerNext } from "react-icons/gi";
import { IoCreate } from "react-icons/io5";
import { FaUserSecret } from "react-icons/fa6";
//features
export const features = [
  { text: "headline", path: "headline", icon: <IoNewspaperSharp /> },
];

//war
export const war = [{ text: "war", path: "war", icon: <GiBatteredAxe /> }];

//user
export const user = [
  { text: "update User", path: "update-user", icon: <FaUserSecret /> },
];

//Network
export const groups = [
  {
    text: "see all groups",
    path: "see-all-groups",
    icon: <GiBabyfootPlayers />,
  },
  { text: "create groups", path: "create-groups", icon: <IoCreate /> },
  { text: "edit groups", path: "edit-groups", icon: <GiPlayerTime /> },
  { text: "your groups", path: "user-groups", icon: <GiPlayerNext /> },
];

//education
export const education = [
  { text: "education", path: "education", icon: <SiBookstack /> },
];
