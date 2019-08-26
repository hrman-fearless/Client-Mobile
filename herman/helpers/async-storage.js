import AsyncStorage from '@react-native-community/async-storage';

export const saveToken = async (token) => {
  try {
    await AsyncStorage.setItem('token', token)
  } catch (error) {
    console.log(error.message);
  }
}

export const getToken = async () => {
  try {
    return await AsyncStorage.getItem('token')
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