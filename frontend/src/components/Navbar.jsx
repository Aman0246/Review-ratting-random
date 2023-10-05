import React, { useState } from 'react'

import MenuItems from './Menu';
export default function Navbar() {
  const[openmenu,setopenmenu]=useState(false)
  return (
    <div style={{display:'flex',justifyContent:'center',padding:'5px',boxShadow:'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px'}}>
        <div style={{width:'90%',display:'flex',justifyContent:'space-between'}}>
            <div>
            <div style={{fontSize:'2rem',display:'flex'}}>Review& <div>Rate</div></div>
            </div>

            <div>
                <div style={{display:'flex',justifyContent:'center',alignItems:'center',gap:5}}>
                    <input type="text" />
                    
                    <MenuItems></MenuItems>
                </div>
            </div>
        </div>
      
    </div>
  )
}
