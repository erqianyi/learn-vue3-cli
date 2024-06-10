import { MockMethod, MockConfig } from 'vite-plugin-mock'
export default [
  {
    url: '/api/get',
    method: 'get',
    response: () => {
      return {
        code: 0,
        data: {
          name: '测试数据',
        },
      }
    },
  },
] as MockMethod[]