import React from 'react'
import { useGlobalStore } from 'stores'

export default function Footer() {

  const { state1, setState1 } = useGlobalStore();

  return (
    <div style={{height: '200px', backgroundColor: 'rgba(0, 0, 255, 0.5)'}}>Footer</div>
  )
}
