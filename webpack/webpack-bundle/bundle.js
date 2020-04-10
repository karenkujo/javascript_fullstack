const fs = require('fs')
const path = require('path')
const parser = require('@babel/parser')
const traverse = require('@babel/traverse').default // 节点遍历
const babel = require("@babel/core")


// 分析入口文件

const entryAnalysis = (entry) => {
  const content = fs.readFileSync(entry, "utf-8")
  const ast = parser.parse(content, {
    sourceType: "module"
  })

  const yilai = {}
  // console.log(ast.program.body)
  traverse(ast, {
    ImportDeclaration({ node }) {
      // console.log(node)
      const dirname = path.dirname(entry)
      const newFile = "./" + path.join(dirname, node.source.value)
      yilai[node.source.value] = newFile
    }
  })
  // console.log(yilai)
  const { code } = babel.transformFromAst(ast, null, {
    presets: ["@babel/preset-env"]
  })
  console.log(code)
  return {
    entry,
    yilai,
    code
  }
}

const info = entryAnalysis("./src/index.js")
console.log(info)