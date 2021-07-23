import request from 'utils/request';

export async function fetchData() {
  return request('https://api.jsonbin.io/b/60b8605392af611956fb8587', {
    method: 'GET',
  });
}
