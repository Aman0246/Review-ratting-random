import React from 'react'
import '../App.css'
export default function Loader() {
  return (
    <div style={{position:'absolute',display:'flex',justifyContent:'center',alignItems:'center',height:'100vh',width:'100vw'}}>

      <div class="banter-loader">
        <div class="banter-loader__box"></div>
        <div class="banter-loader__box"></div>
        <div class="banter-loader__box"></div>
        <div class="banter-loader__box"></div>
        <div class="banter-loader__box"></div>
        <div class="banter-loader__box"></div>
        <div class="banter-loader__box"></div>
        <div class="banter-loader__box"></div>
        <div class="banter-loader__box"></div>
      </div>
    </div>
  )
}
