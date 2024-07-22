import { MockMethod, MockConfig } from 'vite-plugin-mock'
import { Random } from 'mockjs'
export default [
  {
    url: '/api/info',
    method: 'get',
    response: () => {
      return {
        code: 0,
        message: '获取成功',
        type: 'success',
        data: {
          name: '用户名',
          age: 18,
          avatar: 'xxxxxx.jpg'
        },
      }
    },
  },
  {
    url: '/api/login',
    method: 'get',
    response: () => {
      return {
        code: 0,
        message: '登录成功',
        type: 'success',
        data: {
          token: Random.string(10),
        },
      }
    }
  }
] as MockMethod[]