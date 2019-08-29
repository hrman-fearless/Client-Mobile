import axios from 'axios';
import { saveToken, getToken, destroyToken } from '../../helpers/async-storage';
import { 
  SIGN_IN,
  LOADING,
  HAS_ERROR,
  FETCH_DASHBOARD,
  FETCH_USERS,
  SIGN_OUT,
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

export const letsGoHome = (id) => async dispatch => {
  await axios({
    method: 'PATCH',
    url: `https://dcjbmqy550.execute-api.ap-southeast-1.amazonaws.com/dev/user/${id}`,
  })
}

export const fetchUsers = () => async dispatch => {
  dispatch({
    type: 'LOADING',
    payload: true
  })
  try {
    const { data } = await axios.get(`https://9o80p7pi7d.execute-api.us-east-1.amazonaws.com/dev/user`)
    dispatch({
      type: FETCH_USERS,
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

export const signOut = () => async dispatch => {
  console.log('Signing Out');
  dispatch({
    type: 'LOADING',
    payload: true
  })
  dispatch({
    type: SIGN_OUT,
    payload: {}
  })
  dispatch({
    type: 'LOADING',
    payload: false
  })
}