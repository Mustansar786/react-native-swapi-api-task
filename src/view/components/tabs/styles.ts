import { StyleSheet } from "react-native";
import { Colors, Layout } from "../../../globals";

export const styles = StyleSheet.create({
  tabsContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: Layout.small,
    backgroundColor: Colors.gray[100],
    padding: Layout.widthPercentageToDP(Layout.micro / Layout.divisionFactorForWidth),
    borderRadius: Layout.widthPercentageToDP(
      Layout.mini / Layout.divisionFactorForWidth
    ),
  },
  tab: {
    flex: 1,
    backgroundColor: Colors.primary['DEFAULT'],
    borderRadius: Layout.widthPercentageToDP(Layout.mini / Layout.divisionFactorForWidth),
    paddingVertical: Layout.heightPercentageToDP(
      Layout.mini / Layout.divisionFactorForHeight
    ),
  },
  textCenter: {
    textAlign: "center",
  },
});
