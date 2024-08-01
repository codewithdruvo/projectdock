import type { IconType } from "react-icons";
import { AiOutlineBorderlessTable } from "react-icons/ai";
import { FaReadme } from "react-icons/fa";
import { CgMediaLive } from "react-icons/cg";
import { TbSourceCode } from "react-icons/tb";

export type ProjectIconType = IconType;

export type ProjectIcon = "VIEW_MORE" | "SOURCE" | "PREVIEW" | "TECH";

const projectIcons: Record<ProjectIcon, ProjectIconType> = {
  VIEW_MORE: FaReadme,
  PREVIEW: CgMediaLive,
  SOURCE: TbSourceCode,
  TECH: AiOutlineBorderlessTable
};

export default projectIcons;
