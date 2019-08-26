import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default Button = ({ text, functionPayload }) => {
  console.log(text);
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
    backgroundColor: '#006AFF',
    height: 40,
    width: '40%',
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 20,
    alignSelf: 'center'
  },
  buttonText: {
    alignItems: 'center',
    fontSize: 16,
    fontWeight: '800',
    color: '#fff',
  }
})