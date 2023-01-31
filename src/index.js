import { GameScreen, StartGame } from './screens';

import { Header } from './components';
import { View } from 'react-native';
import { styles } from './styles';
import { useState } from 'react';

const App = () => {

  const [userNumber, setUserNumber] = useState(null);

  const onHandlerStarGame = (selectedNumber) => {
    setUserNumber(selectedNumber)
  }

  const Content = () => userNumber ? <GameScreen selectedNumber={userNumber}/> 
  :  <StartGame onHandlerStarGame={onHandlerStarGame}/>

  return (
    <View style={styles.container}>
      <Header title='Adivina el número'/>
      <Content />
    </View>
  );
}


export default App;