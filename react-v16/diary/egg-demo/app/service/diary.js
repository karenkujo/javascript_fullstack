'use strict';

const Service = require('egg').Service;

class DiaryService extends Service {
  async list() {
    const { ctx } = this
    try {
      const result = await ctx.app.mysql.select('diary')
      return result;
    } catch (error) {
      console.log(error)
      return null
    }
  }
  async add(params) {
    const { ctx } = this
    try {
      const result = await ctx.app.mysql.insert('diary', params)
      return result;
    } catch (error) {
      console.log(error)
      return null
    }
  }
  async update(params) {
    const { ctx } = this
    try {
      const result = await ctx.app.mysql.update('diary', params)
      return result;
    } catch (error) {
      console.log(error)
      return null
    }
  }
  async diaryById(id) { // 获取日记详情的接口
    const { ctx } = this
    if (!id) {
      console.log('id不能为空')
      return null
    }
    try {
      const result = await ctx.app.mysql.select('diary', {
        where: { id }
      })
      return result;
    } catch (error) {
      console.log(error)
      return null
    }
  }
  async delete(id) {
    const { ctx } = this
    try {
      const result = await ctx.app.mysql.delete('diary', { id })
      return result;
    } catch (error) {
      console.log(error)
      return null
    }
  }
}

module.exports = DiaryService
