import type { IconType } from "react-icons";
import { LuBookOpen, LuCode2, LuPenTool, LuPlane } from "react-icons/lu";
import { MdLocalLibrary, MdTravelExplore } from "react-icons/md";
import { AiOutlineCode } from "react-icons/ai";

export type HobbyIconType = IconType;

export type HobbyIcon = "READING_BOOKS" | "DESIGN" | "CODE" | "TRAVEL";

const hobbyIcons: Record<HobbyIcon, HobbyIconType> = {
  CODE: AiOutlineCode,
  DESIGN: LuPenTool,
  READING_BOOKS: MdLocalLibrary,
  TRAVEL: MdTravelExplore,
};

export default hobbyIcons;
