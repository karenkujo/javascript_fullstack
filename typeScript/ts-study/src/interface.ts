// 接口
const getUsername = (user: User) => {
  user.say = function (words: string) {
    return 'Hello world'
  }
}


interface User {
  name: string
  age?: number,
  readonly isMale: boolean,
  // say: (words: string) => string
  say: Say
}

interface Say {
  (words: string): string
}

interface Config {
  width?: number
  [propName: string]: any
}
function CalculateAreas(config: Config): {area: number} {
  let square = 100
  if (config.width) {
    square = config.width * config.width
  }
  return {area: square}
}

// 类型断言
// let mySquare = CalculateAreas({widdth: 5} as Config)

// 添加字符串索引签名
// let mySquare = CalculateAreas({widdth: 5})

// 将字面量赋值给另外一个变量
// let options = {widdth: 5}
// let mySquare = CalculateAreas({options})

interface SupperUser {
  getGrade: () => void
}

// 继承接口
interface VIPUser extends User, SupperUser {
  broadcast: () => void
}