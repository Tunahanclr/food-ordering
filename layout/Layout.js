import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import React from 'react'

const Layout = ({children}) => {
  return (
    <>
        <Header/>
        {children}
        <Footer/>
    </>
  )
}

export default Layout