import React from 'react';
import { ActivityIndicator, ViewStyle, StyleProp, View } from 'react-native';

import { Colors, Layout } from '../../../globals';

import { styles } from './styles';
import { AnimatedLoaderType, Props } from './types';

export const AnimatedLoader = (props: Props) => {
    const { size, color, containerStyle, type, loaderStyle } = props;

    const renderAnimatedLoader = (
        loaderType: AnimatedLoaderType = AnimatedLoaderType.Spinner,
        loaderSize: number | 'small' | 'large' = Layout.xxlarge,
        loaderColor: string = Colors.gray[200],
        loaderStyle: StyleProp<ViewStyle> = styles.spinner
    ) => {
        switch (loaderType) {
            case AnimatedLoaderType.Spinner:
            default:
                return <ActivityIndicator size={loaderSize || 'large'} color={loaderColor} style={loaderStyle} />;
        }
    };

    return (
        <View style={[styles.container, containerStyle]}>
            {renderAnimatedLoader(type, size, color, loaderStyle)}
        </View>
    );
}

