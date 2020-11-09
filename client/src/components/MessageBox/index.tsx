import React from 'react'
import { MessageProps } from '../../types'

const MessageBox = ({ children, variant }: MessageProps) => {
  return <div className={`alert alert-${variant}`}>{children}</div>
}

export default MessageBox
