import { AsyncStorage } from 'react-native';

export const saveToken = async (keys, value) => {
  try {
    await AsyncStorage.setItem(keys, value)
  } catch (error) {
    console.log(error.message);
  }
}

export const getToken = async (value) => {
  try {
    return await AsyncStorage.getItem(value)
  } catch (error) {
    console.log(error.message);
  }
}

export const destroyToken = async () => {
  try {
    await AsyncStorage.removeItem('token')
    console.log(AsyncStorage.getItem('token'));
  } catch (error) {
    console.log(error.message);    
  }
}