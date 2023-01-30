import { Text, View } from 'react-native';

import { StatusBar } from 'expo-status-bar';
import { styles } from './styles';

const App = () => {
  return (
    <View style={styles.container}>
      <Text>Hola</Text>
      <StatusBar style="auto" />
    </View>
  );
}


export default App;