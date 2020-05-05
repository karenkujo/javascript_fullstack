import React, { useState } from 'react';
import { TabBar } from 'antd-mobile'
import { useHistory } from 'react-router-dom'
import './style.css'

const TabBarCom = () => {
  let selected = sessionStorage.getItem('tabbarSelect')
  let [selectedTab, setselectedTab] = useState( selected || 'blueTab')
  const history = useHistory()
    return (
      <div className="tabbar">
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
        >
          <TabBar.Item
            title="看日记"
            key="diary"
            icon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url(/diary.png) center center /  21px 21px no-repeat' }}
            />
            }
            selectedIcon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url(/diarySelect.png) center center /  21px 21px no-repeat' }}
            />
            }
            selected={selectedTab === 'blueTab'}
            onPress={() => {
              setselectedTab('blueTab')
              sessionStorage.setItem('tabbarSelect', 'blueTab')
              history.push('/')
            }}
          >
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(/diaryWrite.png) center center /  21px 21px no-repeat' }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(/diaryWriteSelect.png) center center /  21px 21px no-repeat' }}
              />
            }
            title="写日记"
            key="diaryWrite"
            selected={selectedTab === 'redTab'}
            onPress={() => {
              setselectedTab('redTab')
              sessionStorage.setItem('tabbarSelect', 'redTab')
              history.push('/edit')
            }}
          >
          </TabBar.Item>
        </TabBar>
      </div>
    )
}

export default TabBarCom;