class CopyrightWebpackPlugin {

  // compiler：webpack的实例
  apply(compiler) {
    // console.log(compiler)
    compiler.hooks.compile.tap("CopyrightWebpackPlugin", (compilation) => {
      console.log("开始")
    })

    // compilation  本次打包的过程
    compiler.hooks.emit.tapAsync(
      'CopyrightWebpackPlugin', 
      (compilation, cb) => {
      console.log(compilation.assets)
      compilation.assets["test.txt"] = {
        source: () => {
          return "hello txt"
        },
        size: () => {
          return 1024
        }
      }
      cb()
    })
  }
}

module.exports = CopyrightWebpackPlugin