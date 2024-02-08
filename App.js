import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Box } from './components/box';
import { useState } from 'react';

export default function App() {
  const [boxes, setBoxes] = useState([true, true, ,false]);

  const shuffle = () => {
    let newBoxes = [false, false, false];
    newBoxes[Math.floor(Math.random() * 3)] = true;
    setBoxes(newBoxes);

  }

  return (
    <View style={styles.container}>
      <Button title="shuffle" onPress={shuffle} />
      <Box id={0} isSelected ={boxes[0]} />
      <Box id={1} isSelected ={boxes[1]} />
      <Box id={2} isSelected ={boxes[2]} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
