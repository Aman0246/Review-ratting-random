import React, { useState } from 'react'
import Dialog from '@mui/material/Dialog';
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';
import axios from 'axios';
import '../App.css'
import toast from 'react-hot-toast';
import Loader from './Loader';
export default function AddCompangDialog({ setopenDialog, openDialog }) {

    let [loading, setloading] = useState(false)
    const [inputs, setinputs] = useState({})
    const [City, setCity] = useState('Delhi')
    const handleChange = (e) => {
        setinputs({ ...inputs, [e.target.name]: e.target.value, City: City })
    }
    const Addcompany = async () => {
        setloading(true)
        let data = await axios.post('/addCompany', inputs)

        if (data.data.status == true) {
            toast.success(data.data.message)
            setloading(false)
        }
        else if ((data.data.status == false)) {
            toast.error(data.data.message)
            setloading(false)
        }
    }
    return (
        <Dialog open={openDialog}>
            <div style={{ position: 'relative', overflow: 'hidden', minWidth: '25vw', height: '70vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                {loading && <Loader />}
                <div style={{ position: 'absolute', top: 0, right: 2, cursor: 'pointer' }} onClick={() => setopenDialog(false)}><HighlightOffRoundedIcon /></div>
                <div style={{ width: '100%', height: '100%', justifyContent: "space-around", backgroundColor: 'white', display: 'flex', alignItems: 'center', flexDirection: 'column', gap: 10, borderRadius: '1rem' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>

                        <div style={{ color: '#980CE6', fontSize: '2rem' }}>Add Company</div>
                    </div>
                    <div style={{ display: 'flex', width: '100%', gap: 20, flexDirection: 'column', alignItems: 'center', justifyContent: 'center', paddingLeft: '5rem' }}>
                        <div className='addcompanyContainer'>
                            <div>Company name</div>
                            <input className='addcompany' onChange={handleChange} name='companyName' type="text" />
                        </div>
                        <div className='addcompanyContainer'>
                            <div>Location</div>
                            <input className='addcompany' onChange={handleChange} name='companyAddress' type="text" />
                        </div>
                        <div className='addcompanyContainer'>
                            <div>City</div>
                            <select onChange={(e) => setCity(e.target.value)} value={City} style={{ width: '83%', padding: '5px' }} id="city" name="city">
                                <option value="Delhi">Delhi</option>
                                <option value="Mumbai">Mumbai</option>
                                <option value="Agra">Agra</option>
                            </select>
                            {/* <input className='addcompany'  onChange={handleChange} name='City' type="text" /> */}
                        </div>
                        <div className='addcompanyContainer'>
                            <div>Founded on</div>
                            <input className='addcompany' onChange={handleChange} name='founded' type="text" />
                        </div>

                    </div>
                    <button style={{ background: 'linear-gradient(to right, #CFA7EF 0%, #8B7DE0 100%)', padding: '0.5rem 1rem', border: 'none', borderRadius: '5px', fontSize: '20px', fontWeight: 'bold', color: 'white', cursor: 'pointer' }} onClick={Addcompany}>Save</button>

                </div>
            </div>
        </Dialog>
    )
}
