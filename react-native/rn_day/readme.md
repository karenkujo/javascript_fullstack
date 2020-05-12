# 第一个APP应用
  搭建环境看rn官网

# RN页面布局
需要注意的是单位不再是px，而是dp(不用写)
rn当中大部分布局默认采用flex布局，需要注意rn中的flex和webcss中flex的差别

# 属性与状态
RN中使用两种数据来控制一个组件：props和state，props是在父组件中指定，而且一经指定，在被指定的组件的生命周期中则不再改变，对于须要改变的数据，我们需要使用state

# RN核心组件与API
在RN中使用原生组件，是依赖React的，所以使用过程中需要导入react
import React, { Component } from 'react';
- 常用的组件介绍
  View：类似于html中的div
  Button