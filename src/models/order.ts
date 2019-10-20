import { Reducer } from 'redux';
import { routerRedux } from 'dva/router';
import { Effect } from 'dva';
import { stringify } from 'querystring';

import { queryOrderList } from '@/services/order';

export interface StateType {
  status?: 'ok' | 'error';
  type?: string;
  currentAuthority?: 'user' | 'guest' | 'admin';
}

export interface OrderModelType {
  namespace: string;
  state: StateType;
  effects: {
    getOrderList: Effect;
  };
  reducers: {

  };
}

const Model: OrderModelType = {
  namespace: 'order',

  state: {
    status: undefined,
  },

  effects: {
    *getOrderList({ payload }, { call, put }) {
      const response = yield call(fakeAccountLogin, payload);
      // yield put({
      //   type: 'changeLoginStatus',
      //   payload: response,
      // });
      // Login successfully
      if (response.status === 'ok') {
      }
    },
  },

  reducers: {
  },
};

export default Model;
