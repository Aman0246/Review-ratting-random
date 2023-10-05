import React, { useState } from 'react'
import '../App.css'
import loginPng from '../login.png'
import { Link, useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';
import axios from 'axios'
import Loader from './Loader'
export default function Login() {

  let[loading,setloading]=useState(false)
  const navigate = useNavigate()
  let [data, setdata] = useState({})
  const handleChange = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value })

  }
  const handleLogin = async () => {
    try {
      setloading(true)
      let login = await axios.post('/login', data)
      if (login.data.status == true) {
        setloading(false)
        toast.success("login Successfull")
        localStorage.setItem('gmail', data.email)
        localStorage.setItem('login', true)
        navigate('/home')
      }
      if (login.data.status == false) {
        setloading(false)
        if (login.data.message == 'Not Register') {
          toast.error('email Not Register')
          setloading(false)
          navigate('/register')
        }
        else {
          setloading(false)
          toast.error(login.data.message)
        }
      }
    } catch (error) {
      setloading(false)
      console.log(error)
    }
  
  }
  return (
    <div className='gradient' style={{position:'relative'}}>
      {loading&&<Loader/>}
      <div style={{ display: 'flex', height: '100vh' }}>
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: "column" }}>
          <div style={{ fontSize: '3rem', color: 'white' }}>Welcome</div>
          <div style={{ fontSize: '1rem', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: "column" }}>Lorem ipsum dolor sit amet, consectetura <div>dipiscing elit.</div></div>
          <div style={{ widows: '50%', height: '50%', clipPath: 'polygon(25% 0% , 83% 5%, 100% 54%, 94% 100%, 10% 100%, 0 35%)', borderRadius: '50%' }}>

            <img style={{ width: '100%', height: '100%' }} src={loginPng} alt="" srcset="" />

          </div>
        </div>



        <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: "column" }}>
          <div style={{ width: '50%', height: '70%', justifyContent: "space-around", backgroundColor: 'white', display: 'flex', alignItems: 'center', flexDirection: 'column', gap: 10, borderRadius: '1rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>

              <div style={{ color: '#980CE6', fontSize: '2rem', cursor: 'pointer' }}>Login</div>
              <div>Hello! Please enter your details for login.</div>
            </div>
            <div style={{ display: 'flex', width: '100%', gap: 20, flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>

              <input placeholder='Email' style={{ width: '80%', padding: '5px' }} onChange={handleChange} name='email' type="email" />
              <input placeholder='password' style={{ width: '80%', padding: '5px' }} onChange={handleChange} name='password' type="text" />
            </div>
            <button style={{ background: 'linear-gradient(to right, #CFA7EF 0%, #8B7DE0 100%)', padding: '10px', border: 'none', borderRadius: '5px' ,cursor:'pointer'}} onClick={handleLogin}>Submit</button>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
              <div>I don’t have an account on Review & Rate</div>
              <Link to={'/register'}>Register</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
