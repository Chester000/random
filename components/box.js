/**
 * 
 * 
 * 
 *\brief    a box component for the Monty Hall problem 
 */

 

import { useState } from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

export const Box = ({id, isSelected}) => {

    return (
        <Pressable style={[styles.box, isSelected?styles.selected:styles.plain]}
            onPress={()=> {}} 
            />
    );
}

const styles = StyleSheet.create({
    box: {
        height: 50,
        width: 100,
        borderColor: 'black',
        borderStyle: 'solid',
        borderWidth: 2,
    }, 
    selected: {
        backgroundColor: 'green',
    },
    plain: {
        backgroundColor: 'white',
    },

    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  