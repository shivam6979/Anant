import React from 'react'
// import Box from '@mui/material/Box';
// import Dashboard from '../components/Dashboard'
import {useNavigate} from 'react-router-dom'
import './style.css'
import Upload from './Upload';

function Show(props) {
  const navigate =useNavigate();
  return (
    <div className='style'>
      <div>
      <h1>show</h1>
      {/* <Upload {...props.setFile} /> */}
      <span><button onClick={()=>{navigate("/upload")}}>Go to upload</button>
      </span><span><button onClick={()=>{navigate("/")}}>Go to dashboard</button></span>
      </div>
    </div>
  )
}
export default Show
