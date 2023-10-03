import React from 'react';
import { View, } from 'react-native';


import { styles } from './styles';
import { Props } from './types';
import { Paragraph, ParagraphLink } from '../text';

export const CtaLink = (props: Props) => {
    return (
        <View style={[styles.container, props.containerStyle]}>
            <Paragraph style={[styles.textStyle, props.titleTextStyle]}>{props.titleText}</Paragraph>
            <ParagraphLink
                // @ts-ignore
                style={[styles.linkTextStyle, props.linkTextStyle]}
                onPress={() => props.onPress()}
                title={props.linkText}
            />
        </View>
    )
}
