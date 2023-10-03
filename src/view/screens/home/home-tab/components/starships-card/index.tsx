import React from 'react'
import { Image, TouchableOpacity, View } from "react-native"

import { Colors, Constants, Fonts, Layout } from '../../../../../../globals';
import { Conditional, Micro, SmallParagraph } from '../../../../../components';
import { navigate } from '../../../../../navigation'
import { styles } from './styles'
import { Props } from './types'


export const StarshipCard = (props: Props) => {
    const { item } = props

    const handleCardPress = () => {
        navigate('DetailScreen', { item, screen: "starships" })
    }

    const RenderDottedLine = (
        <View style={{ overflow: 'hidden' }}>
            <View
                style={{
                    borderStyle: 'dashed',
                    borderWidth: 1,
                    borderColor: Colors.foreground,
                    margin: -2,
                    marginTop: Layout.heightPercentageToDP(Layout.mini / Layout.divisionFactorForHeight),
                }}>
                <View style={{ height: 2, width: '100%' }} />
            </View>
        </View>
    )

    return (
        <TouchableOpacity onPress={handleCardPress}>
        <View style={styles.container} >
            <View style={{flexDirection: "row",}}>
                <SmallParagraph style={styles.name} >
                        {item?.name}
                    </SmallParagraph>
                </View>
            <View style={styles.cardContent} >
                
                
                {/* <View style={styles.detailsContainer}>
                    <Micro ellipsizeMode='tail' numberOfLines={3} style={styles.details} >
                    Model: {item?.model}
                    </Micro>
                    
                </View> */}
            </View>
            {RenderDottedLine}
            <View style={styles.cardContent} >
                <View style={styles.detailsContainer}>
                    <Micro 
                    style={[styles.name, { marginTop: Layout.heightPercentageToDP(Layout.mini / Layout.divisionFactorForHeight), marginBottom: Layout.heightPercentageToDP(Layout.medium / Layout.divisionFactorForHeight), color: Colors.gray[500] }]}
                     ellipsizeMode='tail'
                    //   numberOfLines={1}
                      >
                        Length : {item?.length}
                    </Micro>
                </View>
            </View>
        </View >
        </TouchableOpacity>
    )
}