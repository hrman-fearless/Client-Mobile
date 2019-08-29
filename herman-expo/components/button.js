import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default Button = ({ text, functionPayload }) => {
  return (
    <View style={style.button}>
      <TouchableOpacity onPress={functionPayload}>
        <Text style={style.buttonText}>{text}</Text>
      </TouchableOpacity>
    </View>
  )
}

const style = StyleSheet.create({
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#0029ff',
    height: 40,
    width: '40%',
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 20,
    alignSelf: 'center',
    shadowColor: 'rgba(0, 106, 255, 0.4)',
    shadowOpacity: 1.5,
    elevation: 4,
    shadowRadius: 10 ,
    shadowOffset : { width: 1, height: 13},
    color: '#FFFFFF'
  },
  buttonText: {
    alignItems: 'center',
    fontSize: 16,
    fontWeight: '800',
    color: '#fff',

  },
  
})