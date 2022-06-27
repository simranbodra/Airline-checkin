import { LogoutActionTypes } from '../actions/root-store.action';

export function rootStoreReducer(reducer: any) {
  return (state: any, action: any) => {
    return reducer(action.type === LogoutActionTypes.CLEAR_DATA_ON_LOGOUT ?  undefined : state, action);
  };
}
