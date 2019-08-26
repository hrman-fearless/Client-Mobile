import axios from 'axios';
import { saveToken, getToken } from '../../helpers/async-storage';
import { 
  SIGN_IN,
  LOADING,
  HAS_ERROR
} from './action-type';

export const signIn = (payload) => async dispatch => {
  dispatch({
    type: 'LOADING',
    payload: true
  })
  try {
    const { data } = await axios({
      method: 'POST',
      url: `https://blxdboxd1c.execute-api.ap-southeast-1.amazonaws.com/dev/user/sign-in`,
      data: {
        email: payload.email,
        password: payload.password
      }
    })
    if (data.hasOwnProperty('token')) {
      // console.log(data, '@store');
      saveToken(data.token)
      console.log(object);
    }
    // dispatch({
    //   type: 'SIGN_IN',
    //   payload: token
    // })
  } catch (error) {
    console.log(error.response.data);
  } finally {
    dispatch({
      type: 'LOADING',
      payload: false
    })
  }
}