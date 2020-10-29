import React from 'react'
import Footer from '../Footer'
import NavBar from '../NavBar'

const Wrapper = ({ children }: any) => {
  return (
    <div className="grid-container">
      <NavBar />
      {children}
      <Footer />
    </div>
  )
}

export default Wrapper
