import React from 'react'
import Header from '../../layout/Header'
import Footer from '../../layout/Footer'

export default function Sub() {
  return (
    <div>
      <Header />
      <div style={{ height: '600px', backgroundColor: 'rgba(0, 255, 0, 0.5)' }}>Sub</div>
      <Footer />
    </div>
  )
}