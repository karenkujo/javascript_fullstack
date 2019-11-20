import vue from 'vue'

import Notification from './Notification.vue'

// 面向对象有一个好处  达到代码复用

const NotificationConstructor = vue.extend(Notification)

let notification
export const open = ({title, content}) => {
  if (notification) {
    notification.title = title
    notification.content = content
  } else {
      notification = new NotificationConstructor({
      el: document.createElement('div'),
      propsData: {
        visiable: true,
        title: title,
        content: content
      }
    })
    document.body.appendChild(notification.$el)
  }
}

export const close = function () {
  notification.visiable = false
  document.body.removeChild(notification.$el)
  notification = null
}