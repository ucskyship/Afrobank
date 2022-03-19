import {
  LOGIN,
  PINRESET,
  REGISTER,
  TOGGLEBALANCE,
  TRANSACTIONHISTORY,
  UPDATEUSER,
} from '../actions'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import intState from './initState'

const persistConfig = {
  key: 'root',
  storage: storage,
}

const reducer = (state = intState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isSignedIn: action.isSignedIn,
        payLoad: action.payload,
      }
    case REGISTER:
      return {
        ...state,
        isRegistered: action.isRegistered,
        payLoad: action.payload,
      }
    case PINRESET:
      return {
        userPinReset: {
          ...state,
          isPinReset: action.isPinReset,
          payLoad: action.payload,
        },
      }
    case TRANSACTIONHISTORY:
      return {
        ...state,
        transactions: action.payload,
      }
    case TOGGLEBALANCE:
      return {
        ...state,
        balanceDisplay: action.payload,
      }
    case UPDATEUSER:
      return {
        ...state,
        payLoad: { ...state.payLoad, ...action.payload },
      }
    default:
      return state
  }
}
const persistedReducer = persistReducer(persistConfig, reducer)
export default persistedReducer
