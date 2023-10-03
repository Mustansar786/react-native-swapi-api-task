import React from 'react'
import { View } from 'react-native'
import { magicSheet } from 'react-native-magic-sheet'
import { useSelector } from 'react-redux'
import { Colors, Layout } from '../../../globals'
import { navigate } from '../../navigation'
import { Button } from '../button'
import { AppIcon } from '../icon'
import { AppIconSize } from '../icon/types'
import { Paragraph } from '../text'
import { styles } from './styles'
import { Props } from './types'
import { Signup } from '../signup'

export const EmptyScreen = (props: Props) => {
    const { authenticated } = useSelector(({ Sooq }: any) => Sooq.auth);

    return (
        <View style={styles.container}>
            <AppIcon
                name={props?.iconName}
                iconSize={AppIconSize.xxxlarge}
                color={Colors.gray[700]}
            />
            <Paragraph style={styles.description}>
                {props?.description}
            </Paragraph>
            <Button
                onPress={async () => {
                    if (props?.customeAction && typeof props?.customeAction === 'function') {
                        props?.customeAction()
                    } else {
                        navigate('HomeScreen')
                    }
                    if (!authenticated) {
                        await magicSheet.show(() => <Signup />, { backgroundStyle: { backgroundColor: Colors.background }, animationConfigs: { duration: 5 }, snapPoints: [Layout.heightPercentageToDP((Layout.xxxlarge * 7.3) / Layout.divisionFactorForHeight)] });
                    }
                }}
                buttonLable={props?.buttonLable}
                buttonContainer={{ backgroundColor: Colors.primary['DEFAULT'] }}
            />
        </View>
    )
}