import { StyleSheet } from 'react-native';
import { colors } from '../../themes'

export default StyleSheet.create({
    safeAreaContainer: {
        height: '100%',
        width: '100%',
        backgroundColor: colors.backColor,
    },
    container: {
        flex: 1,
    },
    headerBar: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    tasksWrapper: {
        paddingTop: 20,
        paddingHorizontal: 20,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    items: {
        marginTop: 30,
    },
    listView: {
        marginTop: 30,
        paddingHorizontal: 20
    },
    footerView: {
        height: 5
    },
    writeTaskWrapper: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 15,
    },
    input: {
        height: 60,
        paddingLeft: 15,
        backgroundColor: colors.white,
        borderRadius: 24,
        borderColor: colors.borderColor,
        borderWidth: 1,
        width: "70%",
        fontWeight:'bold'
    },
    addWrapper: {
        width: "20%",
        width: 60,
        height: 60,
        marginLeft: 10,
        backgroundColor: colors.white,
        borderRadius: 60,
        justifyContent: 'center',
        alignContent: 'center',
        borderColor: colors.borderColor,
        borderWidth: 1,
    },
    addText: {
        fontSize: 30,
        alignSelf: 'center',
        textAlign: 'center'
    },
});