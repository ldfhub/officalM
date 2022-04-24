import { Reducer, Effect } from 'umi';
import { getLoginInfo } from '@/servers/login';

export interface loginState {}
export interface useModelType {
  namespace: 'register';
  state: loginState;
  reducers: {
    setHomeList: Reducer<loginState>;
  };
  effects: {
    getLoginInfo: Effect;
  };
}

export default {
  namespace: 'login',
  state: {
    // list: []
  },
  reducers: {
    // setHomeList(state: object, action: {type: string,payload: any}) {
    //   return { ...state, list: action.payload }
    // }
  },
  effects: {
    *getLoginInfo({ payload, allback }: any, { put, call }: any): {} {
      const res = yield call(getLoginInfo, payload);
      return res;
    },
  },
};
