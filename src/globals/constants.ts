import { Layout } from "./layout";

class _Constants {
  /**
   * Durations in millisecs
   */
  readonly duration = {
    extraShort: 250,
    short: 500,
    medium: 1000,
    long: 2000,
    extraLong: 6000,
  };

  readonly REGEX_EMAIL =
    /^\s*\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.[a-zA-Z0-9\-]{2,})+\s*$/;

  readonly DEFAULT_SCREEN_PADDING = Layout.widthPercentageToDP(
    Layout.medium / Layout.divisionFactorForWidth
  );
  
}

export const Constants = new _Constants();
