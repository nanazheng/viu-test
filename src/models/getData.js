import { fetchData } from 'services/getDataApi.js';

export default {
  namespace: 'test',
  state: {
  },
  effects: {
    *getData(query, { call, put }) {
      const response = yield call(fetchData);
      if (response && !response.error) {
        yield put({
          type: 'testData',
          data: response
        })
      }
    }
  },
  reducers: {
    testData(state, { data }) {
      const title = _.get(data, 'title', '')
      const items = _.get(data, 'items', [])
      return {
        ...state,
        title,
        items,
      }
    }
  }
}