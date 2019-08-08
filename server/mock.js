const Mock = require('mockjs');
// https://github.com/nuysoft/Mock

const mock = e => {
  return JSON.stringify(Mock.mock(e))
}
module.exports = {
  mock
}