import { Dimensions, StatusBar, StyleSheet } from "react-native";

import {colors} from '../../constants'

const {height} = Dimensions.get('screen')

export const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.background,
        height: height * 0.15,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20,
        marginTop: StatusBar.currentHeight,
    },
    title:{
        fontSize: 20,
        fontFamily: 'Karma-Bold',
        paddingVertical: 60,
        color: '#000'
    }
})