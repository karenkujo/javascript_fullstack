import React, { useState, useEffect } from 'react';
import { NavBar, Icon, List } from 'antd-mobile'
import { getQueryString } from '../utils'
import { useHistory } from 'react-router-dom'
import axios from '../utils/axios'

const Detail = () => {
  const [detail, setDetail] = useState({})
  const history = useHistory()
  const id = getQueryString('id')

  useEffect(() => {
    axios.get(`/detail/${id}`).then((res) => {
      console.log(res)
      if (res.data.length) {
        setDetail(res.data[0])
      }
    })
  }, [])

  const deleteDiary = (id) => {
    axios.post('/delete', { id }).then(res => {
      console.log(res)
      history.push('/')
    })
  }
  return (
    <div className="diary-detail">
      <NavBar
        mode="light"
        icon={<Icon type="left" />}
        onLeftClick={() => history.goBack()}
        rightContent={[
          <Icon key='0' type="cross-circle-o" onClick={() => deleteDiary(detail.id)}/>,
          <img key='1' onClick={() => history.push(`/edit?id=${detail.id}`)} style={{width: 26}} src="http://s.weituibao.com/1578721957732/Edit.png" />
        ]}
      >
        {detail.title || ''}
      </NavBar>
      <List renderHeader={() => `${detail.date} 晴天`} className="my-list">
        <List.Item wrap>{detail.content}</List.Item>
      </List>
    </div>
  )
}

export default Detail