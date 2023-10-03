import { StyleSheet } from "react-native";
import { Colors, Fonts, Layout } from "../../../globals";

export const styles = StyleSheet.create({
  container: {
    width: Layout.window.width,
  },
  heading: {
    ...Fonts.bold,
    color: Colors.accent[700],
    textAlign: "center",
  },
  image: {
    width: "100%",
    paddingHorizontal: Layout.widthPercentageToDP(
      Layout.xxxlarge / Layout.divisionFactorForWidth
    ),
    marginVertical: Layout.heightPercentageToDP(
      Layout.small / Layout.divisionFactorForHeight
    ),
    height: "75%",
  },
});
