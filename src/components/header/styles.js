import { StyleSheet } from "react-native";
import {colors} from '../../constants'

export const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.background,
        height: 120,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20
    },
    title:{
        fontSize: 20,
        fontFamily: 'Karma-Bold',
        paddingVertical: 60,
        color: '#000'
    }
})