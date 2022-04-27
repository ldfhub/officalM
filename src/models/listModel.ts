import { Reducer, Effect } from 'umi';
import { getList } from '@/servers/list';

export interface listState {
  list: [];
}
export interface useModelType {
  namespace: 'list';
  state: listState;
  reducers: {
    setHomeList: Reducer<listState>;
  };
  effects: {
    getList: Effect;
  };
}

export default {
  namespace: 'list',
  state: {
    list: [],
  },
  reducers: {
    setList(state: object, action: { type: string; payload: any }) {
      return { ...state, list: action.payload };
    },
  },
  effects: {
    *getList({ payload, allback }: any, { put, call }: any): {} {
      const res = yield call(getList, payload);
      yield put({
        type: 'setList',
        payload: res.data.list,
      });
    },
  },
};
