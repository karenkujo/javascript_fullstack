import React from 'react';
import { Input, Button, List } from 'antd'

const TodoListUI = (props) => {
  console.log(props.list)
  return (
    <div style={{ padding: 10 }}>
      <div>
        <Input
          value={props.inputValue}
          placeholder="todo info"
          style={{ width: 300, marginRight: 10 }}
          onChange={props.handleInputChange}
        />
        <Button onClick={props.handleBtnClick} type="primary">提交</Button>
      </div>
      <List
        style={{ marginTop: 10, width: 300 }}
        bordered
        dataSource={props.list}
        renderItem={(item, index) => (
          <List.Item onClick={(index) => props.handleItemDelete(index)}>
            {item}
          </List.Item>
        )}
      />
    </div>
  )
}
// class TodoListUI extends Component {
//   render() {
//     return (
//       <div style={{ padding: 10 }}>
//         <div>
//           <Input 
//             value={this.props.inputValue} 
//             placeholder="todo info" 
//             style={{ width: 300, marginRight: 10 }} 
//             onChange={this.props.handleInputChange}
//             />
//           <Button onClick={this.props.handleBtnClick} type="primary">提交</Button>
//         </div>
//         <List
//           style={{marginTop: 10, width: 300}}
//           bordered
//           dataSource={this.props.list}
//           renderItem={(item, index) => (
//             <List.Item onClick={(index) => this.props.handleItemDelete.bind(index)}>
//               {item}
//             </List.Item>
//           )}
//         />
//       </div>
//     )
//   }
// }

export default TodoListUI;