import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import './style.css'
import Show from './Show';

function Upload(props) {
  const [ file, setFile] = useState();
  const [form, setForm] = useState()

  const navigate =useNavigate();
  function handleFile(event){
    setFile(event.target.files[0]);
    console.log('event.target.files[0]',event.target.files[0])
  }
  async function handleUpload (){
      if(form.file){
        try{
          const response = await fetch('http://localhost:3001/uploadimage1',{
            method:'POST',
            headers:{
              'Content-Type':'application/json',
            },
            body:setFile,
          })
          // pass data to see it and
          const data = await response.json();
          // save and render our image
          // Base64 is an encoding algorithm that allows converting any characters into an alphabet
          // which consists of Latin letters, digits, plus, and slash.
          setForm({...form,photo:`data:image/jpeg;base64, ${data.photo}`})
        }catch(error){alert('form create post',error)}
      }
      else{ alert('Please enter a file')}
    }

    // let g=setFile
    // console.log('b',g)
  // function handleUpload(){
  //   e.preventDefault();
  //   const formData = new FormData();
  //   formData.append("file", file);
  //   console.log('file',file)
  //   fetch(
  //     'url',
  //     {
  //       method:"POST",
  //       body:formData
  //     }
  //   ).then((response)=>response.json())
  //   .then(
  //     (result=>{
  //       console.log("success",result)
  //     }).catch(error=>{
  //       console.log("Error:", error)
  //     })
  //   )
  // }
  return (
    <div className='style'>
      <div>
        <h1>Upload your files</h1>
        <form onSubmit={handleUpload}>
          <input type="file" name='file' onChange={handleFile}></input>
          <button onClick={()=>{navigate("/show")}}>upload</button>
        </form>
      </div>
    </div>
  )
}
export default Upload