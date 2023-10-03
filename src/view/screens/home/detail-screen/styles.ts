import { StyleSheet } from "react-native";

import { Colors, Layout } from "../../../../globals";

export const styles = StyleSheet.create({
  container: { flex: 1 },
  screenContent: {},
  infoSection: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: Colors.background,
    marginVertical: Layout.heightPercentageToDP(
      Layout.small / Layout.divisionFactorForHeight
    ),
    borderRadius: Layout.widthPercentageToDP(
      Layout.mini / Layout.divisionFactorForWidth
    ),
    padding: Layout.heightPercentageToDP(
      Layout.small / Layout.divisionFactorForHeight
    ),
    paddingVertical: Layout.heightPercentageToDP(
      Layout.medium / Layout.divisionFactorForHeight
    ),
  },
  image: {
    width: Layout.widthPercentageToDP(
      Layout.xxlarge / Layout.divisionFactorForWidth
    ),
    marginRight: Layout.widthPercentageToDP(
      Layout.mini / Layout.divisionFactorForWidth
    ),
    borderRadius: Layout.widthPercentageToDP(
      Layout.xxxlarge / Layout.divisionFactorForWidth
    ),
    height: Layout.widthPercentageToDP(
      Layout.xxlarge / Layout.divisionFactorForWidth
    ),
  },
  userNameContainer: {
    marginLeft: Layout.widthPercentageToDP(
      Layout.small / Layout.divisionFactorForWidth
    ),
  },
  section: {
    backgroundColor: Colors.background,
    marginVertical: Layout.heightPercentageToDP(
      Layout.small / Layout.divisionFactorForHeight
    ),
    borderRadius: Layout.widthPercentageToDP(
      Layout.mini / Layout.divisionFactorForWidth
    ),
  },
  sectionItem: {
    borderBottomColor: Colors.gray[300],
    borderBottomWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: Layout.heightPercentageToDP(
      Layout.small / Layout.divisionFactorForHeight
    ),
  },
  button: {
    borderRadius: Layout.widthPercentageToDP(
      Layout.mini / Layout.divisionFactorForWidth
    ),
    borderColor: Colors.primary["DEFAULT"],
    borderWidth: 1,
    paddingHorizontal: Layout.widthPercentageToDP(
      Layout.medium / Layout.divisionFactorForWidth
    ),
    paddingVertical: Layout.heightPercentageToDP(
      Layout.micro / Layout.divisionFactorForHeight
    ),
  },
  topUpBtn: {
    borderTopRightRadius: Layout.widthPercentageToDP(
      Layout.mini / Layout.divisionFactorForWidth
    ),
    borderBottomRightRadius: Layout.widthPercentageToDP(
      Layout.mini / Layout.divisionFactorForWidth
    ),
    backgroundColor: Colors.primary["DEFAULT"],
    height: Layout.full,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: Layout.widthPercentageToDP(
      Layout.micro / Layout.divisionFactorForWidth
    ),
  },
  input: {
    color: Colors.gray[800],
    paddingHorizontal: Layout.widthPercentageToDP(
      Layout.mini / Layout.divisionFactorForWidth
    ),
    flex: 1,
  },
  topUpContainer: {
    flexDirection: "row",
    alignItems: "center",
    height: Layout.heightPercentageToDP(
      Layout.xxlarge / Layout.divisionFactorForHeight
    ),
    marginVertical: Layout.heightPercentageToDP(
      Layout.small / Layout.divisionFactorForHeight
    ),
  },
  topUpInput: {
    backgroundColor: Colors.background,
    flex: 1,
    height: Layout.full,
    padding: Layout.zero,
    marginVertical: Layout.zero,
    borderTopRightRadius: Layout.zero,
    borderBottomRightRadius: Layout.zero,
    borderTopLeftRadius: Layout.widthPercentageToDP(
      Layout.mini / Layout.divisionFactorForWidth
    ),
    borderRightLeftRadius: Layout.widthPercentageToDP(
      Layout.mini / Layout.divisionFactorForWidth
    ),
  },
});
