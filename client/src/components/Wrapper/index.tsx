import React from 'react'
import { WrapperProps } from '../../types'
import Footer from '../Footer'
import NavBar from '../NavBar'

const Wrapper = ({ children }: WrapperProps) => {
  return (
    <div className="grid-container">
      <NavBar />
      {children}
      <Footer />
    </div>
  )
}

export default Wrapper
