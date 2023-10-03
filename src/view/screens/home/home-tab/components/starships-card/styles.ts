import { StyleSheet } from "react-native";
import { Colors, Fonts, Layout } from "../../../../../../globals";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    width: Layout.full,
    marginBottom: Layout.heightPercentageToDP(
      Layout.small / Layout.divisionFactorForHeight
    ),
    borderRadius: Layout.widthPercentageToDP(
      Layout.mini / Layout.divisionFactorForWidth
    ),
    paddingTop: Layout.widthPercentageToDP(
      Layout.medium / Layout.divisionFactorForWidth
    ),
    paddingLeft: Layout.widthPercentageToDP(
      Layout.medium / Layout.divisionFactorForWidth
    ),
    paddingRight: Layout.widthPercentageToDP(
      Layout.medium / Layout.divisionFactorForWidth
    ),
    ...Layout.shadowBox.shallow,
  },
  cardContent: {
    flexDirection: "row",
    alignItems: "center",
    width: Layout.full,
  },
  image: {
    width: "30%",
    marginRight: Layout.widthPercentageToDP(
      Layout.small / Layout.divisionFactorForWidth
    ),
    // borderTopLeftRadius: Layout.widthPercentageToDP(
    //   Layout.mini / Layout.divisionFactorForWidth
    // ),
    // borderTopRightRadius: Layout.widthPercentageToDP(
    //   Layout.mini / Layout.divisionFactorForWidth
    // ),
    height: Layout.heightPercentageToDP(
      (Layout.xxxlarge * 1) / Layout.divisionFactorForHeight
    ),
  },
  details: {
    color: Colors.gray[700],
    fontSize: Fonts.micro.fontSize - 2,
    marginVertical: Layout.heightPercentageToDP(
      Layout.tiny / Layout.divisionFactorForHeight
    ),
    paddingLeft: 10,
    paddingRight: 10,
    width: "100%",
    marginBottom: Layout.heightPercentageToDP(
      Layout.micro / Layout.divisionFactorForHeight
    ),
  },
  name: {
    ...Fonts.bold,
    // marginVertical: Layout.heightPercentageToDP(
    //   Layout.tiny / Layout.divisionFactorForHeight
    // ),
    color: Colors.gray[700],
  },
  announce: {
    color: Colors.gray[700],
  },
  date: {
    ...Fonts.bold,
    color: Colors.gray[700],
  },
  detailsContainer: {
    width: "95%",
  },
  rowBetween: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: Layout.full,
  },
});
