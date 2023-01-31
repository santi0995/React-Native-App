import { ActivityIndicator, View } from 'react-native';
import { GameScreen, StartGame } from './screens';

import { Header } from './components';
import { colors } from './constants';
import { styles } from './styles';
import {useFonts} from "expo-font";
import { useState } from 'react';

const App = () => {
  const [loaded] = useFonts({
    'Karma-Regular': require("../assets/fonts/Karma-Regular.ttf"),
    'Karma-Bold': require("../assets/fonts/Karma-Bold.ttf"),
    'Karma-Light': require("../assets/fonts/Karma-Light.ttf"),
    'Karma-Medium': require("../assets/fonts/Karma-Medium.ttf"),
    'Karma-SemiBold': require("../assets/fonts/Karma-SemiBold.ttf")
  })
  const [userNumber, setUserNumber] = useState(null);

  const onHandlerStarGame = (selectedNumber) => {
    setUserNumber(selectedNumber)
  }

  const Content = () => userNumber ? <GameScreen selectedNumber={userNumber}/> 
  :  <StartGame onHandlerStarGame={onHandlerStarGame}/>

  if(!loaded){
    return(
      <View style={styles.containerLoader}>
        <ActivityIndicator size='large' color={colors.background} />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Header title='Adivina el número'/>
      <Content />
    </View>
  );
}


export default App;