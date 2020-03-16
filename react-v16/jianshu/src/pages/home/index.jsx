import React, { Component } from 'react';
import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import axios from 'axios';
import { connect } from 'react-redux'
import {
  HomeWrapper,
  HomeLeft,
  HomeRight } from './style'

class Home extends Component {
  componentDidMount() {
    axios.get('/api/home.json').then((res) => {
      const result = res.data.data
      const action = {
        type: 'change_home_data',
        topicList: result.topicList,
        articleList: result.articleList,
        recommendList: result.recommendList
      }
      this.props.changeHomeData(action)
      console.log(result)
    })
  }

  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className="banner-img" src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2432299774,2912934336&fm=26&gp=0.jpg" alt=""/>
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Writer />
        </HomeRight>
      </HomeWrapper>
    );
  }
}

const mapDispatch = (dispatch) => {
  return {
    changeHomeData(action) {
      dispatch(action)
    }
  }
}

export default connect(null, mapDispatch)(Home);