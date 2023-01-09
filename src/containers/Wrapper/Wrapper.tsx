import './Wrapper.scss'

import React from 'react'

import Canvas from '../../components/Canvas/Canvas'
import SettingBar from '../../components/SettingBar/SettingBar'
import ToolBar from '../../components/ToolBar/ToolBar'

type Props = {}

const Wrapper = (props: Props) => {
  return (
    <div className="drawer">
      <ToolBar />
      <SettingBar />
      <Canvas />
    </div>
  )
}

export default Wrapper
