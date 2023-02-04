import { StyleSheet } from "react-native";
import {colors} from '../../constants'

export const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center'
    },
    title:{
        fontSize: 18,
        fontFamily: 'Karma-Medium',
        color: colors.text,
        textAlign: 'center',
        paddingVertical:20,
    },
    inputContainer:{
        width: '75%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical:20
    },
    label:{
        fontSize: 15,
        fontFamily: 'Karma-Regular',
        color:colors.text,
        paddingVertical: 5,
        textAlign: 'center',
    },
    input:{
        width: '100%',
        maxWidth: 40,
        borderBottomColor: colors.text,
        borderBottomWidth: 1,
        minWidth: 50,
        fontSize: 22,
        paddingVertical: 10,
        textAlign: 'center',
    },
    buttonContainer:{
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around',
        marginTop: 20,
    },
    confirmedContainer:{
        width: '75%',
        height: 180,
        justifyContent: 'space-around',
        alignItems: 'center',
        marginVertical: 30
    },
    confirmedTitle:{
        fontSize: 16,
        fontFamily: 'Karma-Regular',
    }
});

