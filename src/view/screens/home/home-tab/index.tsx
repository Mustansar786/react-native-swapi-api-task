import React, { useState, useEffect, useLayoutEffect, } from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { I18nManager } from 'react-native';

import { styles } from './styles';
import { TabScreenProps } from '../../types';
import { AppIcon, Conditional, Container, LargeParagraph, Paragraph, SmallParagraph } from '../../../components';
import { Animation, Colors, Constants, Fonts, Images, Layout } from '../../../../globals';
import AnimatedLottieView from 'lottie-react-native';
import { useDispatch, useSelector } from 'react-redux';
import FastImage from 'react-native-fast-image';
import { getFilmsData, getRootAPIData, getStarshipsData } from '../../../../stores/root/RootActions';
import { useNavigation } from '@react-navigation/native';
import { ITab, RootDetailsTabs } from '../../../components/tabs/types';
import { Tabs } from '../../../components/tabs';
import { FilmCard } from './components/film-card';
import { StarshipCard } from './components/starships-card';


export const HomeScreen = (props: TabScreenProps<'HomeScreen'>) => {
    const dispatch = useDispatch()
    const navigation = useNavigation();
    const [selectedTab, setSelectedTab] = useState<RootDetailsTabs>(RootDetailsTabs.FilmsList)

    const isRTL = I18nManager.isRTL;

    const { rootDataLoading, user, rootData, filmsData, starshipsData, starshipsDataLoading, filmsDataLoading } = useSelector(({ Sooq }: any) => Sooq.auth);

    // Define the custom header left component

    console.log(filmsData, "filmsData==============")
    console.log(starshipsData, "starshipsData===========")
    const renderHeaderLeft = () => (
        <>
            <SmallParagraph style={{ paddingLeft: 10, fontSize: 18, fontWeight: "bold" }} >
                Home
            </SmallParagraph>
        </>

    );





    const handleTabChange = (value: RootDetailsTabs) => {
        setSelectedTab(value)
        if (rootData && value === "FilmsList") {
            dispatch(getFilmsData() as any)
        }
        else {
            dispatch(getStarshipsData() as any)
        }
    }

    const profileTabs: ITab[] = [
        {
            label: "Films List",
            tabName: RootDetailsTabs.FilmsList,
            onPress: () => {
                handleTabChange(RootDetailsTabs.FilmsList)
            }
        },
        {
            label: "Starships List",
            tabName: RootDetailsTabs.StarshipsList,
            onPress: () => {
                handleTabChange(RootDetailsTabs.StarshipsList)
            }
        },
    ]

    useLayoutEffect(() => {
        navigation.setOptions({
            title: '',
            headerLeft: renderHeaderLeft,
            // headerRight: renderHeaderRight,
        });
    }, [navigation, user]);


    useEffect(() => {

        dispatch(getRootAPIData() as any)
        if (rootData && selectedTab === "FilmsList") {
            dispatch(getFilmsData() as any)
        }
        else if (rootData && selectedTab === "StarshipsList") {
            dispatch(getStarshipsData() as any)
        }
    }, [])




    return (
        <>
            {filmsDataLoading ||
                starshipsDataLoading ||
                rootDataLoading ?
                <AnimatedLottieView source={Animation.loading} autoPlay loop /> :
                <>
                    <Container hasScroll insetsToHandle={['right']} screenBackgroundStyle={{ backgroundColor: Colors.gray[200], }} containerStyles={{ backgroundColor: Colors.gray[200], paddingHorizontal: 0 }} >
                        <View style={styles.container}>

                            <View style={styles.tabsSection} >
                                <Tabs
                                    tabs={profileTabs}
                                    selectedTab={selectedTab}
                                />
                            </View>


                            {/* films section */}
                            {/* <Conditional ifTrue={filmsData?.length > 0} > */}
                            <Conditional ifTrue={selectedTab == "FilmsList"} elseChildren={
                                <View style={styles.promotionsSectionContainer}>
                                    <View style={styles.primeDealsHeader} >
                                        <LargeParagraph style={{ ...Fonts.bold, marginBottom: 0 }} >
                                            Starships List
                                        </LargeParagraph>
                                    </View>
                                    <FlatList
                                        data={starshipsData}
                                        nestedScrollEnabled
                                        showsVerticalScrollIndicator={false}
                                        style={styles.promotionsContainer}
                                        contentContainerStyle={{
                                            padding: Layout.heightPercentageToDP(Layout.tiny / Layout.divisionFactorForHeight),
                                            paddingTop: Layout.heightPercentageToDP(
                                                Layout.large / Layout.divisionFactorForHeight
                                            ),
                                        }}
                                        renderItem={({ item }) =>
                                            <StarshipCard item={item} />}
                                    />
                                    <View style={styles.divider} />
                                </View>
                            } >

                                <View style={styles.promotionsSectionContainer}>
                                    <View style={styles.primeDealsHeader} >
                                        <LargeParagraph style={{ ...Fonts.bold, marginBottom: 0 }} >
                                            Films List
                                        </LargeParagraph>
                                    </View>
                                    <FlatList
                                        data={filmsData}
                                        nestedScrollEnabled
                                        showsVerticalScrollIndicator={false}
                                        style={styles.promotionsContainer}
                                        contentContainerStyle={{
                                            padding: Layout.heightPercentageToDP(Layout.tiny / Layout.divisionFactorForHeight),
                                            paddingTop: Layout.heightPercentageToDP(
                                                Layout.large / Layout.divisionFactorForHeight
                                            ),
                                        }}
                                        renderItem={({ item }) =>
                                            <FilmCard item={item} />}
                                    />
                                    <View style={styles.divider} />
                                </View>
                            </Conditional>
                            {/* </Conditional> */}


                        </View>
                    </Container>
                </>
            }
        </>
    );
};
