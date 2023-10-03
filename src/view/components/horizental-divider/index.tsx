import React from 'react';
import { View } from 'react-native';

import { Heading3 } from '../text';
import { styles } from './styles';
import { Props } from './types';
import { Conditional } from '../conditional';

export const HorizontalDivider = (props: Props) => {
    const HorizontalLine = <View style={[styles.divider, props.dividerStyle]} />;
    return (
        <Conditional ifTrue={props.text} elseChildren={HorizontalLine}>
            <View style={[styles.componentWrapper, props.containerStyle]}>
                {HorizontalLine}
                <Heading3 style={[styles.text, props.textStyle]}>{props.text}</Heading3>
                {HorizontalLine}
            </View>
        </Conditional>
    );
};
