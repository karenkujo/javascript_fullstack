import React, { useEffect, useState } from 'react';
import './style.css'
import { Card } from 'antd-mobile'
import { Link } from 'react-router-dom'
import axios from '../utils/axios'

// const list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

const Home = () => {
  const [list, setList] = useState([])

  useEffect(() => {
    axios.get('/list').then((res) => {
      setList(res.data)
    })
  }, [])
  console.log(list)
  return (
    <div className="diary-list">
      {
        list.map(item => (
          <Link to={{ pathname: 'detail', search: `?id=${item.id}` }} key={item.id}>
            <Card className="diary-item">
              <Card.Header
                title={item.title}
                thumb={item.url}
                extra={<span>晴</span>}
              />
              <Card.Body>
                <div>{item.content}</div>
              </Card.Body>
              <Card.Footer content={item.date} />
            </Card>
          </Link>
        ))
      }
    </div>
  )
}

export default Home