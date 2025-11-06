import { StyleSheet, Text, View, TextInput } from 'react-native';

// You can import supported modules from npm

// or any files within the Snack
import UserInput from './components/UserInput';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>ACTIVITIES</Text>
      <UserInput />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:100,
    backgroundColor: '#1E293B',
  },
  text:{
    fontSize:50,
    fontWeight:'bold',
    textAlign:'center',
    color:'#60A5FA',
  }
});
