import { StyleSheet } from 'react-native';

import { Colors, Layout } from '../../../globals';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.background,
        height: '95%',
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row',
        padding: Layout.large,
    },
    spinner: {
        paddingVertical: Layout.large,
        marginBottom: Layout.xxxlarge,
    },
});
