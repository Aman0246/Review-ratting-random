import { Rating } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from "react-router-dom";
import Loader from './Loader';
export default function AddRatting({ id, setopenRattingModel }) {
    let [loading, setloading] = useState(false)
    const navigate = useNavigate()
    const [value, setValue] = React.useState(0);
    const handleSubmit = async () => {
        setloading(true)
        let a = localStorage.getItem('login')
        if (!a) {
            setloading(false)
            toast.error('Loginfirst')
            return navigate('/')
        }
        setopenRattingModel(false)
        let data = await axios.post('/addRatting', { id: id, starts: value })
        setloading(false)
        navigate('/home')

    }
    return (
        <>
            <div style={{ position:'relative',height: '100vh', backdropFilter: 'blur(5px)', background: 'transparent', width: '98vw', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
               {loading&&<Loader/>}
                <div>
                    <Rating
                        name="simple-controlled"
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }} />

                </div>
                <button style={{ marginLeft: '2rem' }} onClick={handleSubmit}>Submit</button>
            </div>
        </>
    )
}
