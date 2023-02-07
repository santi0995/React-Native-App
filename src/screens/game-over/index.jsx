import { Button, Dimensions, Image, Text, View } from "react-native";
import React, { useEffect, useState } from "react";

import {Card} from '../../components/index'
import {colors} from '../../constants'
import { styles } from "./styles";

const GameOver = ({rounds, selectedNumber, onHandleRestartGame}) =>{
    const [isPortrait, setIsPortrait] = useState(true);

    const onPortrait = () => {
        const dim = Dimensions.get('screen');
        return dim.height >= dim.width;
    }; 

    const statePortrait = () =>{
        setIsPortrait(onPortrait);
    };

    useEffect(() => {
        const suscription = Dimensions.addEventListener('change', statePortrait);

        return () =>{
            suscription.remove();
        }
    })

    return(
        <View style={styles.container}>
            <Card style={isPortrait ? styles.content : styles.contentLandscape}> 
            <Image
            source={{uri:"https://mystickermania.com/cdn/stickers/noob-pack/game-over-glitch-effect-512x512.png"}} 
            style={styles.image}
            />
            <Text style={styles.text}>Rondas: {rounds}</Text>
            <Text style={styles.text}>Número seleccionado: {selectedNumber}</Text>
            <Button 
                title="Reiniciar juego"
                onPress={onHandleRestartGame}
                color={colors.primary}
            />
            </Card>
        </View>
    )
}

export default GameOver;