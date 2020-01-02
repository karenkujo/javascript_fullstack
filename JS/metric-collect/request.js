import axios from 'axios'
import request from 'request'

const axiosIns = axios.createInstance({
  baseUrl: 'http://localhost:3000',
  response: (res) => {
    // ajax
    if (res.code === 200) {

    } else {
      alert('出错了')
    }
  }
})

export default axiosIns

request('/suggest')
.withCredentials(res => {
  if (res.code === 200) {

  }
})