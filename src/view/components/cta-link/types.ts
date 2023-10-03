import { StyleProp, TextStyle, ViewStyle } from "react-native";

export type Props = {
    onPress: Function;
    titleText: string;
    linkText: string;
    titleTextStyle?: StyleProp<TextStyle>;
    linkTextStyle?: StyleProp<TextStyle>;
    containerStyle?: StyleProp<ViewStyle>;
}