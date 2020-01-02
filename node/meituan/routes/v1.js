// 向外输出一个路由对象
import express from 'express'
import Cities from '../controller/v1/cities'
const router = express.Router()
//mvc controller
router.get('/suggestion', Cities.suggestion)

export default router