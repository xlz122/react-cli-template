import { cloneDeep } from 'lodash';

export type ReduxState = {
  msg: string;
};

type ReduxAction = {
  type: string;
  [key: string]: unknown;
};

const defaultState: ReduxState = {
  msg: ''
};

const reducer = (state: ReduxState = defaultState, action: ReduxAction) => {
  if (action.type === 'Msg') {
    const cloneState = cloneDeep(state);
    cloneState.msg = action.msg;
    localStorage.setItem('msg', JSON.stringify(action.msg));
    return cloneState;
  }

  return state;
};

export default reducer;
