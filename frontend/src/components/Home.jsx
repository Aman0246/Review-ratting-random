import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import AddCompangDialog from './AddCompangDialog'
import axios from 'axios'
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import Rating from '@mui/material/Rating';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import AddRatting from './AddRatting';
import toast from 'react-hot-toast';

export default function Home() {
  let localdata=localStorage.getItem('gmail')
  const [compangs, setCompangs] = useState()
  const [openRattingModel, setopenRattingModel] = useState(false)
  const [id, setid] = useState()
  useEffect(() => {
    async function fetchallCompany() {
      let a = await axios.get('/allcompany')
      setCompangs(a?.data?.data)
    }
    fetchallCompany()
  },[compangs])
  const [openDialog, setopenDialog] = useState(false)
  const OpenDialog = () => {
    if(localdata !='amankashyap0246@gmail.com' || localdata==null){
 return toast('only Admin (amankashyap0246@gmail.com  password:1122)')
    }
    setopenDialog(true)
  }
  return (
    <div style={{ position: 'relative' }} >
  {/* <Calander/> */}
      <Navbar />
      <div style={{ justifyContent: 'space-between', display: 'flex', alignItems: 'center', width: '90%' }}>
        <div style={{ marginLeft: '2rem' }}>
          <input type="text" />
          <button>Find Company</button>
        </div>

        <div>
          <button onClick={OpenDialog} style={{borderRadius: '5px',color:'white',padding:'1rem',background:'var(--Gradient, linear-gradient(137deg, #D100F3 9.08%, #002BC5 108.36%))',cursor:'pointer'}} >Add Company</button>
          <AddCompangDialog  openDialog={openDialog} setopenDialog={setopenDialog} />
        </div>
      </div>
      <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginTop: '1.5rem' }}>

        {compangs?.map((item, index) => (
          <div onClick={() => setid(item?._id)} key={index} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem', width: '80%', boxShadow: 'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px', marginBottom: '1rem' }}>
            <div  >
              <div>Founded {item?.founded}</div>
              <div style={{ fontSize: '2rem' }}>{item?.companyName}</div>
              <div style={{ display: 'flex', alignItems: 'center', color: 'gray' }}>
                <LocationOnRoundedIcon sx={{ fontSize: '20px', color: 'gray' }} />
                <div >{item?.companyAddress}</div>
                <Rating
                  name="simple-controlled"
                  value={item?.ratting}
                  readOnly
                />
              </div>
            </div>
            <ArrowForwardIosRoundedIcon onClick={() => setopenRattingModel(true)} sx={{ cursor: 'pointer' }} />
          </div>
        ))}
      {openRattingModel&&
  <div style={{position:'absolute'}}>
  
        <AddRatting id={id} openRattingModel={openRattingModel} setopenRattingModel={setopenRattingModel} />
  </div>}
      </div>

    </div>
  )
}
