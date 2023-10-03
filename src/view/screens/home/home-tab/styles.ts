import { Dimensions, StyleSheet } from "react-native";

import { Colors, Constants, Layout } from "../../../../globals";
import { I18nManager } from "react-native";

const isRTL = I18nManager.isRTL;
export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.transparent,
    paddingTop: Layout.heightPercentageToDP(
      Layout.large / Layout.divisionFactorForHeight
    ),
  },
  tabsSection: {
    paddingHorizontal: Layout.widthPercentageToDP(
      Layout.medium / Layout.divisionFactorForWidth
    ),
    backgroundColor: Colors.background,
  },
  notification_count: {
    width: 24,
    height: 24,
    borderRadius: 50,
    backgroundColor: "red",
    zIndex: 10,
    position: "absolute",
    right: -10,
    top: -12,
    alignItems: "center",
    justifyContent: "center"
  },
  primeDealsContainer: {
    paddingVertical: Layout.heightPercentageToDP(
      Layout.tiny / Layout.divisionFactorForHeight
    ),
    marginTop: Layout.heightPercentageToDP(
      Layout.small / Layout.divisionFactorForHeight
    ),
    paddingLeft: !isRTL ? Constants.DEFAULT_SCREEN_PADDING : 0,
  },
  image: {
    height: Layout.heightPercentageToDP(
      (Layout.xxxlarge * 2.5) / Layout.divisionFactorForHeight
    ),
    borderRadius: Layout.widthPercentageToDP(
      Layout.mini / Layout.divisionFactorForWidth
    ),
    resizeMode: "cover",
  },
  lightHeaderOverlay: {
    height: Layout.heightPercentageToDP(
      Layout.xxlarge / Layout.divisionFactorForHeight
    ),
    position: "absolute",
    opacity: 0.2,
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1001,
  },
  primeDealsHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: Layout.heightPercentageToDP(
      Layout.small / Layout.divisionFactorForHeight
    ),
    paddingLeft: Constants.DEFAULT_SCREEN_PADDING,
  },
  winnerDealsHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: Layout.heightPercentageToDP(
      Layout.small / Layout.divisionFactorForHeight
    ),
    paddingLeft: Constants.DEFAULT_SCREEN_PADDING,
  },
  divider: {
    marginTop: Layout.heightPercentageToDP(Layout.small / Layout.divisionFactorForHeight),
    borderColor: Colors.gray[300],
    flex: 1,
    borderBottomWidth: Layout.heightPercentageToDP(
      Layout.tiny / Layout.divisionFactorForHeight
    ),
  },
  promotionsContainer: {
    paddingHorizontal: Constants.DEFAULT_SCREEN_PADDING,
  },
  promotionsSectionContainer: {
    marginTop: Layout.heightPercentageToDP(
      Layout.mini / Layout.divisionFactorForHeight
    ),
  },
  premiumCouponsSection: {
    marginBottom: Layout.heightPercentageToDP(
      Layout.small / Layout.divisionFactorForHeight
    ),
  },
});
