import { AppIconName } from "../icon/types";

export type Props = {
  iconName: AppIconName;
  description: string;
  buttonLable: string;
  customeAction?: () => void;
};
