import { StyleProp, TextStyle, ViewStyle } from "react-native";

export type Props = {
    text?: string;
    containerStyle?: StyleProp<ViewStyle>;
    dividerStyle?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
}