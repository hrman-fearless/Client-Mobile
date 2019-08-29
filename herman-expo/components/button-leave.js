import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

export default ButtonLeave = ({ functionPayload, status }) => {
  if (status) {
    return (
      <View style={style.button}>
        <TouchableOpacity onPress={functionPayload}>
          <Feather name="log-out" size={20} color="#7fb4ff"/>
        </TouchableOpacity>
      </View>
    )
  } else {
    return (
      <View style={style.buttonDisabled}>
        <Feather name="log-out" size={20} color="#999"/>
    </View>
    )
  }
}

const style = StyleSheet.create({
  button: {
    marginTop: 3.5,
    height: 30,
    width: 30,
    paddingHorizontal: 2.5,
    backgroundColor: '#0054cc',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonDisabled: {
    marginTop: 3.5,
    height: 30,
    width: 30,
    backgroundColor: '#efefef',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.2
  },
})