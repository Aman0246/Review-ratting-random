import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast';
import loginPng from '../login.png'
import Loader from './Loader';
import '../App.css'
export default function Register() {
  let [loading, setloading] = useState(false)
  const navigate = useNavigate()
  let [data, setdata] = useState({})
  const [City, setCity] = useState('Delhi');
  const [state, setstate] = useState('up');
  const handleChange = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value, city: City, state: state })
  }
  const handleRegister = async () => {
    try {
      setloading(true)
      let register = await axios.post('/register', data)
      if (register.data.status == true) {
        toast.success(register.data.message)
        setloading(false)
        navigate('/')
      }
      else if (register.data.status == false) {
        setloading(false)
        toast.error(register.data.message)
      }
    } catch (error) {
      setloading(false)
      console.log(error)
    }
 
  }
  // console.log(data)
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

              <div style={{ color: '#980CE6', fontSize: '2rem' }}>Sign Up</div>

            </div>
            <div style={{ display: 'flex', width: '100%', gap: 20, flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>

              <input style={{ width: '80%', padding: '5px' }} placeholder='Email' className='inputField' onChange={handleChange} name='email' type="email" />
              <input style={{ width: '80%', padding: '5px' }} placeholder='password' className='inputField' onChange={handleChange} name='password' type="text" />

              <input style={{ width: '80%', padding: '5px' }} className='inputField' onChange={handleChange} name='name' type="text" placeholder='name' />
              <input style={{ width: '80%', padding: '5px' }} className='inputField' onChange={handleChange} name='phone' type="text" placeholder='phonenumber' />

              {/* <input style={{width:'80%',padding:'5px'}} className='inputField' onChange={handleChange} name='city' type="text" placeholder='city' /> */}
              <select onChange={(e) => setCity(e.target.value)} value={City} style={{ width: '83%', padding: '5px' }} id="city" name="city">
                <option value="Delhi">Delhi</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Agra">Agra</option>
                {/* <!-- Add more cities as needed --> */}
              </select>
              <select onChange={(e) => setstate(e.target.value)} value={state} style={{ width: '83%', padding: '5px' }} id="state" name="state">
                <option value="up">Uttar pradesh</option>
                <option value="maharastra">Maharastra</option>
                <option value="Delhi">Delhi</option>
                {/* <!-- Add more cities as needed --> */}
              </select>
              {/* <input style={{width:'80%',padding:'5px'}} className='inputField' onChange={handleChange} name='state' type="text" placeholder='state' /> */}


            </div>
            <button style={{ background: 'linear-gradient(to right, #CFA7EF 0%, #8B7DE0 100%)', padding: '10px', border: 'none', borderRadius: '5px', cursor:'pointer'}} onClick={handleRegister}>Register</button>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
              <div>I don’t have an account on Review & Rate</div>
              <Link to={'/'}>Login</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
