import React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';

import AllRooms from './AllRooms.js';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      previousRooms: [AllRooms.empty, AllRooms.special],
      currentRoom: AllRooms.monster[0]
    }
  }

  render() {

    return (
      <View style={styles.container}>
        <Text>{this.state.currentRoom}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
