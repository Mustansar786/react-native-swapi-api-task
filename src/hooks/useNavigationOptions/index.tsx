import { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../../globals';

type Props = {
    title: string,
}
const useNavigationOptions = (props: Props) => {
    const { title, } = props

    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            title,
            headerBackTitleVisible: true,
            headerTintColor: Colors.primary['DEFAULT'],
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        });
    }, [navigation, title,]);
};

export default useNavigationOptions;
