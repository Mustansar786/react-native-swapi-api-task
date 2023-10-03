import { StyleProp, ViewStyle } from "react-native";

import { Layout } from "../../../globals";
import { ItemType } from "../../../types";

export type Props = {
  name: AppIconName;
  iconSize?: AppIconSize;
  type?: AppIconType | ItemType;
  style?: StyleProp<ViewStyle>;
  color?: string;
  backgroundColor?: string;
};

export enum AppIconName {
  tickets = "Sooq-Group-3641",
  activeDraws = "Sooq-active-draws",
  add = "Sooq-add",
  backArrow = "Sooq-back-arrow",
  bin = "Sooq-bin",
  cartFilled = "Sooq-cart-filled",
  cart = "Sooq-cart",
  charity = "Sooq-charity",
  coins = "Sooq-logo",
  currency = "Sooq-currency",
  dubaiEconomy = "Sooq-dubai-economy",
  editPen = "Sooq-edit-pen",
  heartFilled = "Sooq-heart-filled",
  heart = "Sooq-heart",
  homeFilled = "Sooq-home-filled",
  home = "Sooq-home",
  language = "Sooq-language",
  locationPin = "Sooq-location-pin",
  logout = "Sooq-logout",
  notification = "Sooq-notification",
  logo = "Sooq-logo",
  officeLocation = "Sooq-office-location",
  orderHistory = "Sooq-order-history",
  premiumCoupons = "Sooq-premium-coupons",
  profileFilled = "Sooq-profile-filled",
  profile = "Sooq-profile",
  referFriend = "Sooq-refer-friend",
  rightArrow = "Sooq-right-arrow",
  support = "Sooq-support",
  ticketsFilled = "Sooq-tickets-filled",
  truck = "Sooq-truck",
  building = "Sooq-building",
  privacyPolicy = "Sooq-privacy-policy",
  termsOfUse = "Sooq-terms-of-use",
}

export enum AppIconSize {
  tiny = Layout.widthPercentageToDP(
    Layout.icon.size.tiny / Layout.divisionFactorForWidth
  ),
  micro = Layout.widthPercentageToDP(
    Layout.icon.size.micro / Layout.divisionFactorForWidth
  ),
  mini = Layout.widthPercentageToDP(
    Layout.icon.size.mini / Layout.divisionFactorForWidth
  ),
  small = Layout.widthPercentageToDP(
    Layout.icon.size.small / Layout.divisionFactorForWidth
  ),
  medium = Layout.widthPercentageToDP(
    Layout.icon.size.medium / Layout.divisionFactorForWidth
  ),
  primary = Layout.widthPercentageToDP(
    Layout.icon.size.large / Layout.divisionFactorForWidth
  ),
  xlarge = Layout.widthPercentageToDP(
    Layout.icon.size.xlarge / Layout.divisionFactorForWidth
  ),
  xxlarge = Layout.widthPercentageToDP(
    Layout.icon.size.xxlarge / Layout.divisionFactorForWidth
  ),
  xxxlarge = Layout.widthPercentageToDP(
    Layout.icon.size.xxxlarge / Layout.divisionFactorForWidth
  ),
  huge = Layout.widthPercentageToDP(
    Layout.icon.size.huge / Layout.divisionFactorForWidth
  ),
}

export enum AppIconType {
  primary = "primary",
  info = "info",
  action = "action",
  success = "success",
  error = "error",
  pending = "pending",
  warning = "warning",
}
