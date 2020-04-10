const loaderUtils = require("loader-utils")
module.exports = function (source) {

  const options = loaderUtils.getOptions(this)

  const callback = this.async()
  
  setTimeout(() => {
    const result = source.replace('webpack', options.name)
    callback(null, result)
  }, 100);
}

// this.callback(
//   err: Error | null,
//   content: string | Buffer,
//   sourceMap?: SourceMap,
//   meta?: any
// );