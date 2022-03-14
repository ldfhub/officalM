import { Reducer, Effect } from 'umi';
import { getHomeList } from '@/servers/home'

export interface homeState {
  list: []
}
export interface useModelType {
  namespace: 'home',
  state: homeState,
  reducers: {
    setHomeList: Reducer<homeState>
  },
  effects: {
    getHomeList: Effect,
    queryHomeOne: Effect
  }
}

export default {
  namespace: 'home',
  state: {
    list: []
  },
  reducers: {
    setHomeList(state: object, action: {type: string,payload: any}) {
      return { ...state, list: action.payload }
    }
  },
  effects: {
    *getHomeList({payload, allback}:any,{put, call}:any):{} {
      const res = yield call(getHomeList, payload)
      yield put({
        type: 'setHomeList',
        payload: res.data.list
      })
    },
    *queryHomeOne({payload, allback}:any,{put, call, select}:any):{} {
      const list = yield select((state: { home: any }) => state.home.list)
      const res = yield call(getHomeList, payload)
      let num = 0;
      switch(payload.type) {
        case 'JOKE':
          num = 0;
          break;
        case 'LOVEWORDS':
          num = 1;
          break;
        case 'HOTWORDS':
          num = 2;
          break;
        case 'WISDOM':
          num = 3;
          break;
      }
      list.splice(num, 1, ...res.data.list);
      yield put({
        type: 'setHomeList',
        payload: list
      })
    }
  }
}
