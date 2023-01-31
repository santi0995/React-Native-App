import { Button, Text, TextInput, View } from "react-native";

import { Card } from "../../components";
import React from "react";
import {colors} from '../../constants'
import { styles } from "./styles";

export const StartGame = () =>{
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Comenzar juego</Text>
            <Card style={styles.inputContainer}>
                <Text style={styles.label}>Escribe un número</Text>
                <TextInput style={styles.input} placeholder='0'/>
            <View style={styles.buttonContainer}>
                <Button 
                title='Reiniciar'
                onPress={()=>null}
                color={colors.primary}
                />
                <Button 
                title='Confirmar'
                onPress={()=>null}
                color={colors.secondary}
                />
            </View>
            </Card>
        </View>
    )
}

export default StartGame 