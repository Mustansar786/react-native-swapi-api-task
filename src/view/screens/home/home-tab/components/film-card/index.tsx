import React from 'react'
import { Image, TouchableOpacity, View } from "react-native"

import { Colors, Constants, Fonts, Layout } from '../../../../../../globals';
import { Conditional, Micro, SmallParagraph } from '../../../../../components';
import { styles } from './styles'
import { navigate } from '../../../../../navigation'
import { Props } from './types'


export const FilmCard = (props: Props) => {
    const { item } = props
    // const isEnglish = useCheckAppLanguage()

    const handleCardPress = () => {
        navigate('DetailScreen', { item, screen: "films" })
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
        <View style={styles.container}  >
            <View style={{flexDirection: "row"}}>
                <SmallParagraph style={styles.name} >
                     {item?.title}
                    </SmallParagraph>
                </View>
            <View style={styles.cardContent} >
                
                {/* <View style={styles.detailsContainer}>
                    <SmallParagraph style={styles.name} >
                        {item?.name}
                    </SmallParagraph>
                    <Micro ellipsizeMode='tail' numberOfLines={3} style={styles.details} >
                        {item?.opening_crawl.slice(0,80)}...
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
                        Released Date : {item?.release_date}
                    </Micro>
                    {/* <SmallParagraph style={{ ...Fonts.bold, marginTop: Layout.heightPercentageToDP(Layout.small / Layout.divisionFactorForHeight), color: Colors.gray[600] }} >
                    {item?.release_date}
                    </SmallParagraph> */}
                </View>
            </View>
        </View >
        </TouchableOpacity>
    )
}