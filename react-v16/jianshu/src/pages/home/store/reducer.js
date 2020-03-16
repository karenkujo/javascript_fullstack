import { fromJS } from 'immutable'
// immutable.js
// facebook
// immutable对象


const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: []
})

export default (state = defaultState, action) => {
  console.log(action)
  switch (action.type) {
    case "change_home_data":
      return state.merge({ // 把多个对象合并成一个对象
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList)
      })
      break;
    default:
      break;
  }
  return state
}