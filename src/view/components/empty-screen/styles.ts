import { StyleSheet } from "react-native";
import { Colors, Fonts, Layout } from "../../../globals";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Layout.full,
    alignSelf: "center",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  description: {
    marginTop: Layout.heightPercentageToDP(
      Layout.medium / Layout.divisionFactorForHeight
    ),
    color: Colors.gray[700],
    textAlign: "center",
    paddingBottom: Layout.heightPercentageToDP(
      Layout.micro / Layout.divisionFactorForHeight
    ),
  },
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
  },
  btnLabel: {
    textAlign: "center",
    color: Colors.background,
    ...Fonts.bold,
  },
});
