import { StyleSheet } from "react-native";

import { Colors, Layout } from "../../../globals";

export const styles = StyleSheet.create({
    componentWrapper: {
        marginVertical: Layout.xlarge,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    divider: {
        marginVertical: Layout.mini,
        borderWidth: 1,
        flex: 1,
        borderColor: Colors.gray[50],
    },
    text: {
        color: Colors.foreground,
        textAlign: 'center',
        marginBottom: Layout.zero,
        marginHorizontal: Layout.mini,
    },
});