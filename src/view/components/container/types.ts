import { StyleProp, ViewStyle } from "react-native";

export type Edge = "top" | "right" | "bottom" | "left";

export type Props = {
  hasScroll?: any;
  bounces?: any;
  onScroll?: any;
  insetsToHandle?: Array<Edge>;
  options?: any;
  screenBackgroundStyle?: StyleProp<ViewStyle>;
  contentContainerStyle?: StyleProp<ViewStyle>;
  scrollEventThrottle?: any;
  persistTaps?: any;
  scrollViewProps?: any;
  containerStyles?: StyleProp<ViewStyle>;
  [x: string]: any;
};
