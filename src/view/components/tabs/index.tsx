import React from 'react'
import { TouchableOpacity, View } from 'react-native'

import { Colors, Fonts, } from '../../../globals'
import { SmallParagraph } from '../text';
import { styles } from './styles';
import { ITab, TabsProps } from './types';

export const Tabs = ({ selectedTab, tabs, containerStyles, activeTabBg, activeTabFg, inActiveTabBg, inActiveTabFg }: TabsProps) => {
    return (
        <View style={[styles.tabsContainer, containerStyles]} >
            {
                tabs?.map((tab: ITab) =>
                    <>
                        {!tab?.isFeatureDisabled &&
                            <TouchableOpacity style={[styles.tab, { backgroundColor: selectedTab === tab?.tabName ? activeTabBg ?? Colors.primary['DEFAULT'] : inActiveTabBg ?? Colors.gray[100] }]} onPress={tab?.onPress} >
                                <SmallParagraph style={[styles.textCenter, { ...Fonts.bold }, { color: selectedTab === tab?.tabName ? activeTabFg ?? Colors.background : inActiveTabFg ?? Colors.foreground }]} >
                                    {tab?.label}
                                </SmallParagraph>
                            </TouchableOpacity>}
                    </>
                )
            }
        </View>
    )
}
