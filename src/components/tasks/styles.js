import { StyleSheet } from 'react-native';
import { colors } from '../../themes'

export default StyleSheet.create({
    item: {
        backgroundColor: colors.white,
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: colors.blue,
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,
    },
    completedSquare: {
        width: 24,
        height: 24,
        backgroundColor: colors.green,
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,
    },
    itemText: {
        // maxWidth: '80%',
        fontWeight:'bold'
    },
    circular: {
        width: 18,
        height: 18,
        resizeMode: 'contain'
    },
});