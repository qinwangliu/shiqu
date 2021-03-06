// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

const db = cloud.database()

// 云函数入口函数
exports.main = async (event, context) => {
  console.log(event);

  db.collection('account').add({
    // data 字段表示需新增的 JSON 数据
    data: {
      accountName: event.accountName,
      accountMoney: event.accountMoney
    }
  })
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.error(err);
    })


}