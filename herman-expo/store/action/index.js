import axios from 'axios';
import { saveToken, getToken } from '../../helpers/async-storage';
import { 
  SIGN_IN,
  LOADING,
  HAS_ERROR,
  FETCH_DASHBOARD
} from './action-type';

export const loadingStart = () => dispatch => {
  dispatch({
    type: 'LOADING',
    payload: true
  })
}

export const signIn = (payload) => async dispatch => {
  try {
    const { data } = await axios({
      method: 'POST',
      url: `https://dcjbmqy550.execute-api.ap-southeast-1.amazonaws.com/dev/user/sign-in`,
      data: {
        email: payload.email,
        password: payload.password,
        deviceID: payload.deviceID
      }
    })
    if (data.hasOwnProperty('token')) {
      saveToken('token', data.token)
      saveToken('id', data.id)
      // dispatch({
      //   type: SIGN_IN,
      //   payload: data.id
      // })
    }
  } catch (error) {
    console.log(error.response.data);
    dispatch({
      type: HAS_ERROR,
      payload: error.response.data
    })
  } finally {
    dispatch({
      type: 'LOADING',
      payload: false
    })
  }
}

export const fetchDashboard = (payload) => async dispatch => {
  dispatch({
    type: 'LOADING',
    payload: true
  })
  try {
    const { data } = await axios.get(`https://dcjbmqy550.execute-api.ap-southeast-1.amazonaws.com/dev/user/${payload}`)
    dispatch({
      type: FETCH_DASHBOARD,
      payload: data
    })
  } catch (error) {
    console.log(error.response.data);
    dispatch({
      type: HAS_ERROR,
      payload: error.response.data
    })
  } finally {
    dispatch({
      type: 'LOADING',
      payload: false
    })
  }
}