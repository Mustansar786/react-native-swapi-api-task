import { StyleSheet } from "react-native";
import { Colors, Fonts, Layout } from "../../../globals";

export const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: Layout.heightPercentageToDP(
      Layout.medium / Layout.divisionFactorForHeight
    ),
    width: Layout.full,
    backgroundColor: Colors.blue[400],
    paddingVertical: Layout.heightPercentageToDP(
      Layout.small / Layout.divisionFactorForHeight
    ),
    borderRadius: Layout.widthPercentageToDP(Layout.tiny),
    alignContent: "center",
    justifyContent: "center",
    alignSelf: "center",
    flexDirection: "row",
  },
  btnLabel: {
    textAlign: "center",
    color: Colors.background,
    ...Fonts.bold,
  },
});
