// 需求，  1，修改状态时显示。2， 登陆功能 ，3、 验证功能

test('登陆功能', () => {
  // given ,数据, 显示状态数据 boolean, 登陆的账号密码
  const loginInfo = {
    phone: '18976203568',
    password: '1234'
  }
  // when ， 当 islogin 为 true , 组件显示。 验证，phone，password正确性，  为空的时候不去提交

  // then
  expect(formInfo).toEqual(loginInfo)
})
