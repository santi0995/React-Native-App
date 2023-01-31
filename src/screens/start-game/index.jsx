import { Alert, Button, Keyboard, Text, TextInput, TouchableWithoutFeedback, View } from "react-native";
import React, {useState} from "react";

import { Card } from "../../components";
import {colors} from '../../constants'
import { styles } from "./styles";

export const StartGame = () =>{

    const [enteredValue, setEnteredValue] = useState("");
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState(null);

    const onHandlerChange = (text) => {
        setEnteredValue(text.replace(/[^0-9]/g, ""));
    }

    const onHandlerReset = () => {
        setEnteredValue('');
        setConfirmed(false);
    }

    const onHandlerConfirm = () => {
        const chosenNumber = parseInt(enteredValue, 10);
        if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99){
            Alert.alert('Número invalido', 'El número tiene que estar entre el 1 y el 99', [{text: 'Entendido', style: 'destructive'}])
        } else{
            setConfirmed(true);
            setSelectedNumber(chosenNumber);
            setEnteredValue('');
        }
    }

    const Confirmed = () => confirmed ? (
        <Card>

        </Card>
    ) : null;

    return(
        <TouchableWithoutFeedback 
        onPress={()=>{
            Keyboard.dismiss();
        }}>
        <View style={styles.container}>
            <Text style={styles.title}>Comenzar juego</Text>
            <Card style={styles.inputContainer}>
                <Text style={styles.label}>Escribe un número</Text>
                <TextInput 
                value={enteredValue}
                keyboardType="numeric" 
                style={styles.input} 
                placeholder='0'
                onChangeText={onHandlerChange}
                maxLength={2}/>
            <View style={styles.buttonContainer}>
                <Button 
                title='Reiniciar'
                onPress={onHandlerReset}
                color={colors.primary}
                />
                <Button 
                title='Confirmar'
                onPress={onHandlerConfirm}
                color={colors.secondary}
                />
            </View>
            </Card>
            <Confirmed />
        </View>
         </TouchableWithoutFeedback>
    )
}

export default StartGame 