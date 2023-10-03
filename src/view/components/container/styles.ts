import { StyleSheet } from "react-native";
import { Colors, Layout } from "../../../globals";

export const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: Colors.background,
  },
  bodyContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingHorizontal: Layout.widthPercentageToDP(Layout.medium / Layout.divisionFactorForWidth),
    backgroundColor: Colors.transparent,
    zIndex: 1,
  },
  backgroundImageStyle: {
    flex: 1,
  },
});
