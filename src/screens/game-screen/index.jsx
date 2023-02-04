import {Alert, Button, Text, View} from 'react-native'
import { Card, NumberContainer } from '../../components';
import React, {useEffect, useRef, useState} from "react";

import { colors } from '../../constants';
import { styles } from './styles';

const generateRandomNumber = (min, max, exclude) =>{
    min = Math.ceil(min);
    max = Math.floor(max)
    const randomNumber = Math.floor(Math.random() * (max - min) + min);
    if(randomNumber === exclude){
        return generateRandomNumber(min, max, exclude)
    } else {
        return randomNumber;
    }
}

const GameScreen = ({selectedNumber, onHandlerGameOver}) =>{

    const [currentGuess, setCurrentGuess] = useState(generateRandomNumber(1, 100, selectedNumber));
    const [rounds, setRounds] = useState(0);
    
    const currentLow = useRef(1);
    const currentHigh = useRef(100);

    useEffect(() => {
        if(currentGuess === selectedNumber) onHandlerGameOver(rounds);
    }, [currentGuess, selectedNumber, onHandlerGameOver])

    const onHandleNextGuess = (direction) => {
        if(
            direction === 'lower' && currentGuess < selectedNumber || 
            direction === 'greater' && currentGuess > selectedNumber
        ){
            Alert.alert('No mientas!', "Sabes que es incorrecto", [
                {text: "Perdón!", style: "cancel"},
        ]);
        return;
        }

        if(direction === 'lower'){
            currentHigh.current = currentGuess;
        } else {
            currentLow.current = currentGuess;
        }

        const nextNumber = generateRandomNumber(currentLow.current, currentHigh.current, currentGuess);
        setCurrentGuess(nextNumber);
        setRounds((rounds) => rounds + 1);
    } 


    return(
        <View style={styles.container}>
            <Card style={styles.content}>
                <Text style={styles.title}>Número del oponente</Text>
                <NumberContainer number={currentGuess} />
                <View style={styles.buttonContainer}>
                    <Button title='Menor' onPress={() => onHandleNextGuess('lower')} color={colors.background} 
                    />
                    <Button title='Mayor' onPress={() => onHandleNextGuess('greater')} color={colors.background} 
                    />
                </View>
            </Card>
        </View>
    )
}

export default GameScreen;