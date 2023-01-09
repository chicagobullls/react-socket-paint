import './ToolBar.scss'

import React from 'react'

type Props = {}

const ToolBar = (props: Props) => {
  return (
    <div className="toolbar">
      <div className="toolbar__container toolbar__container_left">
        <button className="toolbar__button toolbar__button_draw"></button>
        <button className="toolbar__button toolbar__button_polygon"></button>
        <button className="toolbar__button toolbar__button_circle"></button>
        <button className="toolbar__button toolbar__button_eraser"></button>
        <button className="toolbar__button toolbar__button_colorpicker"></button>
      </div>

      <div className="toolbar__container toolbar__container_right">
        <button className="toolbar__button toolbar__button_undo"></button>
        <button className="toolbar__button toolbar__button_redo"></button>
        <button className="toolbar__button toolbar__button_save"></button>
      </div>
    </div>
  )
}

export default ToolBar
