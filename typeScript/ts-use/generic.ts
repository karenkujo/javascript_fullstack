// 泛型
// 声明泛型变量<T> 他用于捕获开发者传入的参数类型,我们就可以使用<T>总评参数类型的返回值类型
// const arr: Array<number | string> = [1, 2, 3, '4']
// function returnItem<T>(para: T): T {
//   return para
// }

function swap<T, U>(tuple: [T, U]) {
  return [tuple[0], tuple[1]]
}
swap([7, 'seven'])

// 泛型变量
function getArrayLength<T>(arg: Array<T>): Array<T> {
  console.log(arg.length)
  return arg
}

// 泛型接口
interface ReturnItem<T> {
  (para: T): T
}

const returnItem: ReturnItem<number> = para => para

// 泛型类
// class Stack<T> {
//   private arr: T[] = []
//   public push (item: T) {
//     this.arr.push(item)
//   }

//   public pop() {
//     this.arr.pop()
//   }
// }
// const app = new Stack()
// app.push('123')

// 泛型约束
type Params = number | string
class Stack<T extends Params> {
  private arr: T[] = []
  public push (item: T) {
    this.arr.push(item)
  }

  public pop() {
    this.arr.pop()
  }
}
const app = new Stack<number>()
// const app1 = new Stack<boolean>() 报错

// 泛型约束与索引类型
function getValue<T extends object, U extends keyof T>(obj: T, key: U) {
  return obj[key]
}
const a = {
  name: 'wn',
  id: 1
}
getValue(a, 'id')

// 使用多重类型进行泛型约束
interface FirstInterface {
  doSomthing(): number
}
interface SecondInterface {
  doSomthingElse(): string
}

interface childInterface extends FirstInterface, SecondInterface {

}

class Demo<T extends childInterface> {
  declare private genericProperty: T 
  useT () {
    this.genericProperty.doSomthing()
    this.genericProperty.doSomthingElse()
  }
}

// 泛型与new
// {new(): T} 泛型可被构造
function factory<T>(type: {new(): T}): T {
  return new type()
}