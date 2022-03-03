import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { CKEditor } from "@ckeditor/ckeditor5-react"
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

import './Write.css'

function Write() {
  const navigate = useNavigate()
  const [ id, setId ] = useState("")
  const [ password, setPassword ] = useState("")
  const [ title, setTitle ] = useState("")
  const [ contents, setContents] = useState("")

  function onChangeCKEditor(event, editor) {
    const data = editor.getData()
    setContents(data)
  }

  async function writeAxios() {
    const { data } = await axios({
      method: 'POST',
      url: "http://3.36.234.106:1208",
      data: {
        author: id,
        password: password,
        title: title,
        contents: contents     
      }
    })
    if (data.success) {
      navigate(`/read/${data.insertId}`)
    }
  }

  return (
    <div className="Write">
      <div className='author'>
        <input className='id' type='text' value={id} onChange={event => {setId(event.target.value)}} placeholder='Id'></input>
        <input className='password' type='password' value={password} onChange={event => {setPassword(event.target.value)}} placeholder='Password'></input>
        <input className='title' type='text' value={title} onChange={event => {setTitle(event.target.value)}} placeholder='Title'></input>  
      </div>
      <div className='text'>
        <CKEditor editor={ ClassicEditor } className='contents' value={contents} onChange={onChangeCKEditor} />
        <button onClick={writeAxios}>쓰기</button>
      </div>
    </div>
  )
}

export default Write
