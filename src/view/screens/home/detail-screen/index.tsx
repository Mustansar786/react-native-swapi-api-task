import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Image, TextInput, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';
import { TabScreenProps } from '../../types';
import { AppIcon, Conditional, Container, Micro, SmallParagraph, } from '../../../components';
import { Animation, Colors, Constants, Fonts, Layout } from '../../../../globals';
import { useDispatch, useSelector } from 'react-redux';
import useNavigationOptions from '../../../../hooks/useNavigationOptions';

export const DetailScreen = (props: TabScreenProps<'DetailScreen'>) => {
    const dispatch = useDispatch()

    const { item, screen } : any= props.route.params;

    useNavigationOptions({
        title: screen === "films" ? "Films Detail" : "Starships Detail" ,
    });

   

    const filmsOptions = [
        {
            optionName: "Release Year",
            value: item?.release_date,
            disabled: true,
            handleAction: () => { }
        },
        {
            optionName: "Producer",
            value: item.producer,
            disabled: true,
            handleAction: () => { }
        },
        {
            optionName: "Director",
            value: item.director,
            disabled: true,
            handleAction: () => { }
        },
    ]

    const starshipsOptions = [
        {
            optionName: "Manufacturer",
            value: item?.manufacturer,
            disabled: true,
            handleAction: () => { }
        },
        {
            optionName: "Crew",
            value: item?.crew,
            disabled: true,
            handleAction: () => { }
        },
        {
            optionName: "Passengers",
            value: item?.passengers,
            disabled: true,
            handleAction: () => { }
        },
    ]

    

    return (
        <>
                <Container insetsToHandle={['right']} hasScroll screenBackgroundStyle={{ backgroundColor: Colors.gray[200], }}>
                    <View style={styles.container}>
                        <View style={styles.screenContent} >
                            {/* info section */}
                            <View style={styles.infoSection} >
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    
                                    <SmallParagraph style={{ color: Colors.primary['DEFAULT'], marginBottom: Layout.tiny, ...Fonts.bold }} >
                                    {screen === "films" ? item?.title: item?.name}
                                    </SmallParagraph>
                                </View>
                            </View>

                            {/* settings section */}
                            <Conditional ifTrue={screen === "films"} elseChildren={
                               <View style={styles.section} >
                               <FlatList
                                   data={starshipsOptions}
                                   scrollEnabled={false}
                                   renderItem={({ item }) => {
                                       return (
                                           <TouchableOpacity disabled={item?.disabled} onPress={item?.handleAction} style={styles.sectionItem}>
                                               <SmallParagraph style={item?.disabled ? { color: Colors.gray[500], } : { color: Colors.foreground }} >
                                                   {item?.optionName}
                                               </SmallParagraph>
                                               <SmallParagraph style={item?.disabled ? { color: Colors.gray[500], } : { color: Colors.foreground }} >
                                                   {item?.value}
                                               </SmallParagraph>
                                           </TouchableOpacity>
                                       )
                                   }}
                               />
                           </View> 
                            }>
                            <View style={styles.section} >
                                <FlatList
                                    data={filmsOptions}
                                    scrollEnabled={false}
                                    renderItem={({ item }) => {
                                        return (
                                            <TouchableOpacity disabled={item?.disabled} onPress={item?.handleAction} style={styles.sectionItem}>
                                                <SmallParagraph style={item?.disabled ? { color: Colors.gray[500], } : { color: Colors.foreground }} >
                                                    {item?.optionName}
                                                </SmallParagraph>
                                                <SmallParagraph style={item?.disabled ? { color: Colors.gray[500], } : { color: Colors.foreground }} >
                                                    {item?.value}
                                                </SmallParagraph>
                                            </TouchableOpacity>
                                        )
                                    }}
                                />
                            </View>
                            </Conditional>
                           

                            {/* topup section */}
                           
                        </View>
                    </View>
                </Container>
        </>
    );
};
