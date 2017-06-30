import {
  Promise,
} from '../libs/es6-promise'
import Group from '../model/group'

export default {
  /**
   * 发起团信息
   * @returns
   */
  group(obj) {
    return new Promise((resolve) => {
      resolve(Group.store(obj))
    })
  },
  /**
   * 查询一个团信息
   * @param {any} id
   * @returns
   */
  show(id) {
    return new Promise((resolve) => {
      resolve(Group.show(id))
    })
  },
}