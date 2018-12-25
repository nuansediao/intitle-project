const router = require('koa-router')();
const utils = require('../utils');
const Tips = require('../utils/tip');
const db = require('../db');

router.prefix('/xing')
router.get('/getName', async (ctx, next) => {
    let uid = ctx.query['xing']
    let sql = "select * from `name_chinese_ming` where xing=? order by rand() limit 10 ", value = [uid];
    await db.query(sql, value).then(res => {
        if (res && res.length > 0) {
            ctx.body = { ...Tips[0], data: res };
        } else {
            console.log('error')
            ctx.body = Tips[1008];
        }
    }).catch(e => {
        console.log('error-----')
        ctx.body = Tips[1008];
    })
});

router.get('/', function (ctx, next) {
    ctx.body = '好使好使~'
  })
  


module.exports = router