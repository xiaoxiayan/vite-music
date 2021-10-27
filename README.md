# music

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 关于 vue-test-unit 2
  ### mount
  ```
  深度挂在渲染 dom。mount挂载渲染出来的内容可以直接使用find 查找dom,触发dom的操作。单元测试。
  挂载的 wrapper 可以直接使用 wrapper.vm 操作 fun ，data


  ```
  ###  shallowMount
  ```
   浅渲染dom，保留子组件。可以使用findComponent 查找子组件。可用于联动的集成测试。
   挂载的 wrapper 可以直接使用 wrapper.vm 操作 fun ，读取 data

  ```
  ### mount - find
  ```
  返回domWrapper,可以操作 dom节点。click。

  ```
  ### mount - findComponent
  ```
  返回 vueWrapper,但是只能使用  findComponet(FOO) || findComponet( { name: Foo } ) 格式寻找.
  返回的 vueWrapper 无法去 find 上面的dom.
  mount&&shallowMount-findComponet( { name: Foo } ) 格式 无法读取porps。
  mount&&shallowMount-findComponet(FOO) 格式 可以读取porps。无法读取 data 。
  ```
  ### vm
  ```
  适用于 mount 挂载的组件去操作 data
  ```

