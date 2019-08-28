import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

export default ButtonLeave = ({ functionPayload }) => {
  return (
    <View style={style.button}>
      <TouchableOpacity onPress={functionPayload}>
        <Feather name="log-out" size={20} color="#fff"/>
      </TouchableOpacity>
    </View>
  )
}

const style = StyleSheet.create({
  button: {
    marginTop: 3.5,
    height: 30,
    width: 30,
    backgroundColor: '#006AFF',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
})