import { ViewStyle } from "react-native";
import { StyleProp } from "react-native/types";



export enum RootDetailsTabs {
  FilmsList = "FilmsList",
  StarshipsList = "StarshipsList",
}

export interface ITab {
  label: string;
  tabName: RootDetailsTabs;
  isFeatureDisabled?: boolean;
  onPress: () => void;
}

export interface TabsProps {
  selectedTab: RootDetailsTabs;
  containerStyles?: StyleProp<ViewStyle>;
  tabs?: ITab[];
  activeTabBg?: string;
  activeTabFg?: string;
  inActiveTabBg?: string;
  inActiveTabFg?: string;
}
