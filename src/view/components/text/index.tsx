import React from 'react';
import { ColorValue, StyleSheet, Text, TextStyle, TouchableOpacity } from 'react-native';
import { Layout } from '../../../globals';
import { styles } from './styles';
import { Emphasis, ParagraphLinkBoldProps, ParagraphLinkProps, Props, SmallParagraphLinkProps } from './types';


// https://material.io/design/color/text-legibility.html#text-backgrounds
const handleEmphasis = (emph?: Emphasis): ColorValue => {
  switch (emph) {
    case 'low':
      return '#00000061'; // 38%
    case 'high':
      return '#000000DE'; // 87%
    case 'medium':
      return '#00000099'; // 60%
    default:
      return '#000000DE';
  }
};

export const Heading1: Props = (props) => {
  const style = StyleSheet.compose(
    [styles.heading1, { color: handleEmphasis(props.emphasis) }],
    props.style
  );
  return (
    <Text {...props} allowFontScaling={false} style={style}>
      {props.children}
    </Text>
  );
};
export const Heading2: Props = (props) => {
  const style = StyleSheet.compose(
    [styles.heading2, { color: handleEmphasis(props.emphasis) }],
    props.style
  );
  return (
    <Text {...props} allowFontScaling={false} style={style}>
      {props.children}
    </Text>
  );
};
export const Heading3: Props = (props) => {
  const style = StyleSheet.compose(
    [styles.heading3, { color: handleEmphasis(props.emphasis) }],
    props.style
  );
  return (
    <Text {...props} allowFontScaling={false} style={style}>
      {props.children}
    </Text>
  );
};
export const Heading4: Props = (props) => {
  const style = StyleSheet.compose(
    [styles.heading4, { color: handleEmphasis(props.emphasis) }],
    props.style
  );
  return (
    <Text {...props} allowFontScaling={false} style={style}>
      {props.children}
    </Text>
  );
};

export const Heading5: Props = (props) => {
  const style = StyleSheet.compose(
    [styles.heading5, { color: handleEmphasis(props.emphasis) }],
    props.style
  );
  return (
    <Text {...props} allowFontScaling={false} style={style}>
      {props.children}
    </Text>
  );
};
export const Paragraph: Props = (props) => {
  const style = StyleSheet.compose(
    [styles.paragraph, { color: handleEmphasis(props.emphasis), }],
    props.style
  );
  return (
    <Text {...props} allowFontScaling={false} style={style}>
      {props.children}
    </Text>
  );
};
export const LargeParagraph: Props = (props) => {
  const style = StyleSheet.compose(
    [styles.paragraphLarge, { color: handleEmphasis(props.emphasis) }],
    props.style
  );
  return (
    <Text {...props} allowFontScaling={false} style={style} numberOfLines={props.maxNumberOfLines}>
      {props.children}
    </Text>
  );
};
export const BoldParagraph: Props = (props) => {
  const style = StyleSheet.compose(
    [styles.paragraphBold, { color: handleEmphasis(props.emphasis) }],
    props.style
  );
  return (
    <Text {...props} allowFontScaling={false} style={style}>
      {props.children}
    </Text>
  );
};
export const SmallParagraph: Props = (props) => {
  const style = StyleSheet.compose(
    [styles.paragraphSmall, { color: handleEmphasis(props.emphasis) }],
    props.style
  );
  return (
    <Text {...props} allowFontScaling={false} style={style} numberOfLines={props.maxNumberOfLines}>
      {props.children}
    </Text>
  );
};
export const TinyParagraph: Props = (props) => {
  const style = StyleSheet.compose(
    [styles.paragraphTiny, { color: handleEmphasis(props.emphasis) }],
    props.style
  );
  return (
    <Text {...props} allowFontScaling={false} style={style} numberOfLines={props.maxNumberOfLines}>
      {props.children}
    </Text>
  );
};
export const Micro: Props = (props) => {
  const style = StyleSheet.compose(
    [styles.micro, { color: handleEmphasis(props.emphasis) }],
    props.style
  );
  return (
    <Text {...props} allowFontScaling={false} style={style}>
      {props.children}
    </Text>
  );
};

export const Heading6: Props = (props) => {
  const style = StyleSheet.compose(
    [styles.heading6, { color: handleEmphasis(props.emphasis) }],
    props.style
  );
  return (
    <Text {...props} allowFontScaling={false} style={style}>
      {props.children}
    </Text>
  );
};

export const Subtitle1: Props = (props) => {
  const style = StyleSheet.compose(
    [styles.subtitle1, { color: handleEmphasis(props.emphasis) }],
    props.style
  );
  return (
    <Text {...props} allowFontScaling={false} style={style}>
      {props.children}
    </Text>
  );
};

export const Subtitle2: Props = (props) => {
  const style = StyleSheet.compose(
    [styles.subtitle2, { color: handleEmphasis(props.emphasis) }],
    props.style
  );
  return (
    <Text {...props} allowFontScaling={false} style={style}>
      {props.children}
    </Text>
  );
};

export const Body1: Props = (props) => {
  const style = StyleSheet.compose([styles.body1, { color: handleEmphasis(props.emphasis) }], props.style);
  return (
    <Text {...props} allowFontScaling={false} style={style}>
      {props.children}
    </Text>
  );
};

export const Body2: Props = (props) => {
  const style = StyleSheet.compose([styles.body2, { color: handleEmphasis(props.emphasis) }], props.style);
  return (
    <Text {...props} allowFontScaling={false} style={style}>
      {props.children}
    </Text>
  );
};

export const Caption: Props = (props) => {
  const style = StyleSheet.compose([styles.caption, { color: handleEmphasis(props.emphasis) }], props.style);
  return (
    <Text {...props} allowFontScaling={false} style={style}>
      {props.children}
    </Text>
  );
};

export const Overline: Props = (props) => {
  const style = StyleSheet.compose(
    [styles.overline, { color: handleEmphasis(props.emphasis) }],
    props.style
  );
  return (
    <Text {...props} allowFontScaling={false} style={style}>
      {props.children}
    </Text>
  );
};

export const ParagraphLinkBold = (props: ParagraphLinkBoldProps) => {
  return (
    <TouchableOpacity onPress={props?.onPress} style={props?.containerStyle}>
      <Text style={[styles.paragraphLinkBold, props?.style]}>{props?.title}</Text>
    </TouchableOpacity>
  )
}
export const ParagraphLink = (props: ParagraphLinkProps) => {
  return (
    <TouchableOpacity onPress={props?.onPress} style={props?.containerStyle}>
      <Text style={[styles.paragraphLink, props?.style]}>{props?.title}</Text>
    </TouchableOpacity>
  );
}
export const SmallParagraphLink = (props: SmallParagraphLinkProps) => {
  return <Text {...props} onPress={() => props.onPress()} style={[styles.textLink, props.style]} />;
}