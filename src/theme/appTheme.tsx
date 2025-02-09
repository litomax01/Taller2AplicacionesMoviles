import { StyleSheet } from 'react-native';
import {
    BUTTON_COLOR,
    INPUT_COLOR,
    PRIMARY_COLOR,
    SECONDARY_COLOR,
    TERTIARY_COLOR,
} from './commons/constants';

export const styles = StyleSheet.create({
    titleHeader: {
        color: SECONDARY_COLOR,
        fontSize: 27,
        paddingHorizontal: 30,
        paddingVertical: 30,
        fontWeight: 'bold',
    },
    bodyContainer: {
        backgroundColor: SECONDARY_COLOR,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 30,
        paddingTop: 40,
    },
    titlePrincipal: {
        fontSize: 17,
        fontWeight: 'bold',
        color: TERTIARY_COLOR,
    },
    textDescription: {
        fontSize: 15,
        color: TERTIARY_COLOR,
        marginTop: 7,
    },
    inputText: {
        backgroundColor: INPUT_COLOR,
        borderRadius: 10,
        marginVertical: 7,
    },
    formContainer: {
        marginVertical: 10,
    },
    buttonForm: {
        backgroundColor: BUTTON_COLOR,
        paddingVertical: 15,
        borderRadius: 10,
    },
    buttonFormText: {
        color: SECONDARY_COLOR,
        textAlign: 'center',
        fontSize: 14,
        fontWeight: 'bold',
    },
    iconPassword: {
        position: 'absolute',
        right: 15,
        bottom: 17,
    },
    textRedirect: {
        color: PRIMARY_COLOR,
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 20,
        textAlign: 'center',
    },
});