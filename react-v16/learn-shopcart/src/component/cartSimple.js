import React, { Component } from 'react'

function Cart (props) {
  return (
    <table>
      <tbody>
        {props.data.map(d => (
          // 循环tr
          <tr key={d.text}>
            <td>{d.text}</td>
            <td>
              <button>-</button>
              {d.count}
              <button onClick={() => props.addCount(d)}>+</button>
            </td>
            <td>￥{d.price * d.count}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default class CartSimple extends Component {
  constructor (props) {
    super(props)
    this.state = {
      text: '', //选择的商品名
      goods: [
        { id: 1, text: '你不知道的jsvaScript', price: 66},
        { id: 2, text: '你不知道的vue', price: 59},
        { id: 3, text: '你不知道的react', price: 57}
      ],
      cart: [],
      history: []
    }
  }
  textChange = e => {
    console.log(e.target.value)
    this.setState({
      text: e.target.value
    })
  }
  addGoods = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods, {id: prevState.id, text:prevState.text, price: prevState.price}]
    }))
  }

  addCount = (item) => {
    const newCart = [...this.state.cart]
    const idx = newCart.findIndex(c => c.text === item.text)
    newCart.splice(idx, 1, {...item, count: item.count + 1})
    this.setState({
      cart: newCart,
      history: [...this.state.history, newCart]
    })
  }

  addToCart = (good) => {
    // 为了保证视图更新，数组要保证引用地址变化，因此每次深复制一个新的数组
    const newCart = [...this.state.cart]
    // 查询商品的购物项是否存在
    const idx = newCart.findIndex(c => c.text === good.text)
    // 如果存在则取出
    const item = newCart[idx]

    if (item) {
      // 更新对象
      newCart.splice(idx, 1, {...item, count: item.count + 1})
    } else {
      newCart.push({...good, count: 1})
    }
    this.setState({
      cart: newCart,
      history: [...this.state.history, newCart]
    })
  }

  go = (his) => {
    this.setState({
      cart: his
    })
  }

  render () {
  const title = this.props.title ? <h1>{this.props.title}</h1> : null
  // 循环：将js对象数组转化为jsx数组
  const goods = this.state.goods.map(good => (
    <li key={good.id}>{good.text}<button onClick={() => this.addToCart(good)}>加购</button></li>
  ))
    return (
      <div>
        {title}
        <div>
          <input type="text" value={this.state.text} onChange={this.textChange} />
          <button onClick={this.addGoods}>添加商品</button>
        </div>
        {/* 商品列表渲染 */}
        <ul>{goods}</ul>
        {/* 购物车列表 */}
        {/* 传递函数用于子组件和父组件交互 */}
        <Cart data={this.state.cart} addCount={this.addCount} />

        {this.state.history.length > 0 ? <p>历史操作</p> : null}
        {this.state.history.length > 0 ? <button key="-1">0</button> : null}
        {this.state.history.map((his, i) => (
          <button onClick={() => this.go(his)} key={i}>
            {i + 1}
          </button>
        ))}
      </div>
    )
  }
}