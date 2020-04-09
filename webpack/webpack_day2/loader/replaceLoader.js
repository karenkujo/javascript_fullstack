// 拿到入口文件的源码，替换里面的字符串
module.exports = function (source) {
  // source就是源文件的内容
  // console.log(source,this.query)
  const options = this.query
  return source.replace('webpack', options.name)
}