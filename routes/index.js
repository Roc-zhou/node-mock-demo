const router = require('koa-router')()
const { mock } = require('../server/mock')
// 实例文档  http://mockjs.com/examples.html#Text


router.get('/', async (ctx, next) => {
  const a = mock({
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    'list|1-10': [{
      // 属性 id 是一个自增数，起始值为 1，每次增 1
      'id|+1': 1
    }]
  })
  ctx.body = a
})

router.get('/getUserList', async (ctx, next) => {
  const a = mock({
    body: {
      code: 200,
      body: {
        'data|10': [
          {
            'name': '@name',
            'age|20-30': 20,
            'sex': '@pick(["男", "女"])',
            'createTime': '@datetime'
          }
        ],
        pageSize: 10,
        'total|1-200': 1
      }
    }
  })
  ctx.body = a
})

module.exports = router
