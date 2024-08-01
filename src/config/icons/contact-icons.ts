import type { IconType } from "react-icons";
import { LuMails, LuMapPin, LuPhone } from "react-icons/lu";

export type ContactIconType = IconType;

export type ContactIcon = "EMAIL" | "ADDRESS" | "PHONE";

const contactIcons: Record<ContactIcon, ContactIconType> = {
  ADDRESS: LuMapPin,
  EMAIL: LuMails,
  PHONE: LuPhone,
};

export default contactIcons;
