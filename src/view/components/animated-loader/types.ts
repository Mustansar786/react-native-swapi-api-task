import { StyleProp, ViewStyle } from 'react-native';

export enum AnimatedLoaderType {
    Spinner = 'Spinner',
}

export type Props = {
    size?: number | 'small' | 'large';
    color?: string;
    containerStyle?: StyleProp<ViewStyle>;
    loaderStyle?: StyleProp<ViewStyle>;
    type?: AnimatedLoaderType;
};
