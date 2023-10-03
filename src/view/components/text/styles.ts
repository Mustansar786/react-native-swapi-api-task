// https://material.io/design/typography/the-type-system.html#type-scale

import {StyleSheet} from 'react-native';

import {Colors, Fonts, Layout} from '../../../globals';

export const styles = StyleSheet.create({
  subtitle1: {
    fontSize: 16,
    letterSpacing: 0.15,
    fontWeight: 'normal',
  },
  subtitle2: {
    fontSize: 14,
    letterSpacing: 0.1,
    fontWeight: '500',
  },
  body1: {
    fontSize: 16,
    letterSpacing: 0.5,
    fontWeight: 'normal',
  },
  body2: {
    fontSize: 14,
    letterSpacing: 0.25,
    fontWeight: 'normal',
  },
  button: {
    fontSize: 14,
    letterSpacing: 1.25,
    fontWeight: '500',
  },
  caption: {
    fontSize: 12,
    letterSpacing: 0.4,
    fontWeight: 'normal',
  },
  overline: {
    fontSize: 10,
    letterSpacing: 1.5,
    fontWeight: 'normal',
  },
  headingWrapper: {
    paddingBottom: Layout.heightPercentageToDP(
      Layout.medium / Layout.divisionFactorForHeight,
    ),
  },
  heading1: {
    ...Fonts.heading1,
    color: Colors.primary[500],
  },
  heading2: {
    ...Fonts.heading2,
    color: Colors.foreground,
  },
  heading3: {
    ...Fonts.heading3,
    color: Colors.foreground,
  },
  heading4: {
    ...Fonts.heading4,
  },
  heading5: {
    ...Fonts.heading5,
    color: Colors.foreground,
  },
  heading6: {
    fontSize: 20,
    letterSpacing: 0.15,
    fontWeight: '500',
  },
  paragraph: {
    ...Fonts.paragraph,
    color: Colors.foreground,
  },
  paragraphBold: {
    ...Fonts.paragraphBold,
    color: Colors.foreground,
  },
  paragraphLarge: {
    ...Fonts.paragraphLarge,
    color: Colors.foreground,
  },
  paragraphSmall: {
    ...Fonts.paragraphSmall,
    color: Colors.foreground,
  },
  paragraphTiny: {
    ...Fonts.paragraphTiny,
    color: Colors.foreground,
  },
  paragraphLink: {
    ...Fonts.paragraphLink,
    color: Colors.primary[500],
  },
  paragraphLinkBold: {
    ...Fonts.paragraphLinkBold,
    color: Colors.primary[500],
  },
  textLink: {
    color: Colors.primary[500],
    ...Fonts.bold,
    paddingVertical: Layout.mini,
  },
  micro: {
    ...Fonts.micro,
    color: Colors.foreground,
  },
});

export const StyledTextStyles = styles;
