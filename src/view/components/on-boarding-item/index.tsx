import React from 'react';
import { View, Image, Platform, ViewStyle, StyleProp } from 'react-native';

import { styles } from './styles';
import { BoldParagraph, Heading1, Heading2, SmallParagraph, TinyParagraph } from '../text';
import { Colors, Fonts } from '../../../globals';

type CarouselData = {
    source?: string;
    url?: string;
    heading?: React.ReactNode;
    subHeading?: string;
    title?: string;
    description?: string;
    id: string | number;
    imageStyles?: any;
};

type Props = {
    item: CarouselData,
}

export const OnBoardingCarouselItem = ({ item }: Props) => {
    return (
        <View style={styles.container} >
            {item?.heading}
            <Image resizeMode={'contain'} style={[styles.image, item?.imageStyles]} source={item?.source as any} />
            <Heading2 style={{ maxWidth: '80%', ...Fonts.bold, alignSelf: 'center', color: Colors.background, textAlign: 'center' }}>{item?.description}</Heading2>
        </View >
    );
};