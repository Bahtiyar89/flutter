import React from 'react';
import {StyleSheet, View} from 'react-native';
import Home from './screens/Home';
import NewEmployee from './screens/CreateEmployee';
function App() {
  return (
    <View style={styles.container}>
      <NewEmployee />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ededed',
    //marginTop: StatusBar.currentHeight,
    //alignItems: 'center',
    //justifyContent: 'center',
  },
});
export default App;
